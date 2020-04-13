export const shuffleChords = (arr) => {

    for (let i = arr.length - 1; i > 0; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.group(arr);
    return arr;
}