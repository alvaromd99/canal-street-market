import { useEffect, useRef } from 'react'
import BackBtn from '../../components/btn/BackBtn'
import FooterLegal from '../../components/footer/FooterLegal'
import FooterLinks from '../../components/footer/FooterLinks'
import ImagesSlider from '../../components/imagesSlider/ImagesSlider'
import SingleEventPageTitle from '../../components/pageTitle/SingleEventPageTitle'
import UpcomingEventsTitle from '../../components/title/UpcomingEventsTitle'
import { EventsPageInfo } from '../../constants/constants'
import { findSingleEventByName } from '../../utils/findSingleEventByName'
import './singleEvent.css'

export default function SingleEvent({ name }: { name: string }) {
	const selectedEvent = findSingleEventByName(EventsPageInfo, name)

	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const topRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		wrapperRef.current?.classList.remove('fading-in')
		topRef.current?.scrollIntoView()
		wrapperRef.current?.classList.add('fading-in')
	}, [name])

	return (
		<div className='single-event-page page' ref={topRef}>
			{selectedEvent && (
				<div className='animation-wrapper' ref={wrapperRef}>
					<section className='header-section'>
						<BackBtn text={'community'} location={'/community'} />
						<BackBtn text={'events'} location={'/community/event'} />
					</section>

					<section className='title-section'>
						<SingleEventPageTitle
							title={selectedEvent.title}
							time={selectedEvent.time}
							date={selectedEvent.date}
							description={selectedEvent.description}
							imgSrc={selectedEvent.principalPhoto}
						/>
					</section>

					<section className='images-slider-section'>
						<ImagesSlider imagesArr={selectedEvent.secondaryPhotos} />
					</section>

					<section className='upcoming-events-section'>
						<UpcomingEventsTitle />
					</section>

					<section className='footer-section'>
						<FooterLinks />
						<FooterLegal />
					</section>
				</div>
			)}
		</div>
	)
}
