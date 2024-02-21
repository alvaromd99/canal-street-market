import UseDialog from '../../hooks/UseDialog'
import FooterLegal from './FooterLegal'
import FooterLinks from './FooterLinks'
import './footer.css'

export default function Footer() {
	const { changeDialogState } = UseDialog()

	return (
		<>
			<div className='footer-title'>
				<h3>Interested in becoming a vendor ?</h3>
				<button onClick={changeDialogState}>click here</button>
			</div>
			<FooterLinks />
			<div className='footer-legal'>
				<FooterLegal />
			</div>
		</>
	)
}
