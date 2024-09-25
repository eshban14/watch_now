
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import MovieList from './components/movielist/MovieList';
import Movie from './components/pages/MovieDetail/Movie';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>

          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error page</h1>}></Route>

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
