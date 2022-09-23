import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Nav from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
		<HashRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
        <Route path="/movie-detail/:id" element={<Detail />} />
			</Routes>
		</HashRouter>
  );
}
export default App;