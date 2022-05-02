import NavLinks from './NavLinks';
import NavbarMobile from './NavbarMobile';
import { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [menuMobile, setMenuMobile ] = useState(false);

  return (
    <div className='w-[100vw] h-auto flex px-12 py-4 bg-gray-900 fixed shadow-xl justify-between'>
      <h1 className="text-3xl font-semibold text-violet-500"><span className="text-white">/\</span> Dylan Peralta</h1>
      <div className='hidden lg:block'>
        <NavLinks />  
      </div>
      <div className='block lg:hidden'>
        <button onClick={() => setMenuMobile(! menuMobile)} className="p-3 bg-violet-500">
            {(menuMobile)
              ? (<FontAwesomeIcon icon={faXmark} />)
              : (<FontAwesomeIcon icon={faBars} />)
            }
          </button>
          {
            (menuMobile) && (
              <NavbarMobile 
                setMenuMobile={setMenuMobile} 
                menuMobile={menuMobile}
              />)
          }
      </div>
    </div>
  )
}

export default Header
