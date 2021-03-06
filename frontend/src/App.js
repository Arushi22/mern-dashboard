import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Product Listing Component</h1>} />
          <Route path='/add' element={<h1>Product Listing Added</h1>} />
          <Route path='/update' element={<h1>Product Updated Component</h1>} />
          <Route path='/logout' element={<h1>Product logout</h1>} />
          <Route path='/profile' element={<h1>Product profile</h1>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      <Footer />     
    </div>
  );
}

export default App;
