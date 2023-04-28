import './App.scss';
import './assets/reset.scss';

import Header from "./components/header/Header";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Header/>
        <Routes>     
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />   
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;