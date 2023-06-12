import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    type: 'password' | 'email' | 'submit';
    value?: string;
    width?: string;
    others?: string;
    placeholder?: string;
  }

  
  
  export default function Input({ type, value, width = 'w-96', others, placeholder, ...rest}: Props) {
    let inputClass = `bg-black border-2 border-cyan-500 outline-none rounded-lg text-white p-2 mb-6 ${width} ${others}`;
    return (
      <input value={value} type={type} className={inputClass} placeholder={placeholder} {...rest}/>
    );
  }
  