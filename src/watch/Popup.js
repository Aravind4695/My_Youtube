
const Popup = () => {
  return (
    <div  className=' fixed w-screen h-screen left-0 right-0 top-0 bottom-0 bg-slate-400'>
      <div className='  absolute top-1/4 left-1/4 w-1/3 bg-white box-border'>
        <div>
            Share
         <FaXmark/>
        </div>
        <FaAngleLeft/><FaAngleRight/>
      </div>
      <div></div>
    </div>
  )
}

export default Popup;
