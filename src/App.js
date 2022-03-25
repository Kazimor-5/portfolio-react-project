import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Slider from './components/Slider';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <main className='container'>
      <header className='header'>
        <Navbar />
        <h1 className='title job'>développeur web et web mobile</h1>
      </header>
      <div className='separate'></div>
      <Presentation />
      <Slider />
      <Skills />
      <SocialLinks />
    </main>
  );
};

export default App;
