import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/home-page/index';
import ImageResult from './pages/image-result/index';
import DownloadPage from './pages/download-page/index'
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
         {/* <HomePage/> */}
      </div>

      <Route exact path="/" component={HomePage}/>
      <Route path="/image-result" component={ImageResult}/>
      <Route path="/:id/:id/:id" component={DownloadPage}/>
    </Router>
    
    
  );
}

export default App;
