import Image from 'next/image'
import Link from "next/link"
export default async function Home() {

  const req = await fetch("http://localhost:3004/alunos", {cache:'no-cache'})
  const alunos = await req.json();

  return (
    
    <main className="w-full p-6 m-auto bg-purple-200 rounded-md shadow-md lg:max-w-xl">
      <p className='block text-sm font-semibold text-gray-800'>
      {alunos[0].id}<br/>
      {alunos[0].nome}<br/>
      {alunos[0].num_inscricao}<br/>
      {alunos[0].curso}<br/>
      </p>

      <p className='block text-sm font-semibold text-gray-800'>
      {alunos[1].id}<br/>
      {alunos[1].nome}<br/>
      {alunos[1].num_inscricao}<br/>
      {alunos[1].curso}<br/>
      </p>

      {alunos.map(aluno=>(
      <div key={aluno.id} className="w-full p-6 m-auto bg-purple-200 rounded-md shadow-md lg:max-w-xl">
        <p className='block text-sm font-semibold text-gray-800'>aluno:{aluno.nome}</p>
        <p>num_inscricao:{aluno.num_inscricao}</p>
        <p>curso:{aluno.curso}</p>

      </div>
      
        ))}<br/>
        <Link href="/cadastro" className='w-full px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>CADASTRAR</Link>
    </main>
  )
}
