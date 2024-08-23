import './App.css';
import { Footer } from './Components/PrincipalComponents/footer';
import { Header } from './Components/PrincipalComponents/header';
import { MainDerecho } from './Components/PrincipalComponents/main/mainDerecho';
import { MainIzquierdo } from './Components/PrincipalComponents/main/mainIzquierdo';


function App() {
  return (
    <div className="App">

      <div className='App-container'>

            <Header />
            
            <div className='Main-container'>
              <MainIzquierdo />
              <MainDerecho />
            </div>

            <Footer />
        
      </div>
      
    </div>
  );
}

export default App;
