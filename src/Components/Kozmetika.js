import Kozmetika1 from './Kozmetika1';
import {Link} from 'react-router-dom';
function Kozmetika() {
    let prep1 = {
        marka: "Modern",
        model: "996s",
        cijena: "420€"
    }
    let prep2 = {
      marka: "O.P.I",
      model: "34",
      cijena: "13€"
    }
    let prep3= {
      marka: "Essence",
      model: "56",
      cijena: "3€"
    }
    let prep4= {
      marka: "Sante",
      model: "22",
      cijena: "9€"
    }
    let prep5= {
      marka: "Lacome",
      model: "L612690",
      cijena: "60€"
    }
    let prep6= {
      marka: "Sisley",
      model: "S168216",
      cijena: "220€"
    }
    
    return (
        <div className="App">
          <Link to="/">Odvedi me natrag</Link>
          <div className='kozmetika'><h1 id='naslov'>Kozmetika</h1></div>
          <br></br>
            <Kozmetika1 prep1={prep1} prep2={prep2} prep3={prep3} prep4={prep4} prep5={prep5} prep6={prep6}></Kozmetika1>
        </div>
    );
}

export default Kozmetika;