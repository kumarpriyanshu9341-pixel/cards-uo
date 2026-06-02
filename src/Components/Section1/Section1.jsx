import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='min-h-screen md:h-screen w-full bg-amber-100 flex flex-col' >
      <Navbar />
      <Page1Content Users={props.Users} />
    </div>
  )
}

export default Section1
