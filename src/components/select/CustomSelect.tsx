import { useRef, useState } from 'react'
import './customSelect.css'

interface CustomSelectProps {
	itemsArr: string[]
	placeholder: string
}

export default function CustomSelect({
	itemsArr,
	placeholder,
}: CustomSelectProps) {
	const selectRef = useRef<HTMLDivElement>(null)
	const [selectedItem, setSelectedItem] = useState(placeholder)
	const [isOpen, setIsOpen] = useState(false)

	const handleSelectView = () => {
		setIsOpen(!isOpen)
	}

	const handleSelectItem = (item: string) => {
		setSelectedItem(item)

		if (itemsArr.length > 3) {
			selectRef.current?.scrollTo(0, 0)
		}
	}

	return (
		<div
			className={`items-wrapper ${isOpen ? 'open' : ''}`}
			onClick={handleSelectView}
			ref={selectRef}>
			<div className='selected item'>
				<p>{selectedItem}</p>
				<p>{'\u21E3'}</p>
			</div>
			{itemsArr.map((item, index) => (
				<div
					className='item'
					onClick={() => handleSelectItem(item)}
					key={index}>
					{item}
				</div>
			))}
		</div>
	)
}
