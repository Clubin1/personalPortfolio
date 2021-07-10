import {Switch, Route} from 'react-router-dom'

// Components
import Navigation from './UI/Navbar'
import Footer from './UI/Footer'

// Pages
import Home from './Pages/Home.js'

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Switch> 
          <Route exact path="/" component={Home} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
