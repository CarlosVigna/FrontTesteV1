import React, { useState } from 'react';
import './listaTitulo.css';

const ListaTitulo = () => {
    const [filterTipo, setFilterTipo] = useState('Todos');
    const [filterStartDate, setFilterStartDate] = useState('');
    const [filterEndDate, setFilterEndDate] = useState('');

        const dados = [

            { id: 1, tipo: 'Recebimento', dataEmissao: '2024-10-01', venc: '2024-10-15', categoria: 'Aluguel', valor: 1200, status: 'Em aberto' },
            { id: 2, tipo: 'Pagamento', dataEmissao: '2024-09-20', venc: '2024-10-05', categoria: 'Academia', valor: 150, status: 'Pago' },
            { id: 3, tipo: 'Recebimento', dataEmissao: '2024-09-15', venc: '2024-09-30', categoria: 'Serviço', valor: 500, status: 'Recebido' },
            { id: 4, tipo: 'Pagamento', dataEmissao: '2024-09-25', venc: '2024-10-10', categoria: 'Conta de Luz', valor: 200, status: 'Em aberto' },
            { id: 5, tipo: 'Recebimento', dataEmissao: '2024-09-30', venc: '2024-10-20', categoria: 'Freelance', valor: 1000, status: 'Em aberto' },
            { id: 6, tipo: 'Pagamento', dataEmissao: '2024-09-01', venc: '2024-09-15', categoria: 'Internet', valor: 100, status: 'Pago' },
            { id: 7, tipo: 'Recebimento', dataEmissao: '2024-08-15', venc: '2024-08-30', categoria: 'Venda de produto', valor: 300, status: 'Recebido' },
            { id: 8, tipo: 'Pagamento', dataEmissao: '2024-08-20', venc: '2024-09-05', categoria: 'Transporte', valor: 50, status: 'Pago' },
            { id: 9, tipo: 'Recebimento', dataEmissao: '2024-08-01', venc: '2024-08-15', categoria: 'Consultoria', valor: 700, status: 'Em aberto' },
            { id: 10, tipo: 'Pagamento', dataEmissao: '2024-07-25', venc: '2024-08-10', categoria: 'Alimentação', valor: 400, status: 'Pago' },
            { id: 11, tipo: 'Pagamento', dataEmissao: '2024-09-01', venc: '2024-09-15', categoria: 'Internet', valor: 100, status: 'Pago' },
            { id: 12, tipo: 'Recebimento', dataEmissao: '2024-08-15', venc: '2024-08-30', categoria: 'Venda de produto', valor: 300, status: 'Recebido' },
            { id: 13, tipo: 'Pagamento', dataEmissao: '2024-08-20', venc: '2024-09-05', categoria: 'Transporte', valor: 50, status: 'Pago' },
            { id: 14, tipo: 'Recebimento', dataEmissao: '2024-08-01', venc: '2024-08-15', categoria: 'Consultoria', valor: 700, status: 'Em aberto' },
            { id: 15, tipo: 'Pagamento', dataEmissao: '2024-07-25', venc: '2024-08-10', categoria: 'Alimentação', valor: 400, status: 'Pago' },
            { id: 16, tipo: 'Pagamento', dataEmissao: '2024-09-01', venc: '2024-09-15', categoria: 'Internet', valor: 100, status: 'Pago' },
            { id: 17, tipo: 'Recebimento', dataEmissao: '2024-08-15', venc: '2024-08-30', categoria: 'Venda de produto', valor: 300, status: 'Recebido' },
            { id: 18, tipo: 'Pagamento', dataEmissao: '2024-08-20', venc: '2024-09-05', categoria: 'Transporte', valor: 50, status: 'Pago' },
            { id: 19, tipo: 'Recebimento', dataEmissao: '2024-08-01', venc: '2024-08-15', categoria: 'Consultoria', valor: 700, status: 'Em aberto' },
            { id: 20, tipo: 'Pagamento', dataEmissao: '2024-07-25', venc: '2024-08-10', categoria: 'Alimentação', valor: 400, status: 'Pago' },
            { id: 21, tipo: 'Pagamento', dataEmissao: '2024-09-01', venc: '2024-09-15', categoria: 'Internet', valor: 100, status: 'Pago' },
            { id: 22, tipo: 'Recebimento', dataEmissao: '2024-08-15', venc: '2024-08-30', categoria: 'Venda de produto', valor: 300, status: 'Recebido' },
            { id: 23, tipo: 'Pagamento', dataEmissao: '2024-08-20', venc: '2024-09-05', categoria: 'Transporte', valor: 50, status: 'Pago' },
            { id: 24, tipo: 'Recebimento', dataEmissao: '2024-08-01', venc: '2024-08-15', categoria: 'Consultoria', valor: 700, status: 'Em aberto' },
            { id: 25, tipo: 'Pagamento', dataEmissao: '2024-07-25', venc: '2024-08-10', categoria: 'Alimentação', valor: 400, status: 'Pago' },
            
        
    ];

    const handleFilterTipoChange = (event) => {
        setFilterTipo(event.target.value);
    };

    const handleFilterStartDateChange = (event) => {
        setFilterStartDate(event.target.value);
    };
    
    const handleFilterEndDateChange = (event) => {
        setFilterEndDate(event.target.value);
    };

    const filteredData = dados.filter((item) => {
        const itemVenc = new Date(item.venc);
        const startDate = filterStartDate ? new Date(filterStartDate) : null;
        const endDate = filterEndDate ? new Date(filterEndDate) : null;

       
        const tipoMatch = filterTipo === 'Todos' || item.tipo === filterTipo;

        
        const dateMatch = (!startDate || itemVenc >= startDate) && (!endDate || itemVenc <= endDate);

        return tipoMatch && dateMatch;
    });

    return (
        <div className="table-container">
            <div className='titulo-lancamentos'>
                <h1>Histórico de Lançamentos</h1>
            </div>
            <div className="filter-container">
                <label htmlFor="filter">Filtrar por: </label>
                <select id="filter" value={filterTipo} onChange={handleFilterTipoChange}>
                    <option value="Todos">Todos</option>
                    <option value="Recebimento">Recebimentos</option>
                    <option value="Pagamento">Pagamentos</option>
                </select>
                
                <label htmlFor="startDate">Data Inicial: </label>
                <input
                    type="date"
                    id="startDate"
                    value={filterStartDate}
                    onChange={handleFilterStartDateChange}
                />
                
                <label htmlFor="endDate">Data Final: </label>
                <input
                    type="date"
                    id="endDate"
                    value={filterEndDate}
                    onChange={handleFilterEndDateChange}
                />
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Núm. Doc.</th>
                        <th scope="col">Tipo Trans.</th>
                        <th scope="col">Data Emissão</th>
                        <th scope="col">Venc.</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Valor Título (R$)</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.tipo}</td>
                            <td>{item.dataEmissao}</td>
                            <td>{item.venc}</td>
                            <td>{item.categoria}</td>
                            <td>{item.valor.toFixed(2).replace('.', ',')}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaTitulo;
