import { foodPlates } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'

export default function RetailPage({ name }: { name: string }) {
	const retailObj = findProductsByName(foodPlates, name)
	console.log(retailObj)

	return (
		<div>
			<h1>Hello world</h1>
		</div>
	)
}
