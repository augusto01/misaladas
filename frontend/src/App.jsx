import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Rutas from './routes/Rutas';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header />
    <Navbar />
      <main className="content-container">
        <Rutas />
      </main>
    </Router>

  );
}

export default App;
