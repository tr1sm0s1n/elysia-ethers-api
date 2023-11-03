# Elysia-Ethers-API

Simple Elysia API for interaction with the Ethereum blockchain.

## 🛠 Built With

[![Bun](https://img.shields.io/badge/bun-dimgray?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![Elysia](https://img.shields.io/badge/elysia-dimgray?style=for-the-badge&logo=bun&logoColor=white)](https://elysiajs.com/)
[![Ethers](https://img.shields.io/badge/ethers-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://docs.ethers.org/v6/)
[![Hardhat](https://img.shields.io/badge/hardhat-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://hardhat.org/)
[![Solidity](https://img.shields.io/badge/solidity-sienna?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
[![TypeScript](https://img.shields.io/badge/typescript-royalblue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ⚙️ Run Locally

Clone the project

```bash
git clone https://github.com/tr1sm0s1n/elysia-ethers-api.git
cd elysia-ethers-api
```

Install Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Install dependencies for hardhat

```bash
cd hardhat
bun install
```

Run a blockchain simulation (ganache/geth/foundry), on port **8545**.

Deploy the contract

```bash
bun run deploy
```

Install dependencies for api

```bash
cd ..
bun install
```

Start the application

```bash
bun run dev
```

Issue a certificate (new terminal)

```bash
curl -X POST http://localhost:3000/issue -H "Content-Type: application/json" -d '{"id": 9, "name": "Langley", "course": "MBCC", "grade": "A", "date": "01-02-03"}'
```

Fetch a certificate

```bash
curl http://localhost:3000/fetch?id=9
```
