
var num = 99;

while (num >= 1) {
    console.log(num + (num === 1 ? ' bottle' : ' bottles') + ' of juice on the wall! ' + num + (num === 1 ? ' bottle' : ' bottles') + ' of juice! Take one down, pass it around... ' + (num - 1) + (num - 1 === 1 ? ' bottle' : ' bottles') + ' of juice on the wall!');
    num = num - 1; // decrement num or ( num -- )
}