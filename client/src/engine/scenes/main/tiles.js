import every from 'lodash/every';
import some from 'lodash/some';

const rock = 'R';
const path = ' ';
const wall = '#';

// export default function (current, [top, right, bottom, left]) {
//   switch (current) {
//     case path:
//       return 0;
//     case rock:
//       return 2;
//     case wall:
//       if (bottom === path) {
//         if (left === path && right === path) return 13;
//         else if (right === path) return 12;
//         else if (left === path) return 11;
//         return 10;
//       }
//
//       if (top === path && right === path && left === path) return 9;
//       else if (top === path && right === path) return 8;
//       else if (top === path && left === path) return 7;
//       else if (top === path) return 5;
//       else if (right === path && left === path) return 6;
//       else if (right === path) return 4;
//       else if (left === path) return 3;
//
//       return 2;
//     default:
//       return -1;
//   }
// }

export default function (current, aside) {
  // eslint-disable-next-line no-unused-vars
  const [top, right, bottom, left] = aside;
  switch (current) {
    case path:
      return 0;
    case rock:
      return 17;
    case wall:
      if (every(aside, tile => tile === wall)) return 17;
      else if (every(aside, tile => tile === path)) return 1;
      else if (some(aside, tile => tile === path)) {
        if (top === path && right === path && bottom === path) return 14;
        else if (top === path && right === path && left === path) return 15;
        else if (top === path && left === path && bottom === path) return 13;
        else if (bottom === path && right === path && left === path) return 12;
        else if (top === path && right === path) return 9;
        else if (top === path && left === path) return 8;
        else if (bottom === path && right === path) return 11;
        else if (bottom === path && left === path) return 10;
        else if (top === path && bottom === path) return 7;
        else if (right === path && left === path) return 4;
        else if (top === path) return 5;
        else if (right === path) return 3;
        else if (bottom === path) return 6;
        else if (left === path) return 2;

        return 1;
      }
      return 16;
    default:
      return -1;
  }
}
