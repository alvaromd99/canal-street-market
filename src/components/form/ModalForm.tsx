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
			<div className='div1'>
				<input type='text' placeholder='Business Name' />
			</div>
			<div className='div2'>
				<CustomSelect itemsArr={itemsArray} placeholder={'Food or Retail ?'} />
			</div>
			<div className='div3'>
				<CustomSelect itemsArr={months} placeholder={'Start Date'} />
			</div>
			<div className='div4'>
				<CustomSelect itemsArr={terms} placeholder={'Term Length'} />
			</div>
			<div className='div5'>
				<input type='text' placeholder='Phone #' />
			</div>
			<div className='div6'>
				<input type='text' placeholder='Email' />
			</div>
			<div className='div7'>
				<input type='text' placeholder='Instagram' />
			</div>
			<div className='div8'>
				<input type='text' placeholder='Website' />
			</div>
			<div className='div9'>
				<textarea placeholder='Tell us a litter about yourself...'></textarea>
			</div>
			<div className='div10'>
				<button className='modal-submit-btn'>Submit</button>
			</div>
		</form>
	)
}
