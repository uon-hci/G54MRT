/* Modules */
import birds from './birds';
import insects from './insects';
import dinosaurs from './dinosaurs';

/* Require */
export const requireLevelIcon = (name) => {
    switch (name) {
        case 'birds':
            return require('../../assets/images/level-birds.png');
        case 'insects':
            return require('../../assets/images/level-insects.png');
        case 'dinosaurs':
            return require('../../assets/images/level-birds.png');
        case 'locked':
            return require('../../assets/images/level-locked.png');
        default:
            return null;
    }
}

/* Levels */
export const levels = {
    birds,
    insects,
    dinosaurs
};