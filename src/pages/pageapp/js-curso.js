import Link from 'next/link';
import HeaderPortfolio from '../../components/HeaderPortfolio';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faDisplay } from '@fortawesome/free-solid-svg-icons';

const calculosApp = () => {
  return (
    <div>
      <HeaderPortfolio />
      <section className="w-[100%] h-auto min-h-[100vh] bg-gray-700">
        <div className='w-[90%] h-[80%] py-12 mx-auto flex flex-col lg:flex-row justify-start items-start'>
          <div className='flex flex-col w-[100%] lg:w-[40%] h-auto'>
            <img src='/images/portfolio/cursoJS.jpg' className='w-[100%] h-[300px]'/>
            <div className='text-xl flex flex-col lg:flex-row w-[100%] justify-between mt-9 items-center'>
              <Link href='https://dylanmanuel2003.github.io/curso-practico-javascript-platzi/promedio.html'>
                <a className='mb-2 lg:mb-0 text-white bg-gray-900 border-2 border-black w-[240px] h-auto p-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  <span className='pr-2'>Visit Website</span>
                  <FontAwesomeIcon icon={faDisplay} />
                </a>
              </Link>
              <Link href='https://github.com/dylanManuel2003/curso-practico-javascript-platzi'>
                <a className='mb-2 lg:mb-0 text-white bg-gray-900 border-2 border-black w-[240px] h-auto p-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  <span className='pr-2'>Repository GitHub</span>
                  <FontAwesomeIcon icon={faCodePullRequest} />
                </a>
              </Link>
            </div>
          </div>
          <main className='flex flex-col m-auto lg:m-0 w-[90%] lg:w-[60%] h-auto text-white lg:pl-10 text-center lg:text-left'>
            <h1 className='pb-10 text-3xl font-bold'>JavaScript Calculos</h1>
            <p className='text-xl'>This project is of the school of JavaScript in Platzi, there I practiced on the fundamentals of the language.</p>
          </main>
        </div>
      </section>
    </div>
  )
}

export default calculosApp