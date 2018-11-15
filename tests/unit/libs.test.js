const libs = require('../../src/libs');

test ('absolute -should return a positive number if input is positive',() =>{
    // arrange
    const input = 1;
    // action
    const result = libs.absolute(input);
    // Asset
    expect(result).toBe(input);
});

test ('absolute -should return a positive number if input is negative',() =>{
});

test ('absolute -should return 0 if input is 0',() =>{
});
