import './imagesSlider.css'

interface ImagesSliderProps {
	imagesArr: string[]
}

export default function ImagesSlider({ imagesArr }: ImagesSliderProps) {
	console.log(imagesArr[0])

	return (
		<div className='images-slider'>
			<button className='slider-btn left'>
				<span>
					<p>{'\u21E0'}</p>
				</span>
			</button>
			<div className='images-display'></div>
			<button className='slider-btn right'>
				<span>
					<p>{'\u21E2'}</p>
				</span>
			</button>
		</div>
	)
}
