import { useRef } from 'react'
import './About.css'
import { UseIntersectionObserver } from '../../hooks/UseIntersectionObserver'

export default function About() {
	const imageRef = useRef(null)

	UseIntersectionObserver([imageRef])

	return (
		<div className='about-page'>
			<section className='title-section'>
				<h1>
					Canal Street Market is a carefully curated retail market, food hall &
					community space open year-round at 265 Canal Street. Support Small
					Business this weekend!
				</h1>
			</section>
			<section className='image-section' ref={imageRef}>
				<img
					src='https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format'
					alt='image1'
				/>
			</section>
			<section>
				<h2>A New Kind of Market</h2>
			</section>
		</div>
	)
}
