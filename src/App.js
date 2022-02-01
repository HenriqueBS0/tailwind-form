import Form from './components/Form';
import Input from './components/Input';
import logo from './img/logo.png';

export default function App() {
	return (
		<div className="flex justify-center">
			<main className='w-11/12 sm:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
				<div className='w-20 my-8'>
					<img src={logo} alt='Logo' />
				</div>

				<h1 className='text-5xl text-lime-900 font-medium'>Bem vindo ao <span className='text-lime-600'>Tailwind Form</span></h1>

				<div className='my-4'>
					<span className='text-base text-lime-900'>Faça login na sua conta abaixo.</span>
				</div>

				<Form>
					<Input type='email' placeholder='Email'/>
					<Input type='password' placeholder='Senha'/>

					<a href='#' className='mb-8 text-sm text-lime-900'>Esqueceu a senha?</a>

					<input className='bg-lime-400 text-lime-50 font-bold py-2 px-10 rounded-md cursor-pointer hover:shadow-lg' type='submit' value='Entrar' />
				</Form>

				<a href='#' className='text-lime-600 text-base'>Não tem conta? <span className='text-lime-900'>Cadastre-se</span></a>

			</main>
		</div>
	);
}