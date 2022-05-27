import { useState } from "react"

const MyCard = ({ c }) => {
  const [show, setShow] = useState(true)
  return (
    <div className='cards' onClick={()=>{
      setShow(!show)
    }}>
      {show ? c.question : c.answer}
    </div>
  )
};

export default MyCard