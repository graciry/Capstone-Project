import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // or './tailwind.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import ItineraryPage from './pages/ItineraryPage';
import AccountPage from './pages/AccountPage';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
            <Route path="/account" element={<AccountPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
