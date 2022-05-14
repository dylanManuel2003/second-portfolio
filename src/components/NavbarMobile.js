import NavLinks from './NavLinks';


const NavbarMobile = ({menuMobile, setMenuMobile}) => {
  return (
    <nav className='w-[100%] h-[100vh] flex justify-center bg-gray-800 absolute top-[68px] left-0'>
        <NavLinks setMenuMobile={setMenuMobile} />
    </nav>
  )
}

export default NavbarMobile
