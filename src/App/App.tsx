
import About from './About';
import './App.scss';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import Portfolio from './Portfolio';

function App() {
  return (
    <main className='App'>
      <Header />
      <About />
      <Portfolio />
      <Contact/>
      <Footer />
      <Modal/>
    </main>
  );
}

export default App;
