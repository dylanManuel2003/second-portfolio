import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faInstagramSquare, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="w-[100%] h-[60vh] bg-gray-900 flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center p-5 m-auto font-semibold">
          <img src='/images/DylanPeralta.png' className='w-auto h-[50px] m-auto' />
          {/* <h2 className="text-5xl text-violet-500">Dylan Peralta</h2> */}
          <h3 className="text-3xl text-white">Web Developer</h3>
        </div>
        <div className="m-auto text-center text-white">
          <h3 className="text-3xl">Social Media</h3>
          <div className="mx-auto flex w-[152px]">
            <a href="https://www.linkedin.com/in/dylan-peralta-a947a4217/" title="@Dylan Peralta" target="_blank" className="p-3">
              <img src='/images/icons/linkedin-icon.png' alt='' className='' />
            </a>
            <a href="https://www.instagram.com/dylann_peralta/?hl=es" title="@dylann_peralta" target="_blank" className="p-3">
              <img src='/images/icons/instagram-icon.png' alt='' className='' />
            </a>
            <a href="https://github.com/dylanManuel2003" title="dylanManuel2003" className="p-3">
              <img src='/images/icons/github-icon.png' alt='' className='' />
            </a>
          </div>
        </div>
      </div>
      <span className="pt-10 mx-auto my-0 text-center text-white">&#169; Dylan Peratla</span>
    </div>
  )
}

export default Footer
