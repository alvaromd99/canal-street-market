import { Link } from 'wouter'
import './button.css'

interface BackBtnProps {
	text: string
	location: string
}

export default function BackBtn({ text, location }: BackBtnProps) {
	return (
		<Link to={location} className='back-btn btn-link'>
			<span>{'\u21E0'}</span>
			<p>{text}</p>
		</Link>
	)
}
