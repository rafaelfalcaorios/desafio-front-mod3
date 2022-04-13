import './styles.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import vector from '../../assets/vector.svg';
import filtro from '../../assets/filtro.svg';


export default function Main() {
  async function handleEditarUsuario(e) {

  }

  function handleSair() {

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
          <h3>Nome usuario</h3>
          <img
            className='header-saida'
            onClick={handleSair}
            src={vector}
            alt='Sair'
          />
        </div>
      </div>
      <div className='filtro'>
        <img src={filtro} />
        <span>Filtro</span>
      </div>
      <div className='container-pagina'>
        <div className='container-tabela'>
          <div className='tabela cabecalho'>
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
          <div className='tabela'>
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


