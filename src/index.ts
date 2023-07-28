import { Elysia, t } from "elysia";
import { Contract, JsonRpcProvider } from "ethers";
import details from "./details.json";
import Cert from "./contracts/Cert.sol/Cert.json";

const provider = new JsonRpcProvider("http://127.0.0.1:8545");
const signer = await provider.getSigner(details.deployer);

const instance = new Contract(details.contract, Cert.abi, signer);

const app = new Elysia()
  .post(
    "/issue",
    async ({ body }) => {
      const trx = await instance.issue(
        body.id,
        body.name,
        body.course,
        body.grade,
        body.date
      );
      return trx;
    },
    {
      body: t.Object({
        id: t.Number(),
        name: t.String(),
        course: t.String(),
        grade: t.String(),
        date: t.String(),
      }),
    }
  )
  .get("/fetch", async ({ query }) => {
    return { certificate: await instance.Certificates(query.id) };
  })
  .get("/latest", async () => {
    return { latest_block: await provider.getBlockNumber() };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
