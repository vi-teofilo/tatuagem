class Agendas {
    constructor() {
        this._agendas = [];
    }
    adiciona(agendamento) {
        this._agendas.push(agendamento);
    }
    retornaArray() {
        return [].concat(this._agendas);
    }
}
