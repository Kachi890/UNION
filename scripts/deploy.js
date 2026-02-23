async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const BaseToken = await ethers.getContractFactory("BaseToken");
  const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1,000,000 tokens
  const token = await BaseToken.deploy("MyBaseToken", "MBT", initialSupply);
  await token.deployed();

  console.log("BaseToken deployed to:", token.address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
