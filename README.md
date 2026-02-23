# UNION

Simple owner-mintable ERC-20 token template for the Base network (OpenZeppelin + Hardhat).

Quick start:
1. Clone:
   git clone https://github.com/<you>/base-token.git
   cd base-token
2. Install:
   npm ci
3. Configure:
   Create a .env with RPC_URL and PRIVATE_KEY (do NOT commit .env).
4. Compile:
   npx hardhat compile
5. Deploy to Base:
   npx hardhat run scripts/deploy.js --network base

Files:
- contracts/BaseToken.sol
- scripts/deploy.js
- hardhat.config.js
- .github/workflows/deploy.yml (optional CI/CD)

Security:
- Never commit private keys or .env. Use GitHub Secrets for CI deployments.
- Test on Base testnet before mainnet.
