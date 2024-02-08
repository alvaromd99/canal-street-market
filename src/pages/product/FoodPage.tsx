import { foodPlates } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'

export default function FoodPage({ name }: { name: string }) {
	const plate = findProductsByName(foodPlates, name)
	console.log(plate)

	return (
		<div>
			<h1>Hello world</h1>
		</div>
	)
}
