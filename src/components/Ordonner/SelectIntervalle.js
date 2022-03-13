import {
    ENTIERS_INFERIEURS_10,
    ENTIERS_INFERIEURS_100,
    ENTIERS_INFERIEURS_1000,
    ENTIERS_INFERIEURS_10000,
    ENTIERS_INFERIEURS_100000,
    ENTIERS_INFERIEURS_1000000,
    DECIMAUX_WITH_1_DIGIT,
    DECIMAUX_WITH_2_DIGIT,
    CROISSANT,
    DECROISSANT,
} from "./parametres.js";

function SelectIntervalle({
    changerIntervalle,
    changerOrdre,
    ordre,
    intervalle,
}) {
    function handleSelect(e) {
        e.preventDefault();
        switch (e.target.name) {
            case "intervalle":
                changerIntervalle(e.target.value);
                break;
            case "ordre":
                changerOrdre(e.target.value);
                break;
        }
    }
    return (
        <div className="row">
            <div className="col form-floating my-3">
                <select
                    name="intervalle"
                    id="selectIntervalle"
                    className="form-select form-select-lg"
                    value={intervalle}
                    onChange={handleSelect}
                >
                    <option value={ENTIERS_INFERIEURS_10}>
                        Des entiers plus petits que 10
                    </option>
                    <option value={ENTIERS_INFERIEURS_100}>
                        Des entiers plus petits que 100
                    </option>
                    <option value={ENTIERS_INFERIEURS_1000}>
                        Des entiers plus petits que 1 000
                    </option>
                    <option value={ENTIERS_INFERIEURS_10000}>
                        Des entiers plus petits que 10 000
                    </option>
                    <option value={ENTIERS_INFERIEURS_100000}>
                        Des entiers plus petits que 100 000
                    </option>
                    <option value={ENTIERS_INFERIEURS_1000000}>
                        Des entiers plus petits que 1 000 000
                    </option>
                    <option value={DECIMAUX_WITH_1_DIGIT}>
                        Des décimaux avec 1 chiffre après la virgule{" "}
                    </option>
                    <option value={DECIMAUX_WITH_2_DIGIT}>
                        Des décimaux avec 2 chiffres après la virgule{" "}
                    </option>
                </select>
                <label htmlFor="intervalle">
                    Choisir l'ordre de grandeur des nombres que vous souhaitez
                    ranger :
                </label>
            </div>
            <div className="col form-floating my-3">
                <select
                    name="ordre"
                    id="selectOrdre"
                    className="form-select form-select-lg"
                    value={ordre}
                    onChange={handleSelect}
                >
                    <option value={CROISSANT}>Ordre croissant</option>
                    <option value={DECROISSANT}>Ordre décroissant</option>
                </select>
                <label htmlFor="ordre">
                    Choisir l'ordre dans lequel vous souhaitez ranger les
                    nombres :
                </label>
            </div>
        </div>
    );
}

export default SelectIntervalle;
