import './App.css'
import About from './pages/about/About'
import Community from './pages/community/Community'
import Food from './pages/food/Food'
import Retail from './pages/retail/Retail'
import { Route, useLocation } from 'wouter'
import marketIcon from './assets/market.svg'
import ProductPage from './pages/product/ProductPage'

function App() {
	const [location, setLocation] = useLocation()

	return (
		<div className='App'>
			{/* HOME */}

			<div
				className={`nav-button about ${location === '/' ? 'selected' : ''}`}
				onClick={() => {
					if (location !== '/') {
						setLocation('/')
					}
				}}>
				<img className='logo' src={marketIcon} alt='logo image' />
				<Route path='/' component={About} />
			</div>

			{/* FOOD */}

			<div
				className={`nav-button food ${
					location.includes('/food') ? 'selected' : ''
				}`}
				onClick={() => {
					if (!location.includes('/food')) {
						setLocation('/food')
					}
				}}>
				<div className='nav-info'>
					<p className='nav-paragraph'>餐饮</p>
					<span className='nav-span'>Food</span>
				</div>
				<Route path='/food' component={Food} />
				<Route path='/food/:name'>{ProductPage}</Route>
			</div>

			{/* RETAIL */}

			<div
				className={`nav-button retail ${
					location.includes('/retail') ? 'selected' : ''
				}`}
				onClick={() => {
					if (!location.includes('/retail')) {
						setLocation('/retail')
					}
				}}>
				<p className='nav-paragraph'>購物</p>
				<span className='nav-span'>Retail</span>
				<Route path='/retail' component={Retail} />
				<Route path='/retail/:name'>{ProductPage}</Route>
			</div>

			{/* COMMUNITY */}

			<div
				className={`nav-button community ${
					location === '/community' ? 'selected' : ''
				}`}
				onClick={() => {
					if (location !== '/community') {
						setLocation('/community')
					}
				}}>
				<p className='nav-paragraph'>文化</p>
				<span className='nav-span'>Community</span>
				<Route path='/community' component={Community} />
			</div>
		</div>
	)
}

export default App
