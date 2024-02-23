import { ModalListInformation } from '../../types/types'
import './modalList.css'

interface ModalListProps {
	listInfo: ModalListInformation
}

export default function ModalList({ listInfo }: ModalListProps) {
	return (
		<div className='modal-list'>
			<h4>{listInfo.title}</h4>
			<ul>
				{listInfo.listItems.map((item, index) => (
					<li style={{ listStyleImage: `url(${item.markerSrc})` }} key={index}>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	)
}
