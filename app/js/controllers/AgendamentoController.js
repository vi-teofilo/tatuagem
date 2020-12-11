class AgendamentoController {
    constructor() {
        this._agendas = new Agendas();
        this._agendasView = new AgendasView('#agendasView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputTatuador = $('#tatuador');
        this._inputCliente = $('#cliente');
        this._inputValor = $('#valor');
        this._agendasView.update(this._agendas);
    }
    adiciona(event) {
        event.preventDefault();
        const agendamento = new Agendamento(new Date(this._inputData.val().replace(/-/g, '-')), String(this._inputCliente.val()), String(this._inputTatuador.val()), (parseFloat(this._inputValor.val())));
        this._agendas.adiciona(agendamento);
        this._agendasView.update(this._agendas);
        this._mensagemView.update("Agendamento efetuado com sucesso!");
    }
}
