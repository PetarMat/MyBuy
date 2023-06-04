
import Slika1 from "../Slike/phone1.png";
import Slika2 from "../Slike/pc1.jpg";
import Slika3 from "../Slike/television1.jpg";
import Slika4 from "../Slike/igracke1.jpg";
import Slika5 from "../Slike/kozmetika1.jpg";
import Slika6 from "../Slike/kozmetika2.jpg";
import Slika7 from "../Slike/odjeca1.jpg";
import Slika8 from "../Slike/odjeca2.jpg";
import Slika9 from "../Slike/odjeca3.jpg";
import Slika10 from "../Slike/igracke2.jpg";
function Naslovna1({ prep1, prep2, prep3, prep4, prep5, prep6, prep7, prep8, prep9, prep10 }) {
    return (
      <div className="App">
        <div className="preporuke"><h1 id="naslov">Preporuke</h1></div>
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
                <div className="preporuceno">
                    <img src={Slika10} alt="img10"></img>
                    <div>
                        <h2>{prep10.marka}</h2>
                        <p>{prep10.model}</p>
                        <p>{prep10.cijena}</p>
                        <button>Kupi</button>
                    </div>
                </div>

            </div>
      </div>
      
    );
  }
  
  export default Naslovna1;
  