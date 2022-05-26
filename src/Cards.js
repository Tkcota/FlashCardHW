import { useState } from "react"


const MyCard = ({ c }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='cards'>
      {c.question}
      <div>
        <button onClick={() => {
          setShow(!show)
        }} className='Button'>Show Answer</button>

      </div>
      {show && c.answer}

      <div>

      </div>


    </div>
  )
}

export default MyCard