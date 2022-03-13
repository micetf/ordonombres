import { useEffect } from "react";
import "webpack-jquery-ui/sortable";
import "webpack-jquery-ui/css";
import "jquery-ui-touch-punch";
import Nombre from "./Nombre.js";

function FileNombres({ shuffledCards, effacerMessage, sortable }) {
    useEffect(() => {
        $("#sortable").sortable({
            opacity: 0.8,
            axis: "x",
            start: () => effacerMessage(),
        });
    }, []);
    useEffect(() => {
        sortable
            ? $("#sortable").sortable("enable")
            : $("#sortable").sortable("disable");
    }, [sortable]);

    return (
        <div
            id="sortable"
            className="d-flex justify-content-around align-items-end bg-info"
        >
            {shuffledCards.map((n) => (
                <Nombre valeur={n} key={n} />
            ))}
        </div>
    );
}

export default FileNombres;
