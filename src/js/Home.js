import {BoxHomePage} from './Classes/Box.js';
import * as toast from './toaster.js';
import {Spinner} from './spinner.js';
import * as Scripts from "./scripts/food-truck-script.js";

document.addEventListener('DOMContentLoaded', () => {
    // const spinner = new Spinner();
    //const boxOriginales = [];

    console.log("HOME.JS, Start");
    Scripts.InitDatabase();
    console.log("Apres");
})
