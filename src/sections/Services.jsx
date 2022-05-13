
const Services = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-gray-800 text-white flex flex-col justify-center" id="sectionServices">
      <div className='w-[100%] flex flex-col justify-center items-center mt-10'>
        <h2 className="text-3xl font-semibold text-white">Services</h2>
        <div className='w-[100px] bg-violet-600 h-2'></div>
      </div>
      <div className="flex flex-col m-auto lg:grid grid-cols-2 grid-rows-2 w-[70%] h-[70%] gap-5">
        <div className="shadow-md shadow-black transition duration-500 hover:shadow-violet-400 hover:shadow-lg rounded-xl w-[100%] h-[100%] bg-[url('/images/services/image1.jpg')] bg-cover">
          <h4 className="p-5 font-sans text-4xl text-white text-border">Front-end</h4>
        </div>
        <div className="shadow-md shadow-black transition duration-500 hover:shadow-violet-400 hover:shadow-lg rounded-xl w-[100%] h-[100%] bg-[url('/images/services/image2.jpg')] bg-cover">
          <h4 className="p-5 font-sans text-4xl text-white text-border">Back-end</h4>
        </div>
        <div className="shadow-md shadow-black transition duration-500 hover:shadow-violet-400 hover:shadow-lg rounded-xl w-[100%] h-[100%] bg-[url('/images/services/image3.jpg')] bg-cover">
          <h4 className="p-5 font-sans text-4xl text-white text-border">UI/UX</h4>
        </div>
        <div className="shadow-md shadow-black transition duration-500 hover:shadow-violet-400 hover:shadow-lg rounded-xl w-[100%] h-[100%] bg-[url('/images/services/image4.jpg')] bg-cover">
          <h4 className="p-5 font-sans text-4xl text-white text-border">Web 3.0</h4>
          <span className="pl-5">Proximamente...</span>
        </div>
      </div>
    </div>
  )
}

export default Services
