import { retailObjects } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'

export default function RetailPage({ name }: { name: string }) {
	console.log(retailObjects)
	const retailObj = findProductsByName(retailObjects, name)

	console.log(retailObj)

	return (
		<div>
			<h1>Hello world</h1>
		</div>
	)
}
