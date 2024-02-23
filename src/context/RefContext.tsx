import { createContext } from 'react'

interface RefContextProps {
	openDialog: () => void
	closeDialog: () => void
}

export const RefContext = createContext({} as RefContextProps)
