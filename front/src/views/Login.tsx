import Input from "../components/Input";
// import {NavLink} from 'react-router-dom'

export default function Login() {
  return (
    <div className="bg-black flex items-center justify-center flex-col h-[100vh]">
      <h1 className="text-white text-3xl font-semibold mb-14">
        Gerenciador de Tarefas
      </h1>
      <div>
        <h2 className="text-white text-xl font-semibold mb-6">Login</h2>
        <div className="flex flex-col items-center justify-center">
          <Input type="email" placeholder="Email"/>
          <Input type="password" placeholder="Senha"/>
          <Input type="submit" value="Entrar" others="hover:bg-cyan-500"/>
        </div>
        {/* <NavLink to='/registrar' className="text-md text-white font-medium">Crie uma conta.</NavLink> */}
      </div>
    </div>
  );
}