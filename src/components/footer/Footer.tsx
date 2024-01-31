import { linkCards } from '../../constants/constants'
import NormalBtn from '../btn/NormalBtn'
import ContactCard from '../card/ContactCard'
import NewsLetterSign from '../newsletter/NewsLetterSign'
import './footer.css'

export default function Footer() {
	return (
		<>
			<div className='footer-title'>
				<h3>Interested in becoming a vendor ?</h3>
				<NormalBtn text='click here' pad={1} />
			</div>
			<div className='footer-links'>
				{linkCards.map((linkCard, index) => (
					<ContactCard
						key={index}
						imgSrc={linkCard.imgSrc}
						text={linkCard.text}
					/>
				))}
			</div>
			<div className='footer-newsletter'>
				<NewsLetterSign />
			</div>
		</>
	)
}
