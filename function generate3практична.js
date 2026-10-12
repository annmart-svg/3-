function generateArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function printArray(arr) {
    const formatted = arr.map((value, index) => `[cell - ${index},value - ${value}]`).join(',');
    console.log(`{${formatted}}`);
}

function bubbleSort(array, isAscending) {
    const arr = [...array]; 
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const condition = isAscending ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
            if (condition) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function insertionSort(array, isAscending) {
    const arr = [...array];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && (isAscending ? arr[j] > key : arr[j] < key)) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function selectionSort(array, isAscending) {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let targetIndex = i;

        for (let j = i + 1; j < n; j++) {
            const condition = isAscending ? arr[j] < arr[targetIndex] : arr[j] > arr[targetIndex];
            if (condition) {
                targetIndex = j;
            }
        }

        if (targetIndex !== i) {
            [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
        }
    }
    return arr;
}

console.log("=== Практична робота №3: Прості алгоритми сортування (JavaScript) ===\n");

const originalArray = generateArray(8, 1, 20);

console.log("Згенерований початковий масив:");
printArray(originalArray);
console.log("");

console.log("--- Bubble Sort ---");
console.log("За зростанням (true):");
printArray(bubbleSort(originalArray, true));
console.log("За спаданням (false):");
printArray(bubbleSort(originalArray, false));
console.log("");

console.log("--- Insertion Sort ---");
console.log("За зростанням (true):");
printArray(insertionSort(originalArray, true));
console.log("За спаданням (false):");
printArray(insertionSort(originalArray, false));
console.log("");

console.log("--- Selection Sort ---");
console.log("За зростанням (true):");
printArray(selectionSort(originalArray, true));
console.log("За спаданням (false):");
printArray(selectionSort(originalArray, false));