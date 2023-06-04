import { Link } from 'react-router-dom';
import Naslovna1 from './Naslovna1';
function Naslovna() {
  let prep1 = {
    marka: "Samsung",
    model: "82b",
    cijena: "1000€"
  }
  let prep2 = {
    marka: "Omen",
    model: "25",
    cijena: "2000€"
  }
  let prep3 = {
    marka: "Samsung",
    model: "68",
    cijena: "1500€"
  }
  let prep4 = {
    marka: "Lego",
    model: "75189",
    cijena: "150€"
  }
  let prep5 = {
    marka: "Lacome",
    model: "L612690",
    cijena: "60€"
  }
  let prep6 = {
    marka: "Sisley",
    model: "S168216",
    cijena: "220€"
  }
  let prep7 = {
    marka: "Adidas",
    model: "2434",
    cijena: "60€"
  }
  let prep8 = {
    marka: "Nike",
    model: "a342",
    cijena: "100€"
  }
  let prep9 = {
    marka: "Adidas",
    model: "6735",
    cijena: "225€"
  }
  let prep10 = {
    marka: "Klein",
    model: "L612690",
    cijena: "60€"
  }
  return (
    <div className="App">
      <div className='navbar'>
        <Link to="/tehnologija">Tehnologija</Link>
        <Link to="/odjeca">Odjeća</Link>
        <Link to="/kozmetika">Kozmetika</Link>
        <Link to="/igracke">Igračke</Link>
      </div>
      <Naslovna1 prep1={prep1} prep2={prep2} prep3={prep3} prep4={prep4} prep5={prep5} prep6={prep6} prep7={prep7} prep8={prep8} prep9={prep9} prep10={prep10}></Naslovna1>
    </div>

  );
}

export default Naslovna;
