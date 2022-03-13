import * as type from "./types";
import { useReducer } from "react";
import reducer, { initialState } from "../reducers";

function useActions() {
    const [
        {
            message,
            intervalle,
            ordre,
            shuffledCards,
            sortedCards,
            visibiliteAide,
            sortable,
        },
        dispatch,
    ] = useReducer(reducer, initialState);
    function changerIntervalle(intervalle) {
        dispatch({ type: type.MAJ_INTERVALLE, intervalle });
    }
    function changerOrdre(ordre) {
        dispatch({ type: type.MAJ_ORDRE, ordre });
    }

    function changerMessage(nouveauMessage) {
        dispatch({ type: type.MAJ_MESSAGE, message: nouveauMessage });
    }
    function ouvrirAide() {
        dispatch({ type: type.TOGGLE_VISIBILITE_AIDE, visibiliteAide: true });
    }
    function fermerAide() {
        dispatch({ type: type.TOGGLE_VISIBILITE_AIDE, visibiliteAide: false });
    }

    return [
        {
            visibiliteAide,
            message,
            ordre,
            intervalle,
            shuffledCards,
            sortedCards,
            sortable,
        },
        {
            changerMessage,
            changerIntervalle,
            changerOrdre,
            ouvrirAide,
            fermerAide,
        },
    ];
}

export default useActions;
