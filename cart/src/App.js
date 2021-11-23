import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { GlobalProvider } from "./GlobalContext";
import Nav from "./Nav";
import Store from "./Store";
import Cart from "./Cart";


function App() {
  return (
    <Router>
    <div className="App">
      <GlobalProvider>
     <Nav></Nav>
     <Switch>
     <Route exact path="/">
     <Store></Store>
            </Route>
            <Route path="/cart">
            <Cart></Cart>
            </Route>
            <Route path="*">
            <Store></Store>
            </Route>
            </Switch>
     
     </GlobalProvider>
    </div>
    </Router>
  );
}

export default App;
