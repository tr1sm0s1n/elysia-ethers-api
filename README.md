# Elysia-Ethers-API

Simple Elysia API for interaction with the Ethereum blockchain.

## 🛠 Built With

<div align="left">
<a href="https://bun.sh/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/bun.svg" width="36" height="36" alt="Bun" /></a>
<a href="https://elysiajs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/elysia.svg" width="36" height="36" alt="Elysia" /></a>
<a href="https://ethers.io" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/ethers.svg" width="36" height="36" alt="Ethers" /></a>
<a href="https://hardhat.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/hardhat.svg" width="36" height="36" alt="Hardhat" /></a>
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/solidity.svg" width="36" height="36" alt="Solidity" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/typescript.svg" width="36" height="36" alt="TypeScript" /></a>
</div>

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
