import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faInstagramSquare, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="w-[100%] h-[50vh] bg-gray-900 flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row">
        <div className="p-5 m-auto font-semibold text-center">
          <h2 className="text-5xl text-violet-500">Dylan Peralta</h2>
          <h3 className="text-3xl text-white">Web Developer</h3>
        </div>
        <div className="m-auto text-center text-white">
          <h3 className="text-3xl">Social Media</h3>
          <div className="mx-auto w-[152px]">
            <a href="https://www.linkedin.com/in/dylan-peralta-a947a4217/" title="@Dylan Peralta" target="_blank" className="p-3">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com/dylann_peralta/?hl=es" title="@dylann_peralta" target="_blank" className="p-3">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="#contact" title="dylanperaltasalerno@gmail.com" className="p-3">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </div>
        </div>
      </div>
      <span className="pt-10 mx-auto my-0 text-center text-white">&#169; Dylan Peratla</span>
    </div>
  )
}

export default Footer
