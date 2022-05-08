import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="w-[100%] h-auto lg:h-[100vh] bg-gray-700 text-white flex justify-center" id="sectionPortfolio">
      <div className="w-[100%] text-center">
        <h2 className="mt-10 text-3xl font-semibold text-white">Portfolio</h2>
        <div className="w-[80%] h-auto lg:h-[70%] flex flex-col m-auto lg:flex-row lg:justify-between mt-20">
          <Link href={'/pageapp/country-app'}>
            <a className="w-[90%] lg:w-1/3 h-[250px] bg-gray-900 mx-5 text-center border-4 border-whiter rounded-md">
              <img src="/images/portfolio/countryApp.jpg" alt="project" className="w-[100%] h-[150px]" />
              <h3 className="mt-4 text-2xl">Country-app</h3>
            </a>
          </Link>
          <Link href={'/pageapp/js-quiz'}>
            <a className="w-[90%] lg:w-1/3 h-[250px] bg-gray-900 mx-5 text-center border-4 border-whiter rounded-md mt-10 lg:mt-0">
              <img src="/images/portfolio/jsquiz.jpg" alt="project" className="w-[100%] h-[150px]" />
              <h3 className="mt-4 text-2xl">JavaScript Quiz</h3>
            </a>
          </Link>
          <Link href={''}>
            <a className="w-[90%] lg:w-1/3 h-[250px] bg-gray-900 mx-5 text-center border-4 border-whiter rounded-md mt-10 lg:mt-0 mb-10 lg:mb-0">
              <img src="/images/portfolio/proximamente.jpg" alt="project" className="w-[100%] h-[150px]" />
              <h3 className="mt-4 text-2xl">Sin titulo</h3>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
