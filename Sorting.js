$(document).ready(function () {
    console.log("Sorting ready!");

    function bubbleSort(array) {

        if (array.length == 1)
            return array;

        for (var i = 0; i < array.length; i++) {

            for (var j = 0; j < array.length - 1; j++) {

                if (array[j + 1] < array[j]) {
                    var temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
        }

        return array;

    }


    function selectionSort(array) {

        if (array.length == 1)
            return array;

        var highestNumb = -1;
        for (var i = 0; i < array.length; i++) {
            highestNumb = -1;
            for (var j = 0; j < array.length - i; j++) {
                if (highestNumb <= array[j]) {
                    highestNumb = array[j];
                } else if (highestNumb > array[j]) {
                    array[j - 1] = array[j];
                    array[j] = highestNumb;
                }
            }
        }

        return array;

    }

    function insertionSort(array) {
        var temp = -1;
        var key = array[0];
        for (var i = 1; i < array.length; i++) {

            key = array[i];

            for (var j = i - 1; j >= 0; j--) {
                if (key < array[j]) {
                    array[j + 1] = array[j];

                } else {
                    break;
                }
            }

            array[j + 1] = key;

        }

        return array;

    }

    function mergeSort(array) {

        if (array.length == 1) {
            return array;
        }

        var middleIndex = Math.floor(array.length / 2);
        var left = array.slice(0, middleIndex);
        var right = array.slice(middleIndex, array.length);

        return merge(
            mergeSort(left),
            mergeSort(right)
        )

    }

    function merge(left, right) {
        if (left.length == 1 && right.length == 1) {
            if (left[0] > right[0]) {
                return [right[0], left[0]];
            } else {
                return [left[0], right[0]];
            }
        } else {
            var returnSortArray = [];
            var leftIndex = 0;
            var rightIndex = 0;
            for (var i = 0; i < (left.length + right.length); i++) {

                if (rightIndex >= right.length || left[leftIndex] < right[rightIndex]) {
                    returnSortArray.push(left[leftIndex]);
                    leftIndex++;
                } else if (leftIndex >= left.length || left[leftIndex] >= right[rightIndex]) {
                    returnSortArray.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            return returnSortArray;
        }
    }

    /*function quickSort(left, right) {

        if (left < right) {
            var pivot = quickSortArray[right];
            var pivotIndex = right;

            var leftCounter = left;
            var rightCounter = pivotIndex - 1;

            while (true) {
                if (quickSortArray[leftCounter] > pivot) {
                    // LEFT ELEMENT > PIVOT
                    while (true) {

                        if (rightCounter <= leftCounter) {
                            //CROSSED - SWAP PIVOTS
                            var temp = quickSortArray[pivotIndex];
                            quickSortArray[pivotIndex] = array[rightCounter];
                            quickSortArray[rightCounter] = temp;
                            quickSort(left, rightCounter);
                            quickSort(rightCounter + 1, right);
                            return;

                        } else if (quickSortArray[rightCounter] <= pivot) {
                            // RIGHT ELEMENT <= PIVOT

                            // SWAP 
                            var temp = quickSortArray[leftCounter];
                            quickSortArray[leftCounter] = array[rightCounter];
                            quickSortArray[rightCounter] = temp;

                            // RESET LEFT
                            leftCounter = 0;
                            rightCounter = pivotIndex - 1;

                            break;
                        }
                        rightCounter--;
                    }
                }
                leftCounter++;
            }
        }

        //return array;

    }*/

    //Select first and last index as 2nd and 3rd parameters

    var array = [1, 8, 3, 4, 6, 9, 7, 2, 1, 5, 6];
    var answerBubbleSort = JSON.stringify(bubbleSort(array));
    array = [1, 8, 3, 4, 6, 9, 7, 2, 1, 5, 6];
    var answerSelectionSort = JSON.stringify(selectionSort(array));
    array = [1, 8, 3, 4, 6, 9, 7, 2, 1, 5, 6];
    var answerInsertionSort = JSON.stringify(insertionSort(array));
    array = [1, 8, 3, 4, 6, 9, 7, 2, 1, 5, 6];
    var answerMergeSort = JSON.stringify(mergeSort(array));
    var quickSortArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    //var answerQuickSort = JSON.stringify(quickSort(0, quickSortArray.length - 1));

    $('#bubbleSortDiv').text('BUBBLE SORT [1,8,3,4,6,9,7,2,1,5,6]: ' + answerBubbleSort);

    $('#selectionSortDiv').text('SELECTION SORT [1,8,3,4,6,9,7,2,1,5,6]: ' + answerSelectionSort);

    $('#insertionSortDiv').text('INSERTION SORT [1,8,3,4,6,9,7,2,1,5,6]: ' + answerInsertionSort);

    $('#mergeSortDiv').text('MERGE SORT [1,8,3,4,6,9,7,2,1,5,6]: ' + answerMergeSort);

    //$('#quickSortDiv').text('QUICK SORT [99,44,6,2,1,5,63,87,283,4,0]: ' + answerQuickSort);

});