import NavLinks from './NavLinks';
import NavbarMobile from './NavbarMobile';
import { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [menuMobile, setMenuMobile ] = useState(false);

  return ( 
    <header className='z-50 w-[100vw] h-[70px] flex px-12 py-4 bg-gray-900 fixed shadow-xl justify-between items-center'>
      <img src='/images/DylanPeralta.png' alt='dylan perlta brand' className='w-auto h-[30px]' />
      {/* <h1 className="text-3xl font-semibold text-violet-500"><span className="text-white">/\</span> Dylan Peralta</h1> */}
      <div className='hidden my-auto lg:block'>
        <NavLinks 
          setMenuMobile={setMenuMobile} 
        />  
      </div>
      <div className='block lg:hidden'>
        <button onClick={() => setMenuMobile(! menuMobile)} className="px-3 py-2 bg-violet-500">
            {(menuMobile)
              ? (<FontAwesomeIcon icon={faXmark} />)
              : (<FontAwesomeIcon icon={faBars} />)
            }
          </button>
          {
            menuMobile && 
            <NavbarMobile 
              setMenuMobile={setMenuMobile} 
              menuMobile={menuMobile}
            />
          }
      </div>
    </header>
  )
}

export default Header
