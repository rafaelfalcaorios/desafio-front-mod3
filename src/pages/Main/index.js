import './styles.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import vector from '../../assets/vector.svg';
import filtro from '../../assets/filtro.svg';
import { limpar, getItem } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';



export default function Main() {
  const token = getItem('token');
  const usuarioId = getItem('usuarioId');

  const navegar = useNavigate();

  const [form, setForm] = useState({
    nome:'',
    data: '',
    diaDaSemana: '',
    descricao: '',
    categoria: '',
    valor: ''
  });

  useEffect(() => {
    async function dadosDaTransacao() {
      try {
        const response = await api.get(`/transacao/${usuarioId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setForm({ ...form, ...response.data })
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

    dadosDaTransacao();
    
  }, []);

  async function handleEditarUsuario(e) {

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
      <div className='filtro'>
        <img src={filtro} alt='funil'/>
        <span>Filtro</span>
      </div>
      <div className='container-pagina'>
        <div className='container-tabela'>
          <div className='tabela-campo'>
            <span>Data</span>
          </div>
          <div className='tabela-campo'>
            <span>Descrição</span>
          </div>
          <div className='tabela-campo'>
            <span>Categoria</span>
          </div>
          <div className='tabela-campo'>
            <span>Valor</span>
          </div>
          <div className='tabela-campo editar'>

          </div>
          <div className='tabela-campo deletar'>

          </div>
        </div>
        <div className='container-resumo'>
          <h3>Resumo</h3>
          <span>Entradas: valor</span>
          <span>Saídas: valor</span>
          <span className='total'>Total: valor</span>
          <button type='button'>Adicionar Registro</button>
        </div>
      </div>
    </div>
  );
}


