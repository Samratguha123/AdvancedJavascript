let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function Splice(index, val, item = 0) {


     if(val===0){
        arr[index]=item;
        return arr;
     }





    if (item !== 0) {
        for (let k = 0; k < arr.length; k++) {
            if (index === k) arr[k] = item;

        }
        var i = index+1;
    }
    else {
        var i = index;
    }




    let n = index + val - 1;

    let j = n + 1
    let temp = val;
    while ((i < arr.length && j < arr.length) && (temp--)) {
        arr[i] = arr[j];
        delete arr[j];
        i++;
        j++;
    }

    while (i < arr.length && temp) {
        delete arr[i];
        temp--;
        i++;
    }
    arr.length = arr.length - val;
    return arr;
}




Splice(6, 0,"samrat");
console.log(arr);





