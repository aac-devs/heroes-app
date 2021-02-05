import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <AppRouter />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("debe mostrar el login si no está autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("LoginScreen").exists()).toBe(true);
  });

  test("debe mostrar el componente marvel si está autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "Andrés",
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find("LoginScreen").exists()).toBe(false);
    expect(wrapper.find("MarvelScreen").exists()).toBe(true);
  });
});
