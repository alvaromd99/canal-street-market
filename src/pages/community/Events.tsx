import smileFace from '../../assets/smileFace.svg'
import PageAnnouncement from '../../components/announcement/PageAnnouncement'
import EventCard from '../../components/cards/EventCard'
import FooterLegal from '../../components/footer/FooterLegal'
import FooterLinks from '../../components/footer/FooterLinks'
import CommunityPagesTitle from '../../components/pageTitle/CommunityPagesTitle'
import { EventsPageInfo } from '../../constants/constants'
import './events.css'

export default function Events() {
	return (
		<div className='events-page page'>
			<section className='header-section'>
				<CommunityPagesTitle
					title={'Market Events'}
					text={
						'Our curated list of events bringing interesting people, talks, and workshops to Chinatown'
					}
					letter={'活動'}
				/>
			</section>

			<section className='announcement-section'>
				<PageAnnouncement
					svgSrc={smileFace}
					alt={'smile face'}
					title={'Past Events'}
				/>
			</section>

			<section className='images-slider-section'>
				{EventsPageInfo.map(({ principalPhoto, title, location }, index) => (
					<EventCard
						key={index}
						imgSrc={principalPhoto}
						title={title}
						location={location}
					/>
				))}
			</section>

			<section className='footer-section'>
				<FooterLinks />
				<FooterLegal />
			</section>
		</div>
	)
}
