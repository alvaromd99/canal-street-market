import { useContext } from 'react'
import { RefContext } from '../../context/RefContext'
import FooterLegal from './FooterLegal'
import FooterLinks from './FooterLinks'
import './footer.css'

export default function Footer() {
	const { openDialog } = useContext(RefContext)
	return (
		<>
			<div className='footer-title'>
				<h3>Interested in becoming a vendor ?</h3>
				<button onClick={openDialog}>click here</button>
			</div>
			<FooterLinks />
			<div className='footer-legal'>
				<FooterLegal />
			</div>
		</>
	)
}
