import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("debe mostrar el componente si está autenticado y guardar localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Hola</span>}
          {...props}
        />
      </MemoryRouter>
    );
    // <Redirect es un string vacío
    // console.log("---" + wrapper.html() + "+++");
    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("debe bloquear el componente si no está autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Hola</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(false);
    expect(wrapper.find("Redirect").exists()).toBe(true);
    expect(wrapper.find("Redirect").text().trim()).toBe("");
  });
});
