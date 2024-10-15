import './App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import Aboutme from './components/aboutme';
import Stacks from './components/stacks';
import Archive from './components/Archive';
import Projects from './components/projects';
import Careers from './components/careers';
import Footer from './components/footer';

function App() {
  return (
    <div id='app'>
      <Navbar></Navbar>
      <Title></Title>
      <Aboutme></Aboutme>
      <Stacks></Stacks>
      <Archive></Archive>
      <Projects></Projects>
      <Careers></Careers>
      <Footer></Footer>
    </div>
  );
}

export default App;
