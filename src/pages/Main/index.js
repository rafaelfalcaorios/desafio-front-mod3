import './styles.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import vector from '../../assets/vector.svg';
import filtro from '../../assets/filtro.svg';
import editar from '../../assets/editar.svg';
import lixo from '../../assets/lixo.svg';
import { limpar, getItem } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';




export default function Main() {
  const token = getItem('token');
  const usuarioId = getItem('usuarioId');

  const navegar = useNavigate();

  const [form, setForm] = useState([]);

  useEffect(() => {
    async function dadosDaTransacao() {
      try {
        const response = await api.get('/transacao', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setForm(response.data)

      } catch (error) {
        console.log(error.message);
      }
    }

    dadosDaTransacao();

  }, []);

  async function handleEditarUsuario(e) {

  }

  async function handleFiltro() {

  }

  async function handleEditarTransacao(e) {
    const id = e.target.id;
    const response = await api.get(`/transacao/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });


  }

  async function handleExcluirTransacao(e) {
    const id = e.target.id;
    const response = await api.delete(`/transacao/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 204) {

    }
  }

  async function handleAdicionarRegistro() {

  }

  function handleSair() {
    limpar();
    navegar('/');
  }

  return (
    <div className='container-main'>
      <div className='header-main'>
        <img className='header' src={logo} alt='Logomarca' />
        <div className='header-right'>
          <img
            className='header-avatar'
            onClick={handleEditarUsuario}
            src={avatar}
            alt='Avatar'
          />
          <h3>usuario</h3>
          <img
            className='header-saida'
            onClick={handleSair}
            src={vector}
            alt='Sair'
          />
        </div>
      </div>
      <div className='filtro' onClick={handleFiltro}>
        <img src={filtro} alt='funil' />
        <span>Filtrar</span>
      </div>
      <div className='container-pagina'>

        <table className='container-tabela'>

          <thead className='tabela cabecalho'>
            <tr >
              <th className='tabela-campo normal'>Data</th>
              <th className='tabela-campo normal'>Dia da semana</th>
              <th className='tabela-campo normal'>Descrição</th>
              <th className='tabela-campo normal'>Categoria</th>
              <th className='tabela-campo normal'>Valor</th>
              <th className='tabela-campo editar'></th>
              <th className='tabela-campo deletar'></th>
            </tr>
          </thead>

          <tbody className='tabela'>
            {form.map(item => {
              return (

                <tr key={item.id} >
                  <td className='tabela-campo normal'>{format(new Date(item.data), 'dd/MM/yy')}</td>
                  <td className='tabela-campo normal'>{format(new Date(item.data), 'eeee', { locale: ptBR })}</td>
                  <td className='tabela-campo normal'>{item.descricao}</td>
                  <td className='tabela-campo normal'>{item.categoria_nome}</td>
                  <td className='tabela-campo normal'>{item.valor}</td>
                  <td className='tabela-campo editar'><img src={editar} alt='Edicao' onClick={handleEditarTransacao} /></td>
                  <td className='tabela-campo deletar'><img src={lixo} alt='Excluir' onClick={handleExcluirTransacao} /></td>
                </tr>

              )
            })}
          </tbody>
        </table>


        <div className='container-resumo'>
          <div className='resumo'>
            <h3>Resumo</h3>
            <span>Entradas: </span>
            <span>Saídas: </span>
            <span className='total'>Total: </span>
          </div>
          <button type='button' className='registro' onClick={handleAdicionarRegistro}>Adicionar Registro</button>
        </div>
      </div>
    </div>
  );
}


