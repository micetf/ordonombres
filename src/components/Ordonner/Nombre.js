function Nombre({ valeur }) {
    return (
        <div className="ui-state-default nombre" data-nombre={valeur}>
            {new Intl.NumberFormat("fr-FR").format(valeur)}
        </div>
    );
}

export default Nombre;
