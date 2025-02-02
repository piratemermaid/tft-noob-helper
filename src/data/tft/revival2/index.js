import CHAMPIONS from './revival2Champions';
import TRAITS from './revival2Traits';

const getImgUrl = (name) => {
  return `https://www.mobafire.com/images/tft/set4-5/champion/icon/${name
    .toLowerCase()
    .replaceAll(' ', '-')}-39x.png`;
};

export { CHAMPIONS, TRAITS, getImgUrl };
