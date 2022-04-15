import './styles.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import vector from '../../assets/vector.svg';
import filtro from '../../assets/filtro.svg';
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
        {/* <div className='container-tabela'>
          <div className='tabela cabecalho'>
            <div className='tabela-campo'>
              <span>Data</span>
            </div>
            <div className='tabela-campo'>
              <span>Dia da semana</span>
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
          </div> */}
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
            {form.map (item => {
              return (
              
                <tr key={item.id} >
                  <td className='tabela-campo normal'>{format ( new Date(item.data), 'dd/MM/yy')}</td>
                  <td className='tabela-campo normal'>{format ( new Date(item.data), 'eeee',{ locale: ptBR })}</td>
                  <td className='tabela-campo normal'>{item.descricao}</td>
                  <td className='tabela-campo normal'>{item.categoria_nome}</td>
                  <td className='tabela-campo normal'>{item.valor}</td>
                  <td className='tabela-campo editar'></td>
                  <td className='tabela-campo deletar'></td>
                </tr>
               
              )
            })}
            </tbody>
          </table>
          {/* {form.map(item  => {
              
            return (
              <div key={item.id} className='tabela'>
            <div className='tabela-campo'>
              <span >{format ( new Date(item.data), 'dd/MM/yy')}</span>
            </div>
            <div className='tabela-campo'>
              <span >{format ( new Date(item.data), 'dd')}</span>
            </div>
            <div className='tabela-campo'>
              <span >{item.descricao}</span>
            </div>
            <div className='tabela-campo'>
              <span >{item.categoria_nome}</span>
            </div>
            <div className='tabela-campo'>
              <span >{item.valor}</span>
            </div>
            <div className='tabela-campo editar'>

            </div>
            <div className='tabela-campo deletar'>

            </div>
          </div>
          );
        })}
        </div> */}
       

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


