import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Diary from './Diary';
import Community from './Community';
import Notice from './Notice';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route
            path='/'
            element={
              <Home/>
            }>
          </Route>
          <Route
            path='/diary'
            element={
              <Diary/>
            }>
          </Route>
          <Route
            path='/community'
            element={
              <Community/>
            }>
          </Route>
          <Route
            path='/notice'
            element={
              <Notice/>
            }>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
