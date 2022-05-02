
const Portfolio = () => {
  return (
    <div className="w-[100%] h-auto lg:h-[100vh] bg-gray-700 text-white flex" id="sectionPortfolio">
      <h2>Portfolio</h2>
      <div className="w-[70%] h-auto lg:h-[70%] flex flex-col m-auto lg:flex-row lg:justify-between">
        <div className="w-1/3 h-[100%] bg-gray-800 mx-5">
          <img src="/images/portfolio/criptolab.jpg" alt="project" className="w-[100%] h-[150px]" />
          <h3>Criptolab</h3>
        </div>
        <div className="w-1/3 h-[100%] bg-gray-800 mx-5">
          <img src="/images/portfolio/jsquiz.jpg" alt="project" className="w-[100%] h-[150px]" />
          <h3>JavaScript Quiz</h3>
        </div>
        <div className="w-1/3 h-[100%] bg-gray-800 mx-5">
          <img src="/images/portfolio/proximamente.jpg" alt="project" className="w-[100%] h-[150px]" />
          <h3>Sin titulo</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
