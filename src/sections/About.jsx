import Image from 'next/image';

const About = () => {
  return (
    <div className="w-[100%] h-auto lg:h-[100vh] bg-gray-700 flex flex-col justify-center items-start text-white text-center" id="sectionAbout">
      <div className='w-[100%] h-[100%] mt-5'>
          <div>
            <h2 className="text-3xl font-semibold text-white">About Me</h2>
            <p className="pt-5 text-xl">I'm a junior web developer, with knowledge in fontend and backend, web3.0 enthusiast.<br/>
            My vision is to build technological products that help and facilitate people's day-to-day tasks.</p>
          </div>
          <div className="w-[80%] flex justify-center flex-col mx-auto h-auto p-5 mt-20">
            <h3 className="text-2xl font-semibold">Technologies</h3>
            <ul className="flex w-[100%] justify-center px-10 mt-10 object-cover">
              <li className='w-[60px] h-[60px] '>
                <Image src="/images/tech/html-5.png" alt="logo html" width="300" height="300" className='block' /></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/css-3.png" alt="logo css" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/sass.png" alt="logo sass" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/tailwindcss.svg" width="300" height="300" alt="logo tailwind" /></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/js.png" alt="logo js" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/reactjs.png" alt="logo react" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/nextjs.png" alt="logo next" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/nodejs.png" alt="logo node" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/git.png" alt="logo git" width="300" height="300"/></li>
              <li className='w-[60px] h-[60px] mx-2'>
                <Image src="/images/tech/github.png" alt="logo github" width="300" height="300"/></li>
            </ul>
          </div>
          <button className="p-3 m-5 border-2">Download CV</button>
      </div>
    </div>
  )
}

export default About
