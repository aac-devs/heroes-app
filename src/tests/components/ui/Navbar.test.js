import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

describe("Pruebas en <Navbar />", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Andrés",
      logged: true,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe(
      contextValue.user.name
    );
  });

  test("debe llamar el logout y usar el history", () => {
    // wrapper.find("button").simulate("click");
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
