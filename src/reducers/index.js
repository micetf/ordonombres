import {
    code,
    intervalleInitial,
    ordreInitial,
} from "../components/Ordonner/parametres";
import * as type from "../actions/types";
import { shuffle } from "shuffle";
import getNombresInIntervalle from "./nombres-dans-intervalle";

const QTE_NOMBRES = 7;
const rangerEnOrdre = function (ordre, a, b) {
    return a < b ? -1 * ordre : 1 * ordre;
};
const initialDeck = shuffle({
    deck: getNombresInIntervalle(intervalleInitial),
});
const initialSortedCards = initialDeck
    .draw(QTE_NOMBRES)
    .sort((a, b) => rangerEnOrdre(ordreInitial, a, b));

const initialShuffledCards = shuffle({ deck: initialSortedCards }).draw(
    QTE_NOMBRES
);

export const initialState = {
    message: { code: code.MUET },
    visibiliteAide: false,
    intervalle: intervalleInitial,
    ordre: ordreInitial,
    sortedCards: initialSortedCards,
    shuffledCards: initialShuffledCards,
    sortable: true,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.MAJ_MESSAGE:
            return action.message.code === code.ORDRE_CORRECT
                ? { ...state, sortable: false, message: action.message }
                : { ...state, message: action.message };
        case type.MAJ_INTERVALLE:
            const deck = shuffle({
                deck: getNombresInIntervalle(action.intervalle),
            });
            const sortedCards = deck
                .draw(QTE_NOMBRES)
                .sort((a, b) => rangerEnOrdre(state.ordre, a, b));
            const shuffledCards = shuffle({ deck: sortedCards }).draw(
                QTE_NOMBRES
            );

            return {
                ...initialState,
                intervalle: action.intervalle,
                ordre: state.ordre,
                shuffledCards,
                sortedCards,
            };
        case type.MAJ_ORDRE:
            return {
                ...state,
                sortable: true,
                message: { code: code.MUET },
                sortedCards: state.sortedCards.sort((a, b) =>
                    rangerEnOrdre(action.ordre, a, b)
                ),
                ordre: action.ordre,
            };

        case type.TOGGLE_VISIBILITE_AIDE:
            return {
                ...state,
                visibiliteAide: action.visibiliteAide,
            };
        default:
            return state;
    }
}

export default reducer;
