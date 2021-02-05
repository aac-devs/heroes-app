import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
  };
  const loginState = {
    name: "Andrés",
    logged: true,
  };

  test("debe retornar el estado por defecto", () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("debe autenticar y colocar el name del usuario", () => {
    const state = authReducer(initialState, {
      type: types.login,
      payload: {
        name: "Andrés",
      },
    });
    expect(state).toEqual(loginState);
  });

  test("debe borrar el name del usuario y poner el logged en false", () => {
    const state = authReducer(loginState, {
      type: types.logout,
    });
    expect(state).toEqual(initialState);
  });
});
