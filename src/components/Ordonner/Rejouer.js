import React from "react";
import { code } from "./parametres.js";

function Rejouer({ rejouer }) {
    function handleClick(e) {
        e.preventDefault();
        rejouer();
    }
    return (
        <div className="d-grid gap-2 col-3 mt-5 mx-auto">
            <button
                className="btn btn-success"
                onClick={handleClick}
                type="button"
            >
                Rejouer
            </button>
        </div>
    );
}

export default Rejouer;
