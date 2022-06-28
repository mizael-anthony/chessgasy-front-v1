// import { Card } from "./components/card/Card";
import Joueur from "./classes/Joueur";
import {Footer} from "./components/footer/Footer"
import { Header } from "./components/header/Header";
import { About } from "./components/section/About";
import { Contact } from "./components/section/Contact";
import { Organisation } from "./components/section/Organisation";
import { Porfolio } from "./components/section/Porfolio";
import { Service } from "./components/section/Service";
import { Team } from "./components/section/Team";
function App() {
    const joueurs=[
        new Joueur({
            id : "j19126519519",
            first_name : "Bombazy",
            last_name : "Bombe",
            club : "MCG",
            contact : "POPO",
            profil : "assets/img/portfolio/1.jpg"
        }),new Joueur({
            id : "j68484285485",
            first_name : "Bombazy",
            last_name : "Bombe",
            club : "MCG",
            contact : "POPO",
            profil : "assets/img/portfolio/2.jpg"
        }),
        new Joueur({
            id : "j7817464574",
            first_name : "Bombazy",
            last_name : "Bombe",
            club : "MCG",
            contact : "POPO",
            profil : "assets/img/portfolio/3.jpg"
        }),
        new Joueur({
            id : "j191265195194",
            first_name : "Bombazy",
            last_name : "Bombe",
            club : "MCG",
            contact : "POPO",
            profil : "assets/img/portfolio/1.jpg"
        }),new Joueur({
            id : "j684842854855",
            first_name : "Bombazy",
            last_name : "Bombe",
            club : "MCG",
            contact : "POPO",
            profil : "assets/img/portfolio/2.jpg"
        }),
        new Joueur({
            id : "j78174645746",
            first_name : "Bombazy",
            last_name : "Bombe",
            club : "MCG",
            contact : "POPO",
            profil : "assets/img/portfolio/3.jpg"
        })
    ]
  return (
    <div className="App">
      <Header></Header>

        <Service></Service>   

        <Porfolio listJoueur={joueurs} ></Porfolio>  

        {/* <About></About>  */}


        <Team></Team> 

        <Organisation></Organisation>

        <Contact></Contact>

        <Footer></Footer>

 
    </div>
  );
}

export default App