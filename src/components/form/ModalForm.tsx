import CustomSelect from '../select/CustomSelect'
import './modalForm.css'

export default function ModalForm() {
	const itemsArray = ['Food', 'Retail']
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const terms = ['1 year', '+1 year']

	return (
		<form>
			<div className='name-input'>
				<input type='text' placeholder='Business Name' />
			</div>
			<div className='food-retail-select'>
				<CustomSelect itemsArr={itemsArray} placeholder={'Food or Retail ?'} />
			</div>
			<div className='start-date-select'>
				<CustomSelect itemsArr={months} placeholder={'Start Date'} />
			</div>
			<div className='term-length-select'>
				<CustomSelect itemsArr={terms} placeholder={'Term Length'} />
			</div>
			<div className='phone-input'>
				<input type='text' placeholder='Phone #' />
			</div>
			<div className='mail-input'>
				<input type='text' placeholder='Email' />
			</div>
			<div className='instagram-input'>
				<input type='text' placeholder='Instagram' />
			</div>
			<div className='web-input'>
				<input type='text' placeholder='Website' />
			</div>
			<div className='text-area'>
				<textarea></textarea>
			</div>
			<div className='submit-btn'>
				<button>Submit</button>
			</div>
		</form>
	)
}
