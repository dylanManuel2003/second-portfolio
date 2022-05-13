import Formulario from '../components/Formulario';

const Contact = () => {

  return (
    <div className="w-[100%] h-auto pb-10 lg:pb-0 lg:h-[100vh] bg-gray-800 text-center" id="sectionContact">
      <h2 className="pt-5 text-3xl font-semibold text-white">Contact</h2> 
      <div className="w-[100%] mt-10 h-auto">
        <Formulario />
      </div>
    </div>
  )
}

export default Contact
