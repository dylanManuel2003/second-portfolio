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
        <span className="flex items-center justify-center">
            <img src='/images/DylanPeralta.png' alt='Dylan Peralta brand' className='w-auto h-[40px] ' />
        </span>
  </header>
  )
}

export default HeaderPortfolio
