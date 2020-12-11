class Agendamento {
    constructor(_data, _tatuador, _cliente, _valor) {
        this._data = _data;
        this._tatuador = _tatuador;
        this._cliente = _cliente;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get tatuador() {
        return this._tatuador;
    }
    get cliente() {
        return this._cliente;
    }
    get valor() {
        return this._valor;
    }
}
