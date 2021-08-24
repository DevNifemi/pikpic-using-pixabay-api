import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/home-page/index';
import ImageResult from './pages/image-result/index';
import DownloadPage from './pages/download-page/index'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
         {/* <HomePage/> */}
      </div>
    
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/image-result" exact component={ImageResult}/>
      <Route path="/photo/:id" component={DownloadPage}/>
      </Switch>
    </Router>
    
    
  );
}

export default App;
