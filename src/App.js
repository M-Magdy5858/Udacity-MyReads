import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;
