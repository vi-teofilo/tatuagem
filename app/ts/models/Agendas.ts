class Agendas{
    private _agendas: Agendamento [] = [];

    adiciona(agendamento: Agendamento){
        this._agendas.push(agendamento);
    }

    retornaArray(): Agendamento[] {
        return [].concat(this._agendas);
    }
}