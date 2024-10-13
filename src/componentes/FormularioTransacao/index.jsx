import React, { useState } from 'react';
import ListaTitulo from '../../pages/ListaTitulo';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import './formularioTransacao.css';

const FormularioTransacao = () => {
    const [titulo, setTitulo] = useState('');
    const [titulos, setTitulos] = useState([]);
    const [tipoTransacao, setTipoTransacao] = useState('Recebimento');
    const [valorTitulo, setValorTitulo] = useState(0);
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [dataEmissao, setDataEmissao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataVencimento, setDataVencimento] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [valorRecebidoOuPago, setValorRecebidoOuPago] = useState(0);
    const [statusTransacao, setStatusTransacao] = useState('Em Aberto');


    // Função pra mudança nos campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'titulo') setTitulo(value);
        if (name === 'valorTitulo') setValorTitulo(parseFloat(value));
        if (name === 'numeroDocumento') setNumeroDocumento(value);
        if (name === 'dataEmissao') setDataEmissao(value);
        if (name === 'categoria') setCategoria(value);
        if (name === 'descricao') setDescricao(value);
        if (name === 'dataVencimento') setDataVencimento(value);
        if (name === 'observacoes') setObservacoes(value);
        if (name === 'tipoTransacao') setTipoTransacao(value);
        if (name === 'statusTransacao') setStatusTransacao(value);

    };

    const adicionarTitulo = (e) => {
        e.preventDefault();
        const novoTitulo = { titulo, valor: valorTitulo };
        setTitulos([...titulos, novoTitulo]);

        // Reseta os campos
        resetarCamposTitulo();
    };

    // Procura titulo
    const procurarTitulo = (e) => {
        e.preventDefault();
        const tituloEncontrado = titulos.find((t) => t.titulo === titulo);

        if (tituloEncontrado) {
            setValorTitulo(tituloEncontrado.valor);
        } else {
            alert('Título não encontrado');
            resetarCamposTitulo();
        }
    };

    // Reseta os campos 
    const resetarCamposTitulo = () => {
        setTitulo('');
        setValorTitulo(0);
        setTipoTransacao('Recebimento');
    };


    const statusOptions = tipoTransacao === 'Recebimento'
        ? ['Em Aberto', 'Recebido']
        : ['Em Aberto', 'Pago'];

    return (

        <div className='container-transacao'>
            <div className='formulario-transacao'>

                <form>


                    <div className='header'>

                        <div className='img-form'>
                            <img src='/imagens/logo-cadastrar.JPG' alt='Logo' />
                        </div>
                        <h2>Lançamentos</h2>

                    </div>
                    <div className='titulo-transacao'>

                        <label>Título:</label>
                        <CampoTexto
                            placeholder="Digite o título"
                            onChange={handleInputChange}
                            valor={titulo}
                            name="titulo"
                        />
                        <div className='botoes'>
                            <Botao texto="PROCURAR TÍTULO" className="botao-procurar" onClick={procurarTitulo} />
                        </div>

                    </div>

                    <div className='grid-container'>
                        <CampoTexto
                            label="Número do Documento"
                            placeholder="Digite o número do documento"
                            type="text"
                            onChange={handleInputChange}
                            valor={numeroDocumento}
                            name="numeroDocumento"
                        />

                        <div className='tipo-transacao'>
                            <label>Tipo de Transação:</label>
                            <select
                                name="tipoTransacao"
                                value={tipoTransacao}
                                onChange={handleInputChange}
                            >
                                <option value="Recebimento">Recebimento</option>
                                <option value="Pagamento">Pagamento</option>
                            </select>
                        </div>

                        <CampoTexto
                            label="Data de Emissão"
                            placeholder="DD/MM/AAAA"
                            type="date"
                            onChange={handleInputChange}
                            valor={dataEmissao}
                            name="dataEmissao"
                        />

                        <CampoTexto
                            label="Data de Vencimento"
                            placeholder="DD/MM/AAAA"
                            type="date"
                            onChange={handleInputChange}
                            valor={dataVencimento}
                            name="dataVencimento"
                        />

                        <CampoTexto
                            label="Categoria"
                            placeholder="Digite a categoria"
                            type="text"
                            onChange={handleInputChange}
                            valor={categoria}
                            name="categoria"
                        />


                        <CampoTexto
                            label="Valor Título"
                            placeholder="Digite o valor do título"
                            type="number"
                            onChange={handleInputChange}
                            valor={valorTitulo}
                            name="valorTitulo"
                        />

                        <CampoTexto
                            label="Descrição"
                            placeholder="Digite uma descrição"
                            type="text"
                            onChange={handleInputChange}
                            valor={descricao}
                            name="descricao"
                        />

                        <div className='status-transacao'>
                            <label>Status:</label>
                            <select
                                name="statusTransacao"
                                value={statusTransacao}
                                onChange={handleInputChange}
                            >
                                {statusOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>


                    </div>

                    <div className='botao-container'>

                        <Botao texto="SALVAR TÍTULO" className="botao-salvar" type="submit" onClick={adicionarTitulo} />
                        <Botao texto="SAIR" className="botao-sair" onClick={resetarCamposTitulo} />

                    </div>


                </form>




            </div>


            <div className="lista-titulo">
                <ListaTitulo />
            </div>
        </div>



    );
};

export default FormularioTransacao;
