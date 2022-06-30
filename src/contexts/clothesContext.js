import React, { createContext, useReducer } from "react";
import axios from "axios";
import { Action } from "history";

export const clothesContext = createContext();

const API = "http://localhost:8000/mens";

const INIT_STATE = {
  mens: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MENS":
      return {
        ...state,
        mens: action.payload.data,
      };
    case "GET_ONE_MEN":
      return {
        ...state,
        oneMen: action.payload,
      };
    default:
      return state;
  }
}

const ClothesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //   Для отправки в db
  async function createMens(newMens) {
    await axios.post(API, newMens);
  }

  //   Для получения
  async function getMens() {
    let res = await axios(`${API}`);
    dispatch({
      type: "GET_MENS",
      payload: res,
    });
  }

  //   Для получения одной одежды
  async function getOneMen(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MEN",
      payload: res.data,
    });
  }

  //   Для удаления
  async function deleteMen(id) {
    await axios.delete(`${API}/${id}`);
    getMens();
  }

  //   Для редактирования
  async function editMen(id, editedMen) {
    await axios.patch(`${API}/${id}`, editedMen);
  }

  return (
    <clothesContext.Provider
      value={{
        mens: state.mens,
        oneMen: state.oneMen,
        createMens,
        getMens,
        getOneMen,
        deleteMen,
        editMen,
      }}
    >
      {children}
    </clothesContext.Provider>
  );
};

export default ClothesContextProvider;
