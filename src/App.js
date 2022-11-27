import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import FriendDetails from './component/FriendDetails/FriendDetails';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/home'> 
      <Home/>
      </Route>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/friends/:friendId'>
      <FriendDetails/>
      </Route>
      <Route path='*'>
      <NoMatch/>
      </Route>
    </Switch>
  </Router>

  )
}

export default App;
