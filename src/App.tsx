import { Route, useLocation } from 'wouter'
import './App.css'
import marketIcon from './assets/market.svg'
import { RefProvider } from './context/RefProvider'
import About from './pages/about/About'
import Community from './pages/community/Community'
import CommunityFeatures from './pages/community/CommunityFeatures'
import Events from './pages/community/Events'
import Feature from './pages/community/Feature'
import SingleEvent from './pages/community/SingleEvent'
import Food from './pages/food/Food'
import FoodPage from './pages/product/FoodPlatePage'
import RetailPage from './pages/product/RetailProductPage'
import Retail from './pages/retail/Retail'

function App() {
	const [location, setLocation] = useLocation()

	return (
		<div className='App'>
			<RefProvider>
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
					<Route path='/food/:name'>
						{(params) => <FoodPage name={params.name} />}
					</Route>
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
					<Route path='/retail/:name'>
						{(params) => <RetailPage name={params.name} />}
					</Route>
				</div>

				{/* COMMUNITY */}
				<div
					className={`nav-button community ${
						location.includes('/community') ? 'selected' : ''
					}`}
					onClick={() => {
						if (!location.includes('/community')) {
							setLocation('/community')
						}
					}}>
					<p className='nav-paragraph'>文化</p>
					<span className='nav-span'>Community</span>
					<Route path='/community' component={Community} />
					<Route path='/community/feature' component={CommunityFeatures} />
					<Route path='/community/feature/:name'>
						{(params) => <Feature name={params.name} />}
					</Route>
					<Route path='/community/event' component={Events} />
					<Route path='/community/event/:name'>
						{(params) => <SingleEvent name={params.name} />}
					</Route>
				</div>
			</RefProvider>
		</div>
	)
}

export default App
