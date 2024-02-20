import smileFace from '../../assets/smileFace.svg'
import PageAnnouncement from '../../components/announcement/PageAnnouncement'
import CommunityPagesTitle from '../../components/pageTitle/CommunityPagesTitle'
import './events.css'

export default function Events() {
	return (
		<div className='events-page'>
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
		</div>
	)
}
