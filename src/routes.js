
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Header from './components/Header';

const Routes1 = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route path="/sobre" component={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routes1;