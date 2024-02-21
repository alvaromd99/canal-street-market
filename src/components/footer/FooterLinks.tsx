import { linkCards } from '../../constants/constants'
import ContactCard from '../cards/ContactCard'
import NewsLetterSign from '../newsletter/NewsLetterSign'
import './footerLinks.css'

export default function FooterLinks() {
	return (
		<>
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
		</>
	)
}
