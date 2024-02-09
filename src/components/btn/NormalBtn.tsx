import { useLocation } from 'wouter'
import './button.css'

interface NormalBtnProps {
	text: string
	pad: number
	newLocation: string
}

export default function NormalBtn({ text, pad, newLocation }: NormalBtnProps) {
	const [, setLocation] = useLocation()

	const handleClick = () => {
		setLocation(newLocation)
	}

	return (
		<button
			className='btn'
			style={{ padding: `${pad}rem` }}
			onClick={handleClick}>
			{text}
		</button>
	)
}
