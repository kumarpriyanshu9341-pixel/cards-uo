import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-auto md:h-full flex flex-col w-full md:w-1/3 justify-between gap-6 md:gap-0' >
            <HeroText />
            <Arrow />

        </div>
    )
}

export default LeftContent
