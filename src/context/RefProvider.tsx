import { useRef } from 'react'
import CrossIcon from '../assets/cross.svg'
import ModalContent from '../components/modal/ModalContent'
import { RefContext } from './RefContext'
interface RefProviderProps {
	children: JSX.Element | JSX.Element[]
}

export function RefProvider({ children }: RefProviderProps) {
	const dialogRef = useRef<HTMLDialogElement>(null)

	const openDialog = () => {
		if (!dialogRef.current) return
		dialogRef.current.showModal()
	}

	const closeDialog = () => {
		if (!dialogRef.current) return
		dialogRef.current.close()
	}

	return (
		<RefContext.Provider value={{ openDialog, closeDialog }}>
			{children}
			<dialog ref={dialogRef} className='exit-btn'>
				<ModalContent />
				<button className='exit-modal-btn' onClick={closeDialog}>
					<img src={CrossIcon} alt='Cross icon' />
				</button>
			</dialog>
		</RefContext.Provider>
	)
}
