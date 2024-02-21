import { useState } from 'react'
import { DialogContext } from './DialogContext'

interface DialogProviderProps {
	children: JSX.Element | JSX.Element[]
}

export const DialogProvider = ({ children }: DialogProviderProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const changeDialogState = () => {
		setIsOpen(!isOpen)
	}

	return (
		<DialogContext.Provider value={{ isOpen, changeDialogState }}>
			{children}
		</DialogContext.Provider>
	)
}
