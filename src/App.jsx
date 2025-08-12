import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#151515] flex flex-col justify-between">
      <Navbar />
      <Footer/>
    </div>
  );
}

export default App;
