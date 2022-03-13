import React from "react";
import { code } from "./parametres.js";

function Valider({ sortedCards, changerMessage }) {
    function handleClick(e) {
        e.preventDefault();
        const fileActuelle = document.querySelectorAll("#sortable > div");
        const cardsAreSorted = sortedCards.reduce(
            (same, card, index) =>
                same && card === parseFloat(fileActuelle[index].dataset.nombre),
            true
        );
        cardsAreSorted
            ? changerMessage({
                  code: code.ORDRE_CORRECT,
                  text: "Felicitation, tu as rangé les nombres dans le bon ordre.",
                  color: "alert-success",
              })
            : changerMessage({
                  code: code.ORDRE_INCORRECT,
                  text: "Vérifie, tu n'as pas rangé les nombres dans le bon ordre.",
                  color: "alert-warning",
              });
    }
    return (
        <div className="d-grid gap-2 col-3 mt-5 mx-auto">
            <button
                className="btn btn-primary"
                onClick={handleClick}
                type="button"
            >
                Valider
            </button>
        </div>
    );
}

export default Valider;
