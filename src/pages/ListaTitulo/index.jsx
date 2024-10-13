import React, { useEffect, useState } from 'react';
import './listaTitulo.css';

const ListaTitulo = () => {
    const [dados, setDados] = useState([]);
    const [filterTipo, setFilterTipo] = useState('Todos');
    const [filterStartDate, setFilterStartDate] = useState(null);
    const [filterEndDate, setFilterEndDate] = useState(null);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const response = await fetch('http://localhost:8080/titulos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                const data = await response.json();
                setDados(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchDados();
    }, []);

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
                            <td>{new Date(item.dataEmissao).toLocaleDateString('pt-BR')}</td>
                            <td>{new Date(item.venc).toLocaleDateString('pt-BR')}</td>
                            <td>{item.categoria}</td>
                            <td>{Number(item.valor).toFixed(2).replace('.', ',')}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaTitulo;
