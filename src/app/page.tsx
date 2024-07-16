'use client'
import { api } from '@/trpc/client'
import { useState } from 'react'

export default function Home() {
	const [date] = useState(new Date())
	const test = api.get.useQuery({ testDate: date })

	const dateMutation = api.update.useMutation()
	const onUpdate = async () => {
		const res = await dateMutation.mutateAsync({ testDate: date })
		console.log('res', res)
	}

	return (
		<main className="">
			<div>
				<div>Date Test</div>
				<div>{test.data?.outputDate.toISOString()}</div>
				<div>
					<button onClick={onUpdate}>Trigger Mutation</button>
				</div>
			</div>
		</main>
	)
}
