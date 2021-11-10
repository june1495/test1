import { writeFile } from "fs/promises";
import { result } from "./names.js";
const start = async () => {
  try {
    await writeFile("./mind-grenade", `${result}`);
    console.log("Code working");
  } catch (error) {
    console.log(error);
  }
};
start();
