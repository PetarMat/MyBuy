import Slika1 from "../Slike/kozmetika3.jpg";
import Slika2 from "../Slike/kozmetika4.jpg";
import Slika3 from "../Slike/kozmetika5.jpg";
import Slika4 from "../Slike/kozmetika6.jpg";
import Slika5 from "../Slike/kozmetika1.jpg";
import Slika6 from "../Slike/kozmetika2.jpg";
function Kozmetika1( { prep1, prep2, prep3, prep4, prep5, prep6,}) {
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

            </div>
        </div>
    );
}

export default Kozmetika1;