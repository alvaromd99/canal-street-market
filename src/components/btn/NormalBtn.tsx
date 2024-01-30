import './button.css'

interface NormalBtnProps {
	text: string
	pad: number
}

export default function NormalBtn({ text, pad }: NormalBtnProps) {
	return (
		<button className='btn' style={{ padding: `${pad}rem` }}>
			{text}
		</button>
	)
}
