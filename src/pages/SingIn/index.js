import './styles.css';
import api from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.svg';


export default function SignIn() {

  const [form, setForm] = useState({
    email: '',
    senha: ''
  });

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.senha) {
      return;
    }

  }

  return (
    <div className='login-container'>
      <div className='header-div'>
        <img className='header' src={logo} />
      </div>
      <div className='container-login-page'>
        <div className='container-text'>
          <h1>
            Controle suas <span className='change-color'>finanças</span>,
            sem planilha chata.
          </h1>
          <h2>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
          </h2>
          <button
            type='button'
            className='btn'
            onClick={() => { }}
          >
            Cadastre-se
          </button>
        </div>
        <div className='container-login'>
          <form className='form-login' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label
              htmlFor='email'>E-mail</label>
            <input
              name='email'
              type='text'
              value={form.email}
              onChange={handleInput}
            />

            <label htmlFor='password'>Password</label>
            <input
              name='senha'
              type='password'
              value={form.senha}
              onChange={handleInput}
            />

            <button
              className='btn'
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div >
  );
}


