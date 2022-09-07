/* 
********* Initials *********

Write a function initials(name) that accepts a full name as an arg. 
The function should return the initials for that name.

*/

// your code here
function initials(name) {
    let initials = [];
    
    // converts name arg into array 
    const arr = name.split(' ');
    
    // iterates through each array element
    arr.forEach(word => {
        
        // grabs the first letter of the word and uppercases it
        const firstLetter = word.charAt(0).toUpperCase();
        
        // adds the letter to the array
        initials.push(firstLetter);
    })
    
    // converts the array to a str and returns it
    return initials.join('');
}

