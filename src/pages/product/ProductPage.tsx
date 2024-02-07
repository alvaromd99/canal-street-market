import { useParams } from 'wouter'

export default function ProductPage() {
	const params = useParams()
	const name = params.name

	return <div>{name}</div>
}
