
import { Home } from './Home';


function App() {

  const handleChangeCity = (e) => {
    e.preventDefault();
    alert("prompt retablissement à notre ami Martial !")
  }
  
  return (
    <>
      <Home title="Martial est mal en point !" age="20" ville="Abidjan" onChangeCity={handleChangeCity}>On m'appelle children</Home>
    </>

    
   
  );
}

export default App;
