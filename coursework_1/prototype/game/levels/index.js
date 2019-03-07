/* Modules */
import birds from './birds';
import insects from './insects';
import dinosaurs from './dinosaurs';
import africa from './africa';
import plants from './plants';

/* Require level icon */
export const requireLevelIcon = (name) => {
    switch (name) {
        case 'birds':
            return require('../../assets/images/level-birds.png');
        case 'insects':
            return require('../../assets/images/level-insects.png');
        case 'dinosaurs':
            return require('../../assets/images/level-dinosaurs.png');
        case 'africa':
            return require('../../assets/images/level-africa.png');
        case 'plants':
            return require('../../assets/images/level-plants.png');
        case 'locked':
            return require('../../assets/images/level-locked.png');
        default:
            return null;
    }
}

/* Require question image */
export const requireQuestionImage = (name) => {
    switch (name) {
        case 'white-tailed-eagle':
            return require('../../assets/images/birds-white-tailed-eagle.jpg');
        case 'cormorant':
            return require('../../assets/images/birds-cormorant.jpg');
        case 'shoebill':
            return require('../../assets/images/shoebill.jpg');
        case 'bird-eating-spider':
            return require('../../assets/images/insects-bird-eating-spider.png');
        case 'mystery-birds': 
            return require('../../assets/images/mystery-birds.png');
        default:
            return null;
    }
}

/* Levels */
export const levels = {
    birds,
    insects,
    dinosaurs,
    africa,
    plants
};