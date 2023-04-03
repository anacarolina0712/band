import React, {useState} from 'react'
import {Link, Route} from "react-router-dom";
import useAuth from '../hooks/useAuth';
import "../components/style/Signup/index.css";
 
const Signup= () => {

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = Route ();
  
  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };


  return (
<body>
  <div className="container">
    <header className="header">
      {/* <img src="" alt="" />  */}
      <h1>cadastro</h1>
      <span>Faça seu Cadastro</span>  
    </header>

    <form>
    <div className="inputContainer">
  
      <label htmlFor="email">E-mail</label>
        <input 
          type="email"
          name="email"
          value={email}
          placeholder="Digite seu E-mail"
          onCharge={(e) => [setEmail(e.target.value), setError("")]}
          />
       </div>
    <div className="inputContainer">
  
      <label htmlFor="email">Confirme seu E-mail</label>
        <input 
          type="email"
          name="email"
          value={emailConf}
          placeholder="Confirme seu E-mail"
          onCharge={(e) => [setEmailConf(e.target.value), setError("")]}
          />
       </div>

       <div className="inputContainer">
        <label htmlFor="password"> Senha </label>
        <input 
          type="password"
          name="senha"
          value={senha}
          placeholder="Crie uma senha"
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
       </div>
      
      <div className="inputCheckbox">
        <input type="checkbox" name="checkbox" />
        <label htmlFor="checkbox"> Aceito receber notificação por email </label>
      </div>

      <button onClick={handleSignup} className="button"> Acessar</button>
      <labelError>{error}</labelError>


      <div className="footer">
        <p>já tem uma conta?</p>
        <Link to="/">Entre</Link>
      </div>
    </form>
  </div>
  </body>
  );
  };
  export default Signup();




 
