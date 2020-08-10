let s1 = "aabcc";
let s2 = "adcaa";
// let dem =0;
let kiTuChung = [];
for (let i = 0; i < s1.length; i++) {
    let dem =0
    for (let j = 0; j < s2.length; j++) {
        if(i === s1.indexOf(s1[i],dem) ){
            dem ++;
            kiTuChung.push(`${s1[i]}`);
            
        }
    }
}
console.log(kiTuChung);