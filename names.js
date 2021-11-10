import faker from "faker";

let arrNames = [];
for (let i = 0; i < 1000; i++) {
  let random = faker.name.findName();
  arrNames.push(random);
}
export let result = arrNames.toString();
