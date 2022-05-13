import Formulario from '../components/Formulario';

const Contact = () => {

  return (
    <div className="w-[100%] h-auto pb-10 lg:pb-0 lg:h-[100vh] bg-gray-800 text-center" id="sectionContact">
      <div className='w-[100%] flex flex-col justify-center items-center pt-10'>
        <h2 className="text-3xl font-semibold text-white">Contact</h2>
        <div className='w-[100px] bg-violet-600 h-2'></div>
      </div>
      <div className="w-[100%] mt-10 h-auto">
        <Formulario />
      </div>
    </div>
  )
}

export default Contact
