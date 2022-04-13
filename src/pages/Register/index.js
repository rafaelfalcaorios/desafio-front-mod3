import './styles.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function Register() {
  const navigar = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      if (!nome || !email || !senha || !confirmarSenha) {
        return;
      }

      if (senha !== confirmarSenha) {
        return;
      }

      const response = await api.post('/usuarios', {
        nome,
        email,
        senha,
        confirmarSenha //esse  confirmarSenha nao deve ser enviado, pois é apenas um campo de confirmação se ta digitado igual, na nossa api de back nao temos esse campo. 
      });

      if (response.status > 204) {
        return;
      }

      navigar('/');

    } catch (error) {
      console.log(error.response.data.message);
    }

  }

  return (
    <div className='login-container'>
      <div className='header-div'>
        <img className='header' src={logo} alt='Logomarca' />
      </div>
      <div className='container-cadastro'>
        <div className='cadastro'>
          <h1>Cadastrar-se</h1>
          <form className="form-registro" onSubmit={handleSubmit}>
            <label
              htmlFor='nome'>Nome</label>
            <input
              placeholder='Nome'
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label
              htmlFor='email'
            >E-mail</label>
            <input
              placeholder='usuario@dominio.com'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label
              htmlFor='senha'
            >
              Senha
            </label>
            <input
              placeholder='Senha'
              type='password'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <label
              htmlFor='confirmarSenha'
            >
              Confirmação de senha
            </label>
            <input
              placeholder='Confirmar Senha'
              type='password'
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <button className='btn-registro'>Cadastrar</button>
            <h3>Já tem cadastro? <Link to='/'>Clique aqui!</Link></h3>
          </form>

        </div>
      </div>

    </div>
  );
}


