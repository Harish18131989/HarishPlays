import { readExcel } from "../utility/excelutility.js";

const data = readExcel(
    "./testdata/loginData.xlsx",
    "Login"
);

console.log(data);