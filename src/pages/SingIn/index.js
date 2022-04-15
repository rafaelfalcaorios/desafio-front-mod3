import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { setItem, getItem } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const token = getItem('token');

    if (token) {
      navigate('/main');
    }

  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        senha
      });

      if (response.status > 204) {
        return;
      }

      const { token, usuario } = response.data;

      setItem('token', token);
      setItem('usuarioId', usuario.id);

      navigate('/main');
    } catch (error) {
      console.log(error.response.data.message);
    }

  }

  return (
    <div className='login-container'>
      <div className='header-div'>
        <img className='header' src={logo} alt='logo' />
      </div>
      <div className='container-login-page'>
        <div className='container-text'>
          <h1>
            Controle suas <span className='change-color'>finanças</span>,
            sem planilha chata.
          </h1>
          <h3>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
          </h3>
          <button className='btn'>
            <Link className='link-cadastro' to='/cadastro'>Cadastre-se</Link>
          </button>
        </div>
        <div className='container-login'>
          <form className='form-login' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label
              htmlFor='email'>E-mail</label>
            <input
              placeholder='usuario@dominio.com'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Senha'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button
              className='btn entrar'
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div >
  );
}


