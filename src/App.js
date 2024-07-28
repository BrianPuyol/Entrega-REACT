import { BrowserRouter, Routes, Route } from 'react-router-dom';
//paso 1, al menos veo algo
import './App.css';
import Header from './componentes/header';
import Nav from './componentes/nav';
import Footer from './componentes/footer';

import Home from './pages/home'; //paso 2, mayus
import Locales from './pages/locales'; //paso 2
import Nosotros from './pages/nosotros'; //paso 2 
import Shop from './pages/shop';//paso 2

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} /> {/* paso 3 */}
          <Route path='/locales' element={<Locales />} /> {/* paso 3 */}
          <Route path='/Nosotros' element={<Nosotros />} /> {/* paso 3 */}
          <Route path='/Shop' element={<Shop />} /> {/* paso 3 */}
          {/* una vez creado las rutas, pongo el contenido de cada página */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
