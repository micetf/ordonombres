import FileNombres from "./FileNombres.js";
import Message from "./Message.js";
import Aide from "./Aide.js";
import AideButton from "./AideButton.js";
import SelectIntervalle from "./SelectIntervalle.js";
import Valider from "./Valider.js";
import useActions from "../../actions/index.js";
import { code } from "./parametres.js";
import Rejouer from "./Rejouer.js";

function Ordonner() {
    const [
        {
            visibiliteAide,
            shuffledCards,
            sortedCards,
            message,
            sortable,
            intervalle,
            ordre,
        },
        {
            ouvrirAide,
            fermerAide,
            changerIntervalle,
            changerOrdre,
            changerMessage,
        },
    ] = useActions();

    function effacerMessage() {
        changerMessage({ code: code.MUET });
    }
    function rejouer() {
        changerIntervalle(intervalle);
    }

    return (
        <div className="container-fluid">
            <AideButton ouvrirAide={ouvrirAide} />
            <SelectIntervalle
                changerIntervalle={changerIntervalle}
                changerOrdre={changerOrdre}
                intervalle={intervalle}
                ordre={ordre}
            />
            <Message message={message} />
            <FileNombres
                shuffledCards={shuffledCards}
                effacerMessage={effacerMessage}
                sortable={sortable}
            />
            {sortable ? (
                <Valider
                    sortedCards={sortedCards}
                    changerMessage={changerMessage}
                />
            ) : (
                <Rejouer rejouer={rejouer} />
            )}
            <Aide visibiliteAide={visibiliteAide} fermerAide={fermerAide} />
        </div>
    );
}

export default Ordonner;
