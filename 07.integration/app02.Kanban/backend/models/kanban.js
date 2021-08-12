const util = require('util');
const fs = require('fs');
const path = require('path');
const { query } = require('express');

module.exports = {
    findAllCards: async function() {
        try {
            const readFile = util.promisify(fs.readFile).bind(fs);
            const data = await readFile(path.resolve('.','backend','models','json','data.json'),'utf8');

            return JSON.parse(data);

        } catch(e) {
            console.error(e);
        }
    },
    insertTask: async function() {
        try {
            
        } catch(e) {
            console.error(e);
        } 
    }
}