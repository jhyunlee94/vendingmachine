declare module "@woowacourse/mission-utils" {
  export module MissionUtils {
    export module Console {
      function readLine(query: string, callback: (input: string) => void): void;
      function readLineAsync(query: string): Promise<string>;
      function print(message: any): void;
    }

    export module Random {
      function pickNumberInRange(
        startInclusive: number,
        endInclusive: number
      ): number;
      function pickNumberInList(array: number[]): number;
      function pickUniqueNumbersInRange(
        startInclusive: number,
        endInclusive: number,
        count: number
      ): number[];
      function shuffle(array: number[]): number[];
    }
  }
}
