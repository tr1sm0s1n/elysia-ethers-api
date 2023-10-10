# Elysia-Ethers-API

Simple Elysia API for interaction with the Ethereum blockchain.

## 🛠 Built With

![Bun](https://img.shields.io/badge/bun-2F4F4F?style=for-the-badge&logo=bun)
![Elysia](https://img.shields.io/badge/elysia-2F4F4F?style=for-the-badge&logo=bun)
![Ethers](https://img.shields.io/badge/ethers-2F4F4F?style=for-the-badge&logo=ethereum)
![Hardhat](https://img.shields.io/badge/hardhat-2F4F4F?style=for-the-badge&logo=ethereum)
![Solidity](https://img.shields.io/badge/solidity-2F4F4F?style=for-the-badge&logo=solidity)
![TypeScript](https://img.shields.io/badge/typescript-2F4F4F?style=for-the-badge&logo=typescript)

## ⚙️ Run Locally

Clone the project

```bash
git clone https://github.com/DEMYSTIF/elysia-ethers-api.git
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
