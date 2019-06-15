let cryobox = [];
let x = 1;
for(let i = 0; i < 9; i++){
    let row = [];
    for(let i2 = 1; i2 <= 9; i2++){
        row.push(x);
        x++;
    }
    cryobox.push(row);
}
let ref = [];
for(let i = 0; i < 3; i++){
    let arr = [1,2,3,4,5,6]
    ref.push(arr)
}
export default {cryobox,ref};