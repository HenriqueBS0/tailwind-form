export default function Form({children}) {
    return (
        <form className='flex flex-col items-start mb-8'>
            {children}
        </form>
    )
}