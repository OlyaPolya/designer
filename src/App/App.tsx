
import About from './About/About';
import './App.scss';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';

function App() {
  return (
    <main className='App'>
      <Header />
      <About />
      <Portfolio />
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;
