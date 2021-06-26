import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderMain from './components/HeaderMain'
import NavBarMain from './components/NavBarMain'
import CraftsContainer from './containers/Crafts'
import CraftForm from './components/crafts/CraftForm'
import Home from './containers/Home'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      < Router>
        <nav className="nav-bar-main">
            < NavBarMain />
        </nav>
        <header className="App-header">
          < HeaderMain />
        </header>
        <main>
          < Switch>
            < Route exact path="/">< Home /></ Route>
            < Route exact path="/crafts/new">< CraftForm /> </Route>
            < Route path="/crafts">< CraftsContainer /></ Route>
          </ Switch>
        </main>
        <footer>
          < Footer />
        </footer>
      </ Router>
    </div>
    
  )
}

export default App