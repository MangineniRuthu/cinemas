import MovieDetails from "./components/MovieDetails";
import MovieHome from "./components/MovieHome";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MovieHome/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
        </Routes>
    </Router>
  );
}

export default App;
