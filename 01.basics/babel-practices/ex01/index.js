const babel = require('@babel/core');

const rr = babel.transform("const fn = () => 1;", {});

console.log(rr);