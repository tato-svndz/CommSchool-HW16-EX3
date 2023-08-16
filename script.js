function checkSpam(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase().includes("viagra", i) || str.toLowerCase().includes('xxx', i)) {
            return true;
        } else {
            return false;
        }
    }
};
let str = prompt('Write a Sentence: ');
alert("isSpam = " + checkSpam(str));