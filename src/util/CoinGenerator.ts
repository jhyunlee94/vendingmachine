import { MissionUtils } from "@woowacourse/mission-utils";

class CoinGenerator {
  constructor() {}
  generate() {
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
  }
}

export default CoinGenerator;
