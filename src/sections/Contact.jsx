
const Contact = () => {

  const styleInputs = "w-[90%] m-auto mb-5 bg-transparent border-b-4 border-violet-700 focus:outline-0"

  return (
    <div className="w-[100%] h-auto pb-10 lg:pb-0 lg:h-[100vh] bg-gray-800 text-center" id="sectionContact">
      <h2 className="pt-5 text-3xl font-semibold text-white">Contact</h2> 
      <div className="w-[100%] mt-10 h-auto">
        <form class="form" name="form" netlify className="flex flex-col w-[80%] lg:w-[500px] m-auto">
		  		<input name="name" required type="text" placeholder="Nombre" className={styleInputs} />
	  			<input name="email" required type="email" placeholder="Email" className={styleInputs} />
  				<input name="asunto" required type="text" placeholder="Asunto" className={styleInputs} />
				  <textarea name="message" placeholder="Escribe aquí tu mensaje..." className={`${styleInputs} h-40`} ></textarea>
				  <button type="submit" className="w-[100px] mx-auto text-white bg-violet-700 hover:shadow-sm hover:shadow-violet-400 hover:bg-violet-600 rounded-full block">Enviar</button>
		    </form>
      </div>
    </div>
  )
}

export default Contact
