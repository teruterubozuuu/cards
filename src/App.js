
import UserProfile from './UserProfile';
import Header from './Header';
import wImg from './images/wednesday.jpg';
import eImg from './images/enid.jpg';
import bImg from './images/bianca.jpg';
import yImg from './images/yoko.jpg';
import dImg from './images/divina.jpg';
import kImg from './images/kent.jpg';
import aImg from './images/ajax.jpg';
import euImg from './images/eugene.jpg';
import nevermore from './images/nevermore.png'



function App() {
  return (
    <>
      <div className="App">
        <div className='bg-overlay'></div>
        <Header school="Nevermore Academy: The Nightshades" nevermoreSym={nevermore} alt="Nevermore Student"></Header>
        <div className='main'>
        <div className='wrapper' >
            <UserProfile img={wImg} name="Wednesday Addams" age= "16 years old" specie="Psychic"></UserProfile>     
            <UserProfile img={eImg} name="Enid Sinclair"  age= "16 years old"  specie="Werewolf"></UserProfile>
            <UserProfile img={bImg} name="Bianca Barclay"  age= "16 years old"  specie="Siren"></UserProfile>
            <UserProfile img={yImg} name="Yoko Tanaka"  age= "16 years old"  specie="Vampire"></UserProfile>
            <UserProfile img={dImg} name="Divina"  age= "16 years old"  specie="Siren"></UserProfile>
            <UserProfile img={kImg} name="Kent"  age= "16 years old"  specie="Siren"></UserProfile>
            <UserProfile img={aImg} name="Ajax Petropolis"  age= "16 years old"  specie="Gorgon"></UserProfile>
            <UserProfile img={euImg} name="Eugene Ottinger"  age= "14 years old"  specie="Beekeeper"></UserProfile>   
      </div>
    </div>
  
    </div>

    </>
  );
}

export default App;
