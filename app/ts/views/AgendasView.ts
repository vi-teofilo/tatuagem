class AgendasView  extends View<Agendas>{


    template(model: Agendas): string {
 
        return `
            <table  id="tabela" class="tabela">
                <thead>
                    <tr class="table-header texto-header-estilo">
                        <th>CLIENTE</th>
                        <th>TATUADOR</th>
                        <th>VALOR</th>
                        <th>DATA DO AGENDAMENTO</th>
                        <th>HORARIO AGENDADO</th>
                    </tr>
                </thead>
    
                <tbody class="table table-hover table-agenda ">
                ${model.retornaArray().map(agendamento =>
                    `<tr>
                        <td>${agendamento.cliente}</td>
                        <td>${agendamento.tatuador}</td>
                        <td>${agendamento.valor} R$</td>
                        <td>Dia: 
                        ${agendamento.data.getUTCDate()}/
                        ${agendamento.data.getUTCMonth() +1}/
                        ${agendamento.data.getUTCFullYear()}</td>
                        <td>Às 
                        ${agendamento.data.getUTCHours()}:${agendamento.data.getUTCMinutes()} </td>
                        
                       
                       
                    </tr>                        
                    `).join('')} 

                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `
    }


}


