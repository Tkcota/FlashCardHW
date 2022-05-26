import './App.css';
import initialCards from './MyCards';

function App() {

  let answer = initialCards[0].id;

  const handleClick = () => {
    console.log(answer)
  }

  const renderCards = () => {
    return initialCards.map((c) => {

      return <div className='cards'>
        {c.question}
        <button onClick={() => { handleClick() }} className='Button'>Show Answer</button>
      </div>



    })
  }
  return (
    <div className='App'>
      <h1>True or False questions!</h1>
      {renderCards()}

    </div>
  )
}


export default App;