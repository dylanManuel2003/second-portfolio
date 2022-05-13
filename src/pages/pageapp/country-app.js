import Link from 'next/link';
import HeaderPortfolio from '../../components/HeaderPortfolio';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faDisplay } from '@fortawesome/free-solid-svg-icons';


const countryApp = () => {
  return (
    <div>
      <HeaderPortfolio />
      <section className=" w-[100%] h-auto lg:h-[100vh] bg-gray-700">
        <div className='w-[90%] h-[80%] py-12 mx-auto flex flex-col lg:flex-row justify-start items-start'>
          <div className='flex flex-col w-[100%] lg:w-[40%] h-auto'>
            <img src='/images/portfolio/countryApp.jpg' className='w-[100%] h-[300px]'/>
            <div className='flex flex-col lg:flex-row w-[100%] justify-between mt-9 items-center'>
              <Link href='https://countries-app-self.vercel.app/'>
                <a className='mb-2 lg:mb-0 text-white bg-gray-900 border-2 border-black w-[200px] h-auto py-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  <span className='pr-2'>Visit Website</span>
                  <FontAwesomeIcon icon={faDisplay} />
                </a>
              </Link>
              <Link href='https://github.com/dylanManuel2003/countries-app'>
                <a className='mb-2 lg:mb-0 text-white bg-gray-900 border-2 border-black w-[200px] h-auto py-2 text-center font-Montserrat font-semibold hover:bg-gray-500 duration-500' target='_blank'>
                  <span className='pr-2'>Repository GitHub</span>
                  <FontAwesomeIcon icon={faCodePullRequest} />
                </a>
              </Link>
            </div>
          </div>
          <main className='flex flex-col m-auto lg:m-0 w-[90%] lg:w-[60%] h-auto text-white lg:pl-10 text-center lg:text-left'>
            <h1 className='pb-10 text-3xl font-bold'>Country App</h1>
            <p>This project presents a simple interface, the app allows you to filter by country and see statistics of that same country such as population, capital, region, among others<br/>
              The information comes from a public API <a href='https://restcountries.com/' className='text-blue-400 hover:text-blue-600'>REST Countries.</a>
            </p>
          </main>
        </div>
      </section>
      
    </div>
  )
}

export default countryApp
