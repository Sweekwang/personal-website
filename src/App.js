import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home Section/HomeSection';
import About from './Pages/Home/About/About';
import WorkExperience from './Pages/Home/Work Experience/WorkExperience';
import Projects from './Pages/Home/Projects/Projects';
import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Home/>
      <About/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
