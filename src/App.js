import Navbar from './Navbar';
import Presentation from './Presentation';
import Projects from './Projects';
import Skills from './Skills';
import SocialLinks from './SocialLinks';

const App = () => {
  return (
    <main className='container'>
      <header className='header'>
        <Navbar />
        <h1 className='title job'>développeur web et web mobile</h1>
      </header>
      <div className='separate'></div>
      <Presentation />
      <Projects />
      <Skills />
      <SocialLinks />
    </main>
  );
};

export default App;
