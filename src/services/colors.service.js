import { LIPSTICKS } from './lipsticks.service';

let colorsMap = new Map();
let colors = [];

LIPSTICKS.forEach((lipstick) => {
    const listOfTheColor = colorsMap.get(lipstick.hex) || [];
    listOfTheColor.push(lipstick);
    colorsMap.set(lipstick.hex, listOfTheColor);
});

colors = Array.from(colorsMap.keys());

export { colors, colorsMap };