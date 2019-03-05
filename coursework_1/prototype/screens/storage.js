/* Modules */
import { AsyncStorage } from 'react-native';
import initialUserData from '../game/initialUserData';
import { levels } from '../game/levels';

/**
 * Creates new user if new
 * @param {string} username 
 */
const newUser = async (username) => {
    // await AsyncStorage.clear();
    await AsyncStorage.setItem('currentUsername', username);
    const userData = await AsyncStorage.getItem(username);
    if (!userData) {
        initialUserData.username = username;
        await AsyncStorage.setItem(username, JSON.stringify(initialUserData));
        return initialUserData;
    } else {
        return JSON.parse(userData);
    }
}

/**
 * Handles storage for a correct answer
 * @param {string} levelName 
 */
const addCorrectAnswer = async(levelName) => {
    let userData = await getUserData();
    const userProgress = await getUserProgress(levelName);
    const question = getQuestion(levelName, userProgress);
    userData.levels[levelName].progress++;
    userData.score += question.points;
    await AsyncStorage.setItem(userData.username, JSON.stringify(userData));
    return { wonPoints: question.points, newProgress: userProgress + 1 };
}

/**
 * Sets a level to complete for current user
 * @param {string} levelName
 */
const completeLevel = async(levelName) => {
    let userData = await getUserData();
    userData.levels[levelName].complete = true;
    await AsyncStorage.setItem(userData.username, JSON.stringify(userData));
    await checkUnlock();
}

const checkUnlock = async() => {
    let userData = await getUserData();
    if (userData.levels.birds.complete) { userData.levels.dinosaurs.locked = false; }
    if (userData.levels.insects.complete) { userData.levels.africa.locked = false; }
    if (userData.levels.africa.complete) { userData.levels.plants.locked = false; }
    await AsyncStorage.setItem(userData.username, JSON.stringify(userData));
}

/**
 * Returns current user name
 */
const getUsername = async() => {
    const username = await AsyncStorage.getItem('currentUsername');
    return username;
}

/**
 * Returns current user's data
 */
const getUserData = async() => {
    const username = await AsyncStorage.getItem('currentUsername');
    const userData = await AsyncStorage.getItem(username);
    if (userData) {
        return JSON.parse(userData);
    } else {
        console.error('No user ', username);
    }
}

/**
 * Returns the progress of the user in a level
 * @param {string} levelName 
 */
const getUserProgress = async(levelName) => {
    const userData = await getUserData();
    return userData.levels[levelName].progress;
}

/**
 * Find the question for a user in a level
 * @param {string} levelName 
 * @param {number} progress 
 */
const getQuestion = (levelName, progress) => {
    return levels[levelName].questions[progress];
}

/**
 * Returns the level object
 * @param {string} levelName 
 */
const getLevel = (levelName) => {
    return levels[levelName];
}

export default {
    newUser,
    getUserData,
    getUserProgress,
    getQuestion,
    getLevel,
    addCorrectAnswer,
    getUsername,
    completeLevel
};