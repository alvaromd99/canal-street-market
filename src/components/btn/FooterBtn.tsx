import './button.css'

interface FooterBtnProps {
	text: string
	pad: number
}

export default function FooterBtn({ text, pad }: FooterBtnProps) {
	return (
		<button className='btn' style={{ padding: `${pad}rem` }}>
			{text}
		</button>
	)
}
