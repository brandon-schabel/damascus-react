import { getRandInt } from './getRandInt'

/**
 *
 * @param pre
 * @returns {string}
 */
export const generateKey = pre =>
  `${pre ? pre : getRandInt(0, 200)}_${new Date().getTime()}`
