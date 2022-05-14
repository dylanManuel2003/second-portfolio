import { Link } from "react-scroll";

const NavLinks = ({setMenuMobile}) => {
    const closeMenu = () => {
        return setMenuMobile(false)
    }

    return (
        <nav className='flex flex-col items-center pt-20 text-white lg:pt-0 lg:justify-center lg:flex-row'>
            <Link 
                className='navLinks'
                to="sectionHome"
                smooth={true}
                duration={1000}
                onClick={closeMenu}
            >Home
            </Link> 
            <Link 
                className='navLinks'
                to="sectionAbout"
                smooth={true}
                duration={1000}
                onClick={closeMenu}
            >About Me
            </Link> 
            {/* <Link 
                className='navLinks'
                to="sectionServices"
                smooth={true}
                duration={1000}
                onClick={closeMenu}
            >Services
            </Link>  */}
            <Link 
                className='navLinks'
                to="sectionPortfolio"
                smooth={true}
                duration={1000}
                onClick={closeMenu}
            >Portfolio
            </Link> 
            <Link 
                className='navLinks'
                to="sectionContact"
                smooth={true}
                duration={1000}
                onClick={closeMenu}
            >Contact
            </Link> 
        </nav>
    )
}

export default NavLinks
