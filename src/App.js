import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Search from "./Components/Search/Search"

function App() {
  const [currentState, setCurrentState] = useState('whatever')

  const getSearchedValue = (currentValue) => {
      // alert(currentValue)
      setCurrentState((prevState) => {
        // prevState = currentValue
        console.log(prevState)
        console.log(currentValue)
        return currentValue
      })



  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {currentState}
        <Search searchprop={getSearchedValue}/>
      </header>
    </div>
  );
}

export default App;
