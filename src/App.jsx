import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PatientJourney from './pages/PatientJourney';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';
import { useState } from 'react';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar onBookClick={openBooking} />
        <main>
          <Routes>
            <Route path="/" element={<Home onBookClick={openBooking} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/journey" element={<PatientJourney />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer onBookClick={openBooking} />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}

export default App;
