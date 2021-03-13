import { LIPSTICKS } from './lipsticks.service';

let brandsMap = new Map();
let brands = [];

LIPSTICKS.forEach((lipstick) => {
    const listOfTheBrand = brandsMap.get(lipstick.brand) || [];
    listOfTheBrand.push(lipstick);
    brandsMap.set(lipstick.brand, listOfTheBrand);
});

brands = Array.from(brandsMap.keys());

export { brands, brandsMap };