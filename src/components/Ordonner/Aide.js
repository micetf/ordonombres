import modal from "bootstrap/js/dist/modal";
import { useEffect, useRef } from "react";

function Aide({ visibiliteAide, fermerAide }) {
    const aideModal = useRef(null);

    useEffect(() => {
        const modalHandler = new modal(aideModal.current);
        if (visibiliteAide) modalHandler.show();
    }, [visibiliteAide]);

    function handleClick(e) {
        e.preventDefault();
        fermerAide();
    }
    return (
        <div
            ref={aideModal}
            className="modal fade"
            data-bs-backdrop="static"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="aide">
                            Nombres entiers ou décimaux : comparaison
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p className="fw-bold text-decoration-underline">
                            Objectifs :
                        </p>
                        <ul>
                            <li>
                                Entretenir la capacité à comparer des nombres
                                écrits en chiffres.
                            </li>
                        </ul>
                        <p className="fw-bold text-decoration-underline">
                            But du jeu :
                        </p>
                        <ul>
                            <li>
                                Ranger les nombres dans l'ordre croissant ou
                                décroissant.
                            </li>
                        </ul>
                        <p className="fw-bold text-decoration-underline">
                            Déroulement :
                        </p>
                        <ul>
                            <li>
                                Choisir l'ordre de grandeur des nombres avec
                                lesquels vous souhaitez travailler (Entiers
                                indérieurs à 10, 100, 1 000, 10 000, 100 000, 1
                                000 000 ? Décimaux avec 1 ou 2 chiffres après la
                                virgule ?).
                            </li>
                            <li>
                                Choisir l'ordre dans lequel vous souhaitez
                                ranger les nombres (croissant, décroissant ?).
                            </li>
                            <li>
                                Utiliser le glisser/déposer pour ranger les
                                nombres dans l'ordre souhaité.
                            </li>
                            <li>
                                Cliquer sur valider pour vérifier votre
                                proposition.
                            </li>
                        </ul>
                    </div>
                    <p></p>{" "}
                </div>
            </div>
        </div>
    );
}

export default Aide;
