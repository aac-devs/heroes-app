import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe("Pruebas con <LoginScreen />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Andrés",
      logged: true,
    },
  };

  const historyMock = {
    replace: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe realizar el dispatch y la navegación", () => {
    const handleClick = wrapper.find("button").prop("onClick");
    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Andrés",
      },
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/");

    localStorage.setItem("lastPath", "/dc");
    handleClick();
    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });
});
