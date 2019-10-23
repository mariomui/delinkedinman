import { parseMatrix, splitter } from '../components/WheelUI/UIlib';

import Keyboard from './alphabet'
/**
 * initalCss will updated
 * this program will also return the 3 row keyboar matrix.
 * @param {*} initialCss 
 * @param {*} moreCss 
 */
export const createKeyboardUIObject = (initialCss, moreCss) => {
  const mapping = [];
  for (let key in Keyboard) {
    mapping.push(splitter(Keyboard[key]))
  }
  let flattMatrix = parseMatrix(mapping);
  for (let flat of flattMatrix) {
    initialCss[`key${flat}`] = moreCss
  }
  return mapping;
}






