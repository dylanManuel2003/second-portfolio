import Link from 'next/link';

const countryApp = () => {
  return (
    <div>
      <header className="w-[100%] bg-gray-800 text-white flex justify-start px-12 py-6 h-auto">
        <Link href='/'>
          <a>
            <span>{'<= '}Volver</span>
          </a>
        </Link>
      </header>
      <section className="w-[100%] h-[100vh] bg-gray-700">
        <div className='w-[90%] h-[80%] py-12 mx-auto flex flex-row justify-start items-start'>
          <div className='flex flex-col w-[40%] h-auto'>
            <img src='/images/portfolio/countryApp.jpg' className='w-[100%] h-[300px]'/>
            <div className='flex w-[100%] justify-between mt-9 items-center'>
              <Link href='https://countries-app-self.vercel.app/'>
                <a className='text-white bg-gray-900 border-2 border-black w-[200px] h-auto py-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  visitar sitio web
                </a>
              </Link>
              <Link href='https://github.com/dylanManuel2003/countries-app'>
                <a className='text-white bg-gray-900 border-2 border-black w-[200px] h-auto py-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  Repositorio GitHub
                </a>
              </Link>
            </div>
          </div>
          <main className='flex flex-col w-[60%] h-auto text-white pl-10'>
            <h1 className='pb-10 text-3xl font-bold'>Country App</h1>
            <p>Este proyecto presenta una interfaz sencilla, la app te permite filtrar por país y ver estadisticas de ese mismo pais como población, capital, region, entre otros.<br/>
              La información proviene de una API pública <a href='https://restcountries.com/' className='text-blue-400 hover:text-blue-600'>REST Countries.</a>
            </p>
          </main>
        </div>
      </section>
      
    </div>
  )
}

export default countryApp
