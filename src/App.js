import './App.css';
import React, { useRef } from 'react';
import { Footer } from './Components/PrincipalComponents/footer';
import { Header } from './Components/PrincipalComponents/header';
import { MainDerecho } from './Components/PrincipalComponents/main/mainDerecho';
import { MainIzquierdo } from './Components/PrincipalComponents/main/mainIzquierdo';


function App() {

  const footerRef = useRef(null);

  return (
    <div className="App">

      
          <div className='App-container'>

                <Header />
                
                <div className='Main-container'>
                  <MainIzquierdo />
                  <MainDerecho footerRef={footerRef} />
                </div>

          </div>
          
          
          <Footer ref={footerRef} />
        
      
    </div>
  );
}

export default App;
