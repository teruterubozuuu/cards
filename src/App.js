
import UserProfile from './UserProfile';
import Header from './Header';




function App() {
  return (
    <>
      <div className="bg-overlay"></div>
      <Header></Header>
      <UserProfile 
      wImage="./images/wednesday.jpg"
      wName="Wednesday Addams"
      wAge="16 years old"
      wSpecie="Psychic"
      ></UserProfile>
      

    </>
  );
}

export default App;
