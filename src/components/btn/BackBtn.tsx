import { useLocation } from 'wouter'
import './button.css'

interface BackBtnProps {
	text: string
	location: string
}

export default function BackBtn({ text, location }: BackBtnProps) {
	const [, setLocation] = useLocation()

	const handleBackClick = () => {
		setLocation(location)
	}
	return (
		<button className='back-btn' onClick={handleBackClick}>
			<span>{'\u21E0'}</span>
			<p>{text}</p>
		</button>
	)
}
