import { Link } from "react-scroll";

const NavLinks = () => {
  return (
    <nav className='flex flex-col items-center text-white lg:justify-center lg:flex-row'>
        <Link 
            className='navLinks'
            to="sectionHome"
            smooth={true}
            duration={1000}
        >Home
        </Link> 
        <Link 
            className='navLinks'
            to="sectionAbout"
            smooth={true}
            duration={1000}
        >About Me
        </Link> 
        <Link 
            className='navLinks'
            to="sectionServices"
            smooth={true}
            duration={1000}
        >Services
        </Link> 
        <Link 
            className='navLinks'
            to="sectionPortfolio"
            smooth={true}
            duration={1000}
        >Portfolio
        </Link> 
        <Link 
            className='navLinks'
            to="sectionContact"
            smooth={true}
            duration={1000}
        >Contact
        </Link> 
    </nav>
  )
}

export default NavLinks
