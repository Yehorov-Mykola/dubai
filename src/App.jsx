import './App.scss';
import './reset.scss';

//import Cards from "./components/cards/Cards";
//import SingleNews from "./components/singleNews/SingleNews.jsx";
import Header from "./components/header/Header";
import About from "./components/about/About";
//import Contacts from "./components/contacts/Contacts";
//import NotFound from "./components/notFound/NotFound";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Header/>
        <Routes>        

          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;