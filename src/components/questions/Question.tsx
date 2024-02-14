interface QuestionProps {
	question: string
	response: string
}

export default function Question({ question, response }: QuestionProps) {
	return (
		<div className='question'>
			<p>{question}</p>
			<p>{response}</p>
		</div>
	)
}
