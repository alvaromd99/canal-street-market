import './App.css'
import About from './pages/about/About'
import Community from './pages/community/Community'
import Food from './pages/food/Food'
import Retail from './pages/retail/Retail'
import { Route, useLocation } from 'wouter'

function App() {
	const [location, setLocation] = useLocation()

	return (
		<div className='App'>
			<div
				className={`nav-button about ${location === '/' ? 'selected' : ''}`}
				onClick={() => setLocation('/')}>
				<Route path='/' component={About} />
			</div>
			<div
				className={`nav-button food ${location === '/food' ? 'selected' : ''}`}
				onClick={() => setLocation('food')}>
				<Route path='/food' component={Food} />
			</div>
			<div
				className={`nav-button retail ${
					location === '/retail' ? 'selected' : ''
				}`}
				onClick={() => setLocation('retail')}>
				<Route path='/retail' component={Retail} />
			</div>
			<div
				className={`nav-button community ${
					location === '/community' ? 'selected' : ''
				}`}
				onClick={() => setLocation('community')}>
				<Route path='/community' component={Community} />
			</div>
		</div>
	)
}

export default App
