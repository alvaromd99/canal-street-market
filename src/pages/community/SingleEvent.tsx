import BackBtn from '../../components/btn/BackBtn'
import './singleEvent.css'

export default function SingleEvent({ name }: { name: string }) {
	console.log(name)

	return (
		<div className='single-event-page'>
			<section className='header-section'>
				<BackBtn text={'community'} location={'/community'} />
				<BackBtn text={'events'} location={'/community/event'} />
			</section>
		</div>
	)
}
