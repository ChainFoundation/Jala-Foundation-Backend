import { assert } from "chai";
import getDoctorsOlivos from "./LosOlivos.mjs";
import getDoctorsSanPedro from "./sanPedro.mjs";

moduleSpecifier = dir + "";
async function retrieveDoctors() {
  const time = new Date();
  const hour = time.getHours();
  if (6 > hour > 19) {
    moduleSpecifier = dir + './sanPedro.mjs';
  } else {
    moduleSpecifier = dir + './losOlivos.mjs';
  }

  doctors = moduleSpecifier.getDoctors();

  return doctors;
}
const dir = "./lib";
