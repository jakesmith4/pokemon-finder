import { changeStatColors } from './changeStatColors.js';

export const checkType = (type) => {
  if (type === 'fire') {
    changeStatColors('#fb6c6c');
  }
  if (type === 'electric') {
    changeStatColors('#ffd86f');
  }
  if (type === 'bug') {
    changeStatColors('#79ff6f');
  }
  if (type === 'water') {
    changeStatColors('#61e0c9');
  }
  if (type === 'ice') {
    changeStatColors('#96D9D6');
  }
  if (type === 'grass') {
    changeStatColors('#7AC74C');
  }
  if (type === 'normal') {
    changeStatColors('#A8A77A');
  }
  if (type === 'ground') {
    changeStatColors('#E2BF65');
  }
  if (type === 'fighting') {
    changeStatColors('#C22E28');
  }
  if (type === 'poison') {
    changeStatColors('#A33EA1');
  }
  if (type === 'flying') {
    changeStatColors('#A98FF3');
  }
  if (type === 'psychic') {
    changeStatColors('#F95587');
  }
  if (type === 'rock') {
    changeStatColors('#B6A136');
  }
  if (type === 'ghost') {
    changeStatColors('#735797');
  }
  if (type === 'dragon') {
    changeStatColors('#6F35FC');
  }
  if (type === 'dark') {
    changeStatColors('#705746');
  }
  if (type === 'steel') {
    changeStatColors('#B7B7CE');
  }
  if (type === 'fairy') {
    changeStatColors('#D685AD');
  }
};
