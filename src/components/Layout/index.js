import Header from '../Header';


const index = ({children}) => {
  return (
    <div className='w-full h-auto font-Comfortaa'>
      <Header/>
      {children}
    </div>
  )
}

export default index
