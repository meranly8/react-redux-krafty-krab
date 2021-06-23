import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import CraftsContainer from './containers/Crafts'
import CraftForm from './components/CraftForm'


function App() {
  return (
    <div className="App">
        < Router>
        <header className="App-header">
          <h1>Krafty Krab</h1>
          < NavBar />
        </header>
        <main>
          < Switch>
            < Route exact path="/crafts/new"><CraftForm /></ Route>
            < Route  path="/crafts"><CraftsContainer /></ Route>
          </ Switch>
        </main>
      </ Router>
    </div>
    
  )
}

export default App