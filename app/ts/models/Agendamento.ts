class Agendamento {

  constructor(
        private _data: Date,
        private _tatuador: string,
        private _cliente: string,
        private _valor: number) { }


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