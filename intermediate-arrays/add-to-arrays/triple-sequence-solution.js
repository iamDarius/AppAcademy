/* 

********** Triple Sequence *********

Write a function tripleSequence that takes in two numbers, start and length. 
The function should return an array representing a sequence that begins with start and 
is length elements long. In the sequence, every element should be 3 times the previous 
element. 
Assume that the length is at least 1.

*/

function tripleSequence(start, length) {
    let seq = [start];
    for (let i = seq.length; i < length; i++) {
        seq.push(seq[seq.length - 1] * 3);
    }
    return seq;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]