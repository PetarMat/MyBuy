
import {Link} from 'react-router-dom';
import Slika1 from "../Slike/pc1.jpg";
import Slika2 from "../Slike/phone1.png";
import Slika3 from "../Slike/phone2.jpg";
import Slika4 from "../Slike/phone3.jpg";
import Slika5 from "../Slike/pc2.jpg";
import Slika6 from "../Slike/pc3.jpg";
import Slika7 from "../Slike/television1.jpg";
import Slika8 from "../Slike/television2.png";
import Slika9 from "../Slike/television3.jpg";
function Tehnologija() {
    let prep1 = {
      marka: "Omen",
      model: "25",
      cijena: "2000€"
    }
    let prep2 = {
        marka: "Samsung",
        model: "82b",
        cijena: "1000€"
    }
    let prep3= {
      marka: "Nokia",
      model: "12",
      cijena: "50€"
    }
    let prep4= {
      marka: "Apple",
      model: "79",
      cijena: "550€"
    }
    let prep5= {
      marka: "Apple",
      model: "2",
      cijena: "200€"
    }
    let prep6= {
      marka: "Asus",
      model: "852",
      cijena: "600€"
    }
    let prep7= {
      marka: "Samsung",
      model: "117",
      cijena: "400€"
    }
    let prep8= {
      marka: "Sanyo",
      model: "1",
      cijena: "900€"
    }
    let prep9= {
      marka: "Samsung",
      model: "22",
      cijena: "250€"
    }

    return (
        <div className="">
            <Link to="/">Odvedi me natrag</Link>
            <div className='tehnologija'><h1 id='naslov'>Tehnologija</h1></div>
            <br></br>
        <div className="svepreporuke">
            <div className="preporuceno">
                <img src={Slika1} alt="img1"></img>
                <div>
                    <h2>{prep1.marka}</h2>
                    <p>{prep1.model}</p>
                    <p>{prep1.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika2} alt="img2"></img>
                <div>
                    <h2>{prep2.marka}</h2>
                    <p>{prep2.model}</p>
                    <p>{prep2.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika3} alt="img3"></img>
                <div>
                    <h2>{prep3.marka}</h2>
                    <p>{prep3.model}</p>
                    <p>{prep3.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika4} alt="img4"></img>
                <div>
                    <h2>{prep4.marka}</h2>
                    <p>{prep4.model}</p>
                    <p>{prep4.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika5} alt="img5"></img>
                <div>
                    <h2>{prep5.marka}</h2>
                    <p>{prep5.model}</p>
                    <p>{prep5.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika6} alt="img6"></img>
                <div>
                    <h2>{prep6.marka}</h2>
                    <p>{prep6.model}</p>
                    <p>{prep6.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika7} alt="img7"></img>
                <div>
                    <h2>{prep7.marka}</h2>
                    <p>{prep7.model}</p>
                    <p>{prep7.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika8} alt="img8"></img>
                <div>
                    <h2>{prep8.marka}</h2>
                    <p>{prep8.model}</p>
                    <p>{prep8.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
            <div className="preporuceno">
                <img src={Slika9} alt="img9"></img>
                <div>
                    <h2>{prep9.marka}</h2>
                    <p>{prep9.model}</p>
                    <p>{prep9.cijena}</p>
                    <button>Kupi</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Tehnologija;