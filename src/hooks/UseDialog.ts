import { useContext } from 'react'
import { DialogContext } from '../context/DialogContext'

export default function UseDialog() {
	const { isOpen, changeDialogState } = useContext(DialogContext)

	return { isOpen, changeDialogState }
}
