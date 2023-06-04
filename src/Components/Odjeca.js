import Odjeca1 from './Odjeca1';
import {Link} from 'react-router-dom';
function Odjeca() {
    let prep1 = {
        marka: "Bijela majca",
        model: "22",
        cijena: "10€"
    }
    let prep2= {
      marka: "Jurassic Park",
      model: "864",
      cijena: "12€"
    }
    let prep3= {
      marka: "Traperice",
      model: "244",
      cijena: "19€"
    }
    let prep4= {
      marka: "Cilindar",
      model: "1",
      cijena: "13€"
    }
    let prep5= {
      marka: "Adidas",
      model: "2434",
      cijena: "60€"
    }
    let prep6= {
      marka: "Nike",
      model: "a342",
      cijena: "100€"
    }
    let prep7= {
      marka: "Adidas",
      model: "6735",
      cijena: "225€"
    }
    return (
        <div className="App">
          <Link to="/">Odvedi me natrag</Link>
          <div className='odjeca'><h1 id='naslov'>Odjeća</h1></div>
          <br></br>
            <Odjeca1 prep1={prep1} prep2={prep2} prep3={prep3} prep4={prep4} prep5={prep5} prep6={prep6} prep7={prep7}></Odjeca1>
        </div>
    );
}

export default Odjeca;