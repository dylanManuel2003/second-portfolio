
const About = () => {
  return (
    <div className="w-[100%] h-auto lg:h-[100vh] bg-gray-700 flex flex-col justify-center lg:grid grid-rows-1 grid-cols-2 text-white" id="sectionAbout">
      <div className="p-5">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="pt-5 text-xl">I'm a junior web developer, with knowledge in fontend and backend, web3.0 enthusiast.<br/>
          My vision is to build technological products that help and facilitate people's day-to-day tasks.</p>
        <div className="w-[100%] h-auto border-4 border-violet-700 p-5 mt-10">
          <h3 className="text-2xl font-semibold">Technologies</h3>
          <ul className="px-10 list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js/Next.js</li>
            <li>Node.js/Express</li>
            <li>Strapi CMS</li>
            <li>Python Basic</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>SQL Basic</li>
          </ul>
        </div>
        <span className="p-3 m-5 border-2">Download CV</span>
      </div>
      <div className='hidden lg:block'>
        <img src="/images/photoAboutMe.jpg" alt="Dylan Peralta" className="h-[100%] w-[100%] " />
      </div>
    </div>
  )
}

export default About
