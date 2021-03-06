import {TYPE_1, TYPE_2, TYPE_3, TYPE_4} from '../constants';
import Block from './Block';

export default class BO extends Block {
  static get types() {
    return {
      [TYPE_1]: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 1},
      ],
      [TYPE_2]: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 1},
      ],
      [TYPE_3]: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 1},
      ],
      [TYPE_4]: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 1},
      ],
    };
  }

  static get size() {
    return {
      width: 2,
      height: 2,
    };
  }
}
