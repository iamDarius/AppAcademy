# Split and Join Methods

Use the `string.split` method to turn a string into an array.

Use the ` array.join ` method to convert an array to a string.

## String.split
The `string.split` method is called on a string and accepts a seperator as an argument.

    let sentence = "follow the yellow brick road";
    let words = sentence.split(" ");
    console.log(words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
    console.log(sentence); // 'follow the yellow brick road'

>It's important to note that the original string, rather a new array is returned.