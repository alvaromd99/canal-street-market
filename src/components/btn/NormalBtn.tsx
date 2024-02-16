import { Link } from 'wouter'
import './button.css'

interface NormalBtnProps {
	text: string
	newLocation: string
}

export default function NormalBtn({ text, newLocation }: NormalBtnProps) {
	return (
		<Link to={newLocation} className='btn btn-link'>
			{text}
		</Link>
	)
}
