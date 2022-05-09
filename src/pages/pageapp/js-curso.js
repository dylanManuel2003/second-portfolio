import Link from 'next/link';
import HeaderPortfolio from '../../components/HeaderPortfolio';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faDisplay } from '@fortawesome/free-solid-svg-icons';

const calculosApp = () => {
  return (
    <div>
      <HeaderPortfolio />
      <section className="w-[100%] h-[100vh] bg-gray-700">
        <div className='w-[90%] h-[80%] py-12 mx-auto flex flex-row justify-start items-start'>
          <div className='flex flex-col w-[40%] h-auto'>
            <img src='/images/portfolio/cursoJS.jpg' className='w-[100%] h-[300px]'/>
            <div className='flex w-[100%] justify-between mt-9 items-center'>
              <Link href='https://dylanmanuel2003.github.io/curso-practico-javascript-platzi/promedio.html'>
                <a className='text-white bg-gray-900 border-2 border-black w-[200px] h-auto py-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  <span className='pr-2'>visitar sitio web</span>
                  <FontAwesomeIcon icon={faDisplay} />
                </a>
              </Link>
              <Link href='https://github.com/dylanManuel2003/curso-practico-javascript-platzi'>
                <a className='text-white bg-gray-900 border-2 border-black w-[200px] h-auto py-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  <span className='pr-2'>Repositorio GitHub</span>
                  <FontAwesomeIcon icon={faCodePullRequest} />
                </a>
              </Link>
            </div>
          </div>
          <main className='flex flex-col w-[60%] h-auto text-white pl-10'>
            <h1 className='pb-10 text-3xl font-bold'>JavaScript Calculos</h1>
            <p>voaronb boenbe ourneb eopnaba vfrae
            </p>
          </main>
        </div>
      </section>
      
    </div>
  )
}

export default calculosApp