import { useContext } from 'react'
import { RefContext } from '../context/RefContext'

export default function UseReference() {
	const { openDialog, closeDialog } = useContext(RefContext)

	return { openDialog, closeDialog }
}
