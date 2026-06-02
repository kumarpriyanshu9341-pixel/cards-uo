const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full py-6 md:py-8 px-6 md:px-18 gap-4 md:gap-0' >
        <h4 className='bg-black text-white px-5 py-2 rounded-full text-base md:text-lg uppercase text-center' >Target Audience</h4>
        <button className='md:ml-4 text-white bg-green-600 px-4 py-3 rounded-full md:me-5 uppercase text-sm md:text-base' >Digital Banking Platform</button>
      
    </div>
  )
}

export default Navbar
