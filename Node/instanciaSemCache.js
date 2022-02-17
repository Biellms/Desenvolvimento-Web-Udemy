// node não faz cache
// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        },
        dec() {
            this.valor--
        }
    }
}