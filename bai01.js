let inPut = [1, 2, 3, 2, 4, 5, 3, 6];
for (let i = 0; i < inPut.length - 1; i++) {
    for (let j = i + 1; j < inPut.length;j++) {
        if (inPut[i] === inPut[j]) {
            inPut.splice(j,1);
        }
    }
}
console.log(inPut);