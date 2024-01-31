import CoinGenerator from "../util/CoinGenerator";

class VendingMachineController {
  constructor() {}

  run() {
    console.log("run test");
    const coinGenerator = new CoinGenerator();
    coinGenerator.generate();
  }
}

export default VendingMachineController;
