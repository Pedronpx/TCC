import React, { useState } from 'react';
import './App.css';
import './Logo Oficial.png'

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // RESULTADOS DAS INTERAÇÕES DO USUÁRIO COM O SISTEMA \\
  const handleLogin = () => {
    // Verifique se o usuário e a senha correspondem
    if (username === 'usuario' && password === 'senha') {
    setLoggedIn(true);
    } else {
    alert('Nome de usuário ou senha incorretos');
    }
 };
 
 const handleRemPass = () => {
  // Opção de redefinição de senha
  if (username === 'usuario' && password === 'senha') {
  setLoggedIn(true);
  } else {
  alert('O código será enviado por email');
  }
};

const handleAcount = () => {
  // Opção de criação de conta
  if (username === 'usuario' && password === 'senha') {
  setLoggedIn(true);
  } else {
  alert('Você será direcionado para a página de criação de conta');
  }
};

const handleSuport = () => {
  // Opção de suporte
  if (username === 'usuario' && password === 'senha') {
  setLoggedIn(true);
  } else {
  alert('O suporte foi contatado, aguarde reposta...');
  }
};

const handleContat = () => {
  // Opção de contato do sistema
  if (username === 'usuario' && password === 'senha') {
  setLoggedIn(true);
  } else {
  alert('Se houver dúvidas, entre em contato pelo email, hospital_calculadora@gmail.com ou pelo telefone (43) 99658-9887.');
  }
};

// DIVS E FUNÇÕES HTML
  return (
    <div className="login-container">
      {loggedIn ? (
      alert('LOGADO COM SUCESSO!')
      ) : (
        <div>
          <p>

          </p>
      <div className="image">
      <img src={require('./Logo Oficial.png')} alt="Logo da minha página" />
      </div>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>

          </p>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>

          </p>
          <button onClick={handleLogin}><b>Entrar</b></button>
          <p>

          </p>
          <touchablebutton onClick={handleRemPass}><h5>Esqueci a senha</h5></touchablebutton>
          {/* <button> Esqueci a senha</button> */}
          <p>

          </p>
          <touchablebutton onClick={handleAcount}><h6>Criar conta</h6></touchablebutton>

            <h3 onClick={handleSuport}>
            Suporte 
            </h3>
        
            <h4 onClick={handleContat}>
            Contato
            </h4>
    </div>
      )}
    </div>
  );
};

export default App;