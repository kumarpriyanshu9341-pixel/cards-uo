import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-10 md:pb-16 pt-2 md:pt-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-[90vh] px-6 md:px-18 flex-grow' >
      <LeftContent />
      <RightContent Users={props.Users} />
    </div>
  )
}

export default Page1Content
