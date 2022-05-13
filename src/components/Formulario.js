import emailjs from '@emailjs/browser';
import {useState} from 'react';

const Formulario = () => {
    const [send, setSend] = useState(false)

    const styleInputs = "w-[90%] m-auto mb-5 bg-transparent border-b-4 border-violet-700 focus:outline-0";

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ki7h7ll', 'template_i3x32im', e.target, 'vBBCpRMnCP_G0Xa0l')
            .then((result) => {
                console.log(result.text);
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

  return (
    <form onSubmit={sendEmail} name="form" className="flex flex-col w-[80%] lg:w-[500px] m-auto">
		<input name="name" required type="text" placeholder="Nombre" className={styleInputs} />
	  	<input name="email" required type="email" placeholder="Email" className={styleInputs} />
		<input name="asunto" required type="text" placeholder="Asunto" className={styleInputs} />
		<textarea name="message" placeholder="Escribe aquí tu mensaje..." className={`${styleInputs} h-40`} ></textarea>
		<button type="submit" className="w-[100px] mx-auto text-white bg-violet-700 hover:shadow-sm hover:shadow-violet-400 hover:bg-violet-600 rounded-full block">Enviar</button>
        {send && <span className='text-[#05F100]'>form sent successfully!</span>}
    </form>
  )
}

export default Formulario
