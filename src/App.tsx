import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import InstructionHome from './pages/InstructionHome';
import InstructionPerfect from './pages/InstructionPerfect';
import InstructionContinuous from './pages/InstructionContinuous';
import InstructionSimple from './pages/InstructionSimple';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructions" element={<InstructionHome />} />
          <Route path="/instructions/perfect" element={<InstructionPerfect />} />
          <Route path="/instructions/continuous" element={<InstructionContinuous />} />
          <Route path="/instructions/simple" element={<InstructionSimple />} />
          <Route path="*" element={<div className="text-center text-2xl">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;