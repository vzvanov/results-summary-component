import './App.css';
import Footer from './components/Footer/Footer';
import PixelPerfect from './components/PixelPerfect/PixelPerfect';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <div className="wrapper">
        <PixelPerfect />
        <main className="App">
          <Card />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
