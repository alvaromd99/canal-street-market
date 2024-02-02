import { linkCards } from '../../constants/constants'
import NormalBtn from '../btn/NormalBtn'
import ContactCard from '../cards/ContactCard'
import NewsLetterSign from '../newsletter/NewsLetterSign'
import FooterLegal from './FooterLegal'
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
						link={linkCard.link}
					/>
				))}
			</div>
			<div className='footer-newsletter'>
				<NewsLetterSign />
			</div>
			<div className='footer-legal'>
				<FooterLegal />
			</div>
		</>
	)
}
