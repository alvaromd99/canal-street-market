import { createContext } from 'react'

interface DialogContextProps {
	isOpen: boolean
	changeDialogState: () => void
}

export const DialogContext = createContext({} as DialogContextProps)
