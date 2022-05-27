import { useState } from "react"
import initialCards from "./MyCards";

const MyCard = ({ c }) => {
  const [show, setShow] = useState(true)

//  const cardClicked = () => {
//   let newCards = initialCards.map((c) => (c.answer=== answer ? {...c, show: true} : c))

 

  return (
    <div className='cards' onClick={()=>{
      setShow(!show)
    }}>
      {show ? c.question : c.answer}
    </div>
  )
};

   {/* <div>
        <button onClick={() => {
          setShow(!show)
        }} className='Button'>Show Answer</button>
      </div>
      {show && c.answer}
      <div> */}
      {/* </div> */}




export default MyCard