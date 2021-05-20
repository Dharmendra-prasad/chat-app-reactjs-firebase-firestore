import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './container/home';
import LoginPage from './container/login';
import RegisterPage from './container/register';
import PrivaeRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { isLoggerInUser } from './action';
import { useDispatch, useSelector } from 'react-redux';

function App() {

const auth = useSelector(state=>state.auth)
  const dispatch = useDispatch()


   useEffect(() => {
     if (!auth.authenticated) {
       dispatch(isLoggerInUser());
     }
  }, []);

  return (
    <div className="App">
      <Router>
        {/*only looged in user can see*/}

        <PrivaeRoute path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/signup" exact component={RegisterPage}/>
      </Router>
    </div>
  );
}

export default App;
