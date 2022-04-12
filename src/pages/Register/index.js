import './styles.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

export default function Register() {

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.senha || !form.confirmarSenha) {
      return
    }
    if (form.senha !== form.confirmarSenha) {
      return;
    }

    await handleAddUsuario();
    setForm({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    });
  }

  async function handleAddUsuario() {

  }

  return (
    <div className='login-container'>
      <div className='header-div'>
        <img className='header' src={logo} alt='Logomarca' />
      </div>
      <div className='container-register'>
        <h1>Cadastrar-se</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor='nome'>Nome</label>
          <input
            name='nome'
            type='text'
            value={form.nome}
            onChange={handleInput}
          />

          <label
            htmlFor='email'
          >E-mail</label>
          <input
            name='email'
            type='text'
            value={form.email}
            onChange={handleInput}
          />

          <label
            htmlFor='senha'
          >
            Senha
          </label>
          <input
            name='senha'
            type='password'
            value={form.senha}
            onChange={handleInput}
          />

          <label
            htmlFor='confirmarSenha'
          >
            Confirmação de senha
          </label>
          <input
            name='confirmarSenha'
            type='password'
            value={form.confirmarSenha}
            onChange={handleInput}
          />
          <button>Cadastrar</button>
          <h3>Já tem cadastro? <a>Clique aqui!</a></h3>
        </form>

      </div>
    </div>
  );
}


