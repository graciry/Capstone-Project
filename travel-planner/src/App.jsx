import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // or './tailwind.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import ItineraryPage from './pages/ItineraryPage';
import AccountPage from './pages/AccountPage';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [destinations, setDestinations] = useState([]); // State for fetched destinations

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <SearchBar setDestinations={setDestinations} />

        <main className="flex-grow">
          <Routes>
            {/* Pass destinations and setDestinations to HomePage */}
            <Route
              path="/"
              element={
                <HomePage destinations={destinations} setDestinations={setDestinations} />
              }
            />
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
