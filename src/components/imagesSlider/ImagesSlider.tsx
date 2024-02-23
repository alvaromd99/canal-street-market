import { useRef, useState } from 'react'
import './imagesSlider.css'

interface ImagesSliderProps {
	imagesArr: string[]
}

export default function ImagesSlider({ imagesArr }: ImagesSliderProps) {
	const [imagesIndex, setImagesIndex] = useState(1)
	const sliderRef = useRef<HTMLDivElement | null>(null)

	const imagesToRender = [
		imagesArr[imagesArr.length - 1],
		...imagesArr,
		imagesArr[0],
	]

	const showNextImage = () => {
		if (!sliderRef.current || imagesIndex >= imagesToRender.length - 1) return
		sliderRef.current.style.transition = 'translate 500ms ease-out'
		setImagesIndex(imagesIndex + 1)
	}

	const showPreviosImage = () => {
		if (!sliderRef.current || imagesIndex <= 0) return
		sliderRef.current.style.transition = 'translate 500ms ease-out'
		setImagesIndex(imagesIndex - 1)
	}

	const handleTransitionEnd = () => {
		if (!sliderRef.current) return
		if (imagesIndex === imagesToRender.length - 1) {
			sliderRef.current.style.transition = 'none'
			setImagesIndex(1)
		}
		if (imagesIndex === 0) {
			sliderRef.current.style.transition = 'none'
			setImagesIndex(imagesToRender.length - 2)
		}
	}

	return (
		<div className='images-slider'>
			<button className='slider-btn left' onClick={showPreviosImage}>
				<span>
					<p>{'\u21E0'}</p>
				</span>
			</button>
			<div className='images-display'>
				<div
					className='image-wrapper'
					style={{ translate: `${-100 * imagesIndex}%` }}
					onTransitionEnd={handleTransitionEnd}
					ref={sliderRef}>
					{imagesToRender.map((image, index) => (
						<img src={image} alt='Secondary image' key={index} />
					))}
				</div>
			</div>
			<button className='slider-btn right' onClick={showNextImage}>
				<span>
					<p>{'\u21E2'}</p>
				</span>
			</button>
		</div>
	)
}
