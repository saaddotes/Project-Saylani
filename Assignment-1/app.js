function filterOdd(str) {
    let newstr = str[0];
    for (let i = 1; i < str.length - 1; i++) {
        if ((str[i-1] % 2 !== 0) && (str[i] % 2 !== 0)) {
            newstr += '-' + str[i];
        } else {
            newstr += str[i]
        }
    };
    console.log(newstr);
};

let str = '12398768979855';
filterOdd(str);

