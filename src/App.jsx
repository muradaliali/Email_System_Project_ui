import './app.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Test from './components/test/Test';
import Wallet from './components/wallet/Wallet';
import Editbrand from './components/editbrand/Editbrand';
import Intro from './components/intro/Intro';
import Setting from './components/setting/Setting';


function App() {
  return (
    <div className="app"> 
    <Router>
            <Navbar />
          
            <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/editbrand" element={<Editbrand />} />
                <Route path="/allsetting" element={<Setting />} />
                <Route path="/ft" element={<Intro />} />

            </Routes>
        </Router>
    </div>
  );
}

export default App;
