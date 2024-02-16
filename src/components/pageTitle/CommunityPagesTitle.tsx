import BackBtn from '../btn/BackBtn'
import './communityPagesTitle.css'

interface CommunityPagesTitleProps {
	title: string
	text: string
	letter: string
}

export default function CommunityPagesTitle({
	title,
	text,
	letter,
}: CommunityPagesTitleProps) {
	return (
		<>
			<div className='header-left'>
				<BackBtn text={'community'} location={'/community'} />
				<h1>{title}</h1>
			</div>
			<div className='header-right'>
				<p>{text}</p>
				<p>{letter}</p>
			</div>
		</>
	)
}
