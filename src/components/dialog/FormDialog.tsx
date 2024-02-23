import UseDialog from '../../hooks/UseDialog'
import './formDialog.css'

export default function FormDialog() {
	const { isOpen } = UseDialog()

	return (
		<dialog className={`form-dialog ${isOpen ? 'open' : 'close'}`} open>
			<p>Hello world</p>
		</dialog>
	)
}
