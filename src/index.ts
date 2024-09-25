import { Elysia, t } from 'elysia'
import { Contract, JsonRpcProvider } from 'ethers'
import details from '../ignition/deployments/chain-31337/deployed_addresses.json'
import Cert from '../artifacts/contracts/Cert.sol/Cert.json'

const provider = new JsonRpcProvider('http://127.0.0.1:8545')

const app = new Elysia()
	.post(
		'/issue',
		async ({ body }) => {
			const signer = await provider.getSigner()
			const instance = new Contract(
				details['CertModule#Cert'],
				Cert.abi,
				signer,
			)

			const trx = await instance.issue(
				body.id,
				body.name,
				body.course,
				body.grade,
				body.date,
			)
			return trx
		},
		{
			body: t.Object({
				id: t.Number(),
				name: t.String(),
				course: t.String(),
				grade: t.String(),
				date: t.String(),
			}),
		},
	)
	.get('/fetch/:id', async ({ params: { id } }) => {
		const signer = await provider.getSigner()
		const instance = new Contract(details['CertModule#Cert'], Cert.abi, signer)

		return { certificate: await instance.Certificates(id) }
	})
	.get('/latest', async () => {
		return { latest_block: await provider.getBlockNumber() }
	})
	.listen(3000)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
