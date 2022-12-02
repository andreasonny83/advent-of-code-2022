import fs from 'fs';
import path from 'path';

const DATA = 'data/input.txt';

interface Store {
  max: number;
  curr: number;
}

export const returnMaxCals = (input: string[]) =>
  input.reduce(
    ({ curr, max }: Store, el: string) => {
      if (!el) {
        return { max, curr: 0 };
      }

      const newCurr = curr + Number(el);
      return { max: newCurr > max ? newCurr : max, curr: newCurr };
    },
    { max: 0, curr: 0 }
  ).max;

export const run = (): number => returnMaxCals(fs.readFileSync(path.join(__dirname, DATA), 'utf-8').split(/\r?\n/));
