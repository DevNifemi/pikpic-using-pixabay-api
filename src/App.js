import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/home-page/index';
import ImageResult from './pages/image-result/index';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
         {/* <HomePage/> */}
      </div>

      <Route exact path="/" component={HomePage}/>
      <Route path="/image-result" component={ImageResult}/>
    </Router>
    
    
  );
}

export default App;
