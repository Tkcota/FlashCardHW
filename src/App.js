import './App.css';
import initialCards from './MyCards';
import MyCard from './Cards';

function App() {

  const renderCards = () => {
    return initialCards.map((c) => {
      return <MyCard c={c} />



    })
  }
  return (
    <div className='App'>
      <h1>True or False questions!</h1>
      <div className='cardbox'>      
      {renderCards()}
      </div>

    </div>
  )
}


export default App;