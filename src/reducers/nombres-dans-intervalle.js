export default function (intervalle) {
    const max = intervalle < 0 ? 10 : Math.pow(10, intervalle);
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
            n = 1 + Math.floor(Math.random() * (max - 1) * d) / d;
        } while (arr.includes(n));
        return [...arr, n];
    }, []);
}
