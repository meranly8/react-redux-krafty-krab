import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderMain from './components/HeaderMain'
import NavBarMain from './components/NavBarMain'
import CraftsContainer from './containers/Crafts'
import CraftForm from './components/CraftForm'


function App() {
  return (
    <div className="App">
        < Router>
        <header className="App-header">
          < HeaderMain />
        </header>
        <br />
        <nav>< NavBarMain /></nav>
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