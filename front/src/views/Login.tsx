import Input from "../components/Input";
import {NavLink} from 'react-router-dom'
import { useState } from "react";
import LoginAPI from "../api/Login";

export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function Logar(){
    LoginAPI(email, password)
  }

  return (
    <div className="bg-black flex items-center justify-center flex-col h-[100vh]">
      <h1 className="text-white text-3xl font-semibold mb-14">
        Gerenciador de Tarefas
      </h1>
      <div>
        <h2 className="text-white text-xl font-semibold mb-6">Login</h2>
        <div className="flex flex-col items-center justify-center">
          <Input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <Input type="password" placeholder="Senha" onChange={(e)=>{setPassword(e.target.value)}}/>
          <Input type="submit" value="Entrar" others="hover:bg-cyan-500" onClick={Logar}/>
        </div>
        <NavLink to='/register' className="text-md text-white font-medium">Crie uma conta.</NavLink>
      </div>
    </div>
  );
}