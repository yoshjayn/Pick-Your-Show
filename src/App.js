import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShowPage from './components/ShowPage';
import './index.css';
import BookingConfirmation from './components/BookingConfirmation';
import UserAccount from './components/UserAccount';
import AdminPage from './components/AdminPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shows" element={<ShowPage />} />
          <Route path="/confirm" element={<BookingConfirmation />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
