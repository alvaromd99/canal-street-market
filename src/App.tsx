import './App.css'
import About from './pages/about/About'
import Community from './pages/community/Community'
import Food from './pages/food/Food'
import Retail from './pages/retail/Retail'
import { Route, useLocation } from 'wouter'
import marketIcon from './assets/market.svg'

function App() {
	const [location, setLocation] = useLocation()

	return (
		<div className='App'>
			<div
				className={`nav-button about ${location === '/' ? 'selected' : ''}`}
				onClick={() => setLocation('/')}>
				<img className='logo' src={marketIcon} alt='logo image' />
				<Route path='/' component={About} />
			</div>
			<div
				className={`nav-button food ${location === '/food' ? 'selected' : ''}`}
				onClick={() => setLocation('food')}>
				<div className='nav-info'>
					<p className='nav-paragraph'>餐饮</p>
					<span className='nav-span'>Food</span>
				</div>
				<Route path='/food' component={Food} />
			</div>
			<div
				className={`nav-button retail ${
					location === '/retail' ? 'selected' : ''
				}`}
				onClick={() => setLocation('retail')}>
				<p className='nav-paragraph'>購物</p>
				<span className='nav-span'>Retail</span>
				<Route path='/retail' component={Retail} />
			</div>
			<div
				className={`nav-button community ${
					location === '/community' ? 'selected' : ''
				}`}
				onClick={() => setLocation('community')}>
				<p className='nav-paragraph'>文化</p>
				<span className='nav-span'>Community</span>
				<Route path='/community' component={Community} />
			</div>
		</div>
	)
}

export default App
