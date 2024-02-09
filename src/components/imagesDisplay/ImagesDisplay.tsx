import './imagesDisplay.css'

interface ImagesDisplayProps {
	imagesArr: string[]
}

export default function ImagesDisplay({ imagesArr }: ImagesDisplayProps) {
	return (
		<div className='images-display-wrapper'>
			{imagesArr.map((image, index) => {
				return (
					image !== '' && (
						<div className='images-wrapper' key={index}>
							<img src={image} alt='Plate secondary fotos' />
						</div>
					)
				)
			})}
		</div>
	)
}
