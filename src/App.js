import './App.css';
import Carousle from './Component/Carousle/Carousle';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/NavBar/Navbar';
import Places from './Component/Places/Places';
import Search from './Component/Search/Search';
import Select from './Select/Select';

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Places/>
     <Search/>
     <Select/>
     <Carousle/>
      <Footer/>
    </div>
  );
}

export default App;
