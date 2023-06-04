
import Slika1 from "../Slike/odjeca4.jpg";
import Slika2 from "../Slike/odjeca5.jpg";
import Slika3 from "../Slike/odjeca6.jpg";
import Slika4 from "../Slike/odjeca7.jpg";
import Slika5 from "../Slike/odjeca1.jpg";
import Slika6 from "../Slike/odjeca2.jpg";
import Slika7 from "../Slike/odjeca3.jpg";
function Odjeca1({ prep1, prep2, prep3, prep4, prep5, prep6, prep7}) {
    return (
      <div className="App">
        
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

            </div>
      </div>
      
    );
  }
  
  export default Odjeca1;
  