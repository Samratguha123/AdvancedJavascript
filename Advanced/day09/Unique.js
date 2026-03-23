//  Write a program to check if all elements in an array are unique. 

let arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4];

let brr=[1,2,3,4,5];

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log('not unique');
                return;

            }
        }
    }

    console.log('unique');
    return;

}

unique(brr);
