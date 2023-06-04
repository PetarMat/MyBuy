//tema je Shoping
import './App.css';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Naslovna from './Components/Naslovna';
import Tehnologija from './Components/Tehnologija';
import Odjeca from './Components/Odjeca';
import Kozmetika from './Components/Kozmetika';
import Igracke from './Components/Igracke';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='clearfix'>
        <Router>
        <Routes>
          <Route path='/' element={<Naslovna></Naslovna>}></Route>
          <Route path='/tehnologija' element={<Tehnologija></Tehnologija>}></Route>
          <Route path='/odjeca' element={<Odjeca></Odjeca>}></Route>
          <Route path='/kozmetika' element={<Kozmetika></Kozmetika>}></Route>
          <Route path='/igracke' element={<Igracke></Igracke>}></Route>
        </Routes>
      </Router>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
