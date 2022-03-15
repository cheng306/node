// import * as fs from 'fs/promises';
const fs = require('fs/promises');
// console.log(fs);

const utils = require('./utils');

fs.appendFile(
    'text.txt', 
    "text", 
    function(){console.log('this'); console.log(this);});

const name = "app_name";
console.log(utils);