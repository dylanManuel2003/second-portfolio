
const Home = () => {
  return (
    <section className="w-[100%] h-[100vh] home-bg flex z-[-4]" id="sectionHome">
      <div className="w-[90%] mx-auto lg:w-[50%] h-[100%] text-left p-5 lg:pl-10 text-white rounded-xl flex flex-col justify-center items-start" >
        <h1 className='text-4xl lg:mt-5'>Welcome I'm Dylan Peralta</h1>
        <h3 className='text-2xl text-gray-300'>I am Web Developer</h3>
      </div>
      <div className="hidden lg:block box-home">
        <img src='/images/perfilSinFondo.png' alt="Dylan Peralta" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )
}

export default Home
