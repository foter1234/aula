'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3004/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className='w-full p-6 m-auto bg-purple-200 rounded-md shadow-md lg:max-w-xl'>
            <form action='' onSubmit={cadastrar} className='mt-6'>
              <center><h1 className='block text-sm font-arial text-purple-800'>
                    CADASTRAR
                </h1></center>
                <input placeholder='INFORME O NOME DO ALUNO' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)} className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'  required/><br/><br/>

                <input placeholder='INFORME O CURSO' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)} className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40' required/><br/><br/>

                <input placeholder='INFORME Nº DE INSCRIÇÃO' nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)} className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'  required/><br/><br/>
                <button type='submit' className="w-full px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">CADASTRAR</button><br/><br/>
              <button className="w-full px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"><a href='/' >cancelar</a></button> 
            </form>
            <form action='' onSubmit={cadastrar}>
            
            </form>
        </div>

    );

}