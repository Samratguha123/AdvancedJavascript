let arr = [1, 2, 3, 4, 50, 90];

//largest element->90


function maxElemet(arr) {
    let max = -1;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
}

console.log(maxElemet(arr));





//smallest element->1;

function smallElement(arr){
    let mini=Infinity;

    for(let i=0;i<arr.length;i++){
        if(mini>arr[i])mini=arr[i];

    }
    return mini;
}

console.log(smallElement(arr));

