// enum CoinEnum {
//   COIN_500 = 500,
//   COIN_100 = 100,
//   COIN_50 = 50,
//   COIN_10 = 10,
// }

class Coin {
  static COIN_500 = new Coin(500);
  static COIN_100 = new Coin(100);
  static COIN_50 = new Coin(50);
  static COIN_10 = new Coin(10);

  constructor(private readonly amount: number) {}

  getAmount(): number {
    return this.amount;
  }
}
