import BackBtn from '../../components/btn/BackBtn'
import ImagesSlider from '../../components/imagesSlider/ImagesSlider'
import SingleEventPageTitle from '../../components/pageTitle/SingleEventPageTitle'
import { EventsPageInfo } from '../../constants/constants'
import { findSingleEventByName } from '../../utils/findSingleEventByName'
import './singleEvent.css'

export default function SingleEvent({ name }: { name: string }) {
	const selectedEvent = findSingleEventByName(EventsPageInfo, name)

	return (
		<div className='single-event-page page'>
			{selectedEvent && (
				<div>
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
				</div>
			)}
		</div>
	)
}
