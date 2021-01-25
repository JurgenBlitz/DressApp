// Takes a given array from its component, and returns a random entry from said array
// based on said array's length.
// Ideas: return the namestring/code of the resulting entry directly?
export function getRandomClothing (clothesArray) {
    if (!clothesArray) return null;
    const length = clothesArray.length;
    return clothesArray.indexOf(Math.floor(Math.random() * (length - 1)) + 1);
}