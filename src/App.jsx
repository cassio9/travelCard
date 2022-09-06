import './App.css'
import Navbar from './components/Navbar'
import TravelMoments from './components/TravelMoments'
import data from './data'

const DataTravel = data.map((elem) => {
  return <TravelMoments key={elem.id} {...elem} />
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="travelCard-container">{DataTravel}</section>
    </div>
  )
}

export default App
