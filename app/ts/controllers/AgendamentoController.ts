class AgendamentoController {

    private _inputCliente: JQuery;
    private _inputData: JQuery;
    private _inputTatuador: JQuery;
    private _inputValor: JQuery;
    private _agendas = new Agendas();
    private _agendasView = new AgendasView('#agendasView');
    private _mensagemView = new MensagemView('#mensagemView')
   

    constructor(){
        this._inputData = $('#data');
        this._inputTatuador = $('#tatuador');
        this._inputCliente = $('#cliente');
        this._inputValor = $('#valor');
        this._agendasView.update(this._agendas);

    }

    adiciona (event: Event){
        event.preventDefault();

        const agendamento = new Agendamento(
            new Date(this._inputData.val().replace(/-/g, '-')),
            String(this._inputCliente.val()),
            String(this._inputTatuador.val()),
            (parseFloat(this._inputValor.val()))); 

            
            
            this._agendas.adiciona(agendamento);
            this._agendasView.update(this._agendas);
            this._mensagemView.update("Agendamento efetuado com sucesso!");

    
    }


  /*  remove (event: Event){
        $("#tabela > tbody > tr").on("click", function (e) {
            $(this._agendasView.tr.siblings().removeClass("ativo"));
            $(this._agendasView).toggleClass("ativo");
        }); */
    }

  
