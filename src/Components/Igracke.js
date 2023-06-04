import {Link} from 'react-router-dom';
import { Component } from "react";
import Igracke1 from './Igracke1';
export class Igracke extends Component {
    render() 
    {let prep1 = {
        marka: "Nogometna lopta",
        model: "1",
        cijena: "7€"
    }
    let prep2 = {
      marka: "Drvena katyusha",
      model: "es72",
      cijena: "15€"
    }
    let prep3= {
      marka: "DC",
      model: "9",
      cijena: "20€"
    }
    let prep4= {
      marka: "Lego",
      model: "75189",
      cijena: "150€"
    }
    let prep5= {
      marka: "Klein",
      model: "L612690",
      cijena: "60€"
    }
    
        return (
            <div className="App">
              <Link to="/">Odvedi me natrag</Link>
              <div className='igracke'><h1 id='naslov'>Igračke</h1></div>
              <br></br>
                <Igracke1 prep1={prep1} prep2={prep2} prep3={prep3} prep4={prep4} prep5={prep5}></Igracke1>
            </div>
        );
    }
}
export default Igracke;