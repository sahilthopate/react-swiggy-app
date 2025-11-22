

import './App.css'
import FoodOptions from './components/FoodOptios'
import OnlineDelivery from './components/OnlineDelivery'
import SwiggyGroceryAndCities from './components/SwiggyGroceryAndCities'
import SwiggyNavbar from './components/SwiggyNavbar'
import TopRest from './components/TopRest'

function App() {

  return (
    <>
     <SwiggyNavbar />
     <FoodOptions />
     <TopRest />
     <OnlineDelivery />
     <SwiggyGroceryAndCities />
    </>
  )
}

export default App
