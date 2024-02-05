import PageTitle from '../../components/pageTitle/PageTitle'
import './community.css'

export default function Community() {
	return (
		<div className='community-page'>
			<section className='hero-section'>
				<PageTitle
					name={'Community'}
					title={'Canal St. Community'}
					text={
						'Our mixed-use space hosts ongoing events, podcasts & artists in residence.'
					}
					letter={'文化'}
					imgSrc={
						'https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format'
					}
				/>
			</section>
		</div>
	)
}
