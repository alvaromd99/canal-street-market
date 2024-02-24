import { ModalListInfo } from '../../constants/constants'
import ModalForm from '../form/ModalForm'
import ModalList from '../list/ModalList'
import ModalTitle from '../title/ModalTitle'
import './modalContent.css'

export default function ModalContent() {
	return (
		<div className='modal'>
			<ModalTitle />
			<div className='modal-grid'>
				<img
					src='https://images.prismic.io/canalstreetmarket/e5e49733e81f2ffc993c9fea54aab63cc2e88128_65cba3e4e63fe9c4baf2e68ce8606fafe6a802c2_food-hall-compressor.jpg?auto=compress,format'
					alt='Modal image 1'
				/>
				<ModalList listInfo={ModalListInfo[0]} />
				<ModalList listInfo={ModalListInfo[1]} />
				<img
					src='https://images.prismic.io/canalstreetmarket/422563cbd7238c8566d127d35eb63afcd56cb8cf_c82d4752e3aa4892ba74f83371b2bb6efe05d9ff_market-stuff-compressor.jpg?auto=compress,format'
					alt='Modal image 2'
				/>
				<img
					src='https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format'
					alt='Modal image 3'
				/>
				<ModalList listInfo={ModalListInfo[2]} />
			</div>
			<div className='vendor-section'>
				<h4>Become a vendor</h4>
				<ModalForm />
			</div>
		</div>
	)
}
