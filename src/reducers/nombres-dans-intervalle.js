export default function (intervalle) {
    const min = intervalle < 0 ? Math.floor(Math.random() * 8) : 0;
    const max = intervalle < 0 ? min + 2 : Math.pow(10, intervalle);
    const decimales = intervalle < 0 ? Math.pow(10, -intervalle) : 1;
    return Array.from({ length: 9 }).reduce((arr) => {
        let n = 0;
        do {
            const d =
                -intervalle !== 2
                    ? decimales
                    : Math.floor(Math.random() * 6) < 4
                    ? decimales
                    : 10;
            n = min + Math.floor(Math.random() * (max - min) * d) / d;
        } while (arr.includes(n));
        return [...arr, n];
    }, []);
}
