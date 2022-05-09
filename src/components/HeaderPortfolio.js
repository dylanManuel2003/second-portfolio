import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';


const HeaderPortfolio = () => {
  return (
    <header className="w-[100%] bg-gray-800 text-white flex justify-between px-12 py-3 h-auto">
        <Link href='/'>
          <a className='px-3 py-2 bg-gray-600 border-2 rounded-sm shadow-md hover:bg-slate-700 hover:shadow-xl shadow-black'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className='pl-2'>Back</span>
          </a>
        </Link>
        <h1 className="text-3xl font-semibold text-violet-500 font-Comfortaa">
            <span className="text-white">/\</span> 
            Dylan Peralta
        </h1>
  </header>
  )
}

export default HeaderPortfolio
