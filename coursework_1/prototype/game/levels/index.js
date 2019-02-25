/* Modules */
import birds from './birds';
import insects from './insects';

/* Require */
export const requireLevelIcon = (name) => {
    switch (name) {
        case 'birds':
            return require('../../assets/images/level-birds.png');
        case 'insects':
            return require('../../assets/images/level-insects.png');
        default:
            return null;
    }
}

/* Levels */
export const levels = {
    birds,
    insects
};