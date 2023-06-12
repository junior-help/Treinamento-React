import { useState } from "react";
import Input from "../components/Input";
import {NavLink} from 'react-router-dom'

export default function Register() {

  const [email, setEmail] = useState('')
  const [confEmail, setConfEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  function Registrar(){
    if( email.trim() !== '' && confEmail.trim() !== '' && password.trim() != '' && confPassword.trim() != ''){
      if(email === confEmail){
        if(password === confPassword){
          window.location.reload()
        }else{
          alert('As senhas não se coincidem')
        }
      }else{
        alert('Os emails não são identicos')
      }
    }else{
      alert('Não pode ter campos em branco')
    }
  }
  
  return (
    <div className="bg-black flex items-center justify-center flex-col h-[100vh]">
      <h1 className="text-white text-3xl font-semibold mb-14">
        Gerenciador de Tarefas
      </h1>
      <div>
        <h2 className="text-white text-xl font-semibold mb-6">Registrar</h2>
        <div className="flex flex-col items-center justify-center">
          <Input type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}}/>
          <Input type="email" placeholder="Confime seu email" onChange={e=>{setConfEmail(e.target.value)}}/>
          <Input type="password" placeholder="Senha" onChange={e=>{setPassword(e.target.value)}}/>
          <Input type="password" placeholder="Confirme sua Senha" onChange={e=>{setConfPassword(e.target.value)}}/>
          <Input type="submit" value="Registrar" others="hover:bg-cyan-500" onClick={Registrar}/>
        </div>
        <NavLink to='/' className="text-md text-white font-medium">Fazer Login.</NavLink>
      </div>
    </div>
  );
}