import "./App.scss";
import "./assets/reset.scss";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import NotFound from "./components/404/NotFound";
import Footer from "./components/footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
