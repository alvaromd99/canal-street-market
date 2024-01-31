import './newsletterSign.css'

export default function NewsLetterSign() {
	return (
		<div className='newsletter-wrapper'>
			<p>Stay up to date with our newsletter</p>
			<form action=''>
				<input type='email' id='email' autoComplete='off' placeholder='Email' />
				<div className='submit-wrap'>
					<input type='submit' value='' />
				</div>
			</form>
		</div>
	)
}
