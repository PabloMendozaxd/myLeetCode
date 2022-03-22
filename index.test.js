const app = require('./index');

describe('Should test index', () => { 
    test('An object with roman values must exist', () => { 
        expect(app.romanValues).toBeDefined();
     })
 })