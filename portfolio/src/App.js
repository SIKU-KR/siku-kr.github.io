import './App.css';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Stacks from './components/stacks';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <div id='app'>
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      <Stacks></Stacks>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
