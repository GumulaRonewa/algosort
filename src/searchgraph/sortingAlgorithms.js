
export function insertionSort(arr, n) 
{ 
   const animations =[];
    let i, key, j,l; 

    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        l=i;
        j = i - 1; 
       animations.push([j,l]);
        animations.push([j,l])
        
      
        while (j >= 0 && arr[j] > key)
        {    
            animations.push([j,l,key,arr[j]])
            arr[j + 1] = arr[j]; 
            j = j - 1; 
            l=l-1;
            if(j<0){
              animations.push([j+1,l]);
           animations.push([j+1,l]);
            }
            else{
              animations.push([j,l]);
           animations.push([j,l]);
            }

        } 

    
        arr[j + 1] = key; 
                 animations.push([j+1,l,arr[j+1],key]);

    } 
    return animations;
} 
export function getquickSort(array) {
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function swap(arr,i,j,animations)
{
    var temp = arr[i];
                animations.push([i,j,arr[j],temp])

    arr[i] = arr[j];
    arr[j] = temp;
}
function quickSort(arr,low,high,animations)
{
    if (low < high)
    {
         
        // pi is partitioning index, arr[p]
        // is now at right place
        var pi = partition(arr, low, high,animations);
 
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1,animations);
        quickSort(arr, pi + 1, high,animations);
    }
}
function partition(arr,low,high,animations)
{
     
    // pivot
    var pivot = arr[high];
     
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    var i = (low - 1);
 
    for(let j = low; j <= high - 1; j++)
    {
         
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot)
        {
             

            // Increment index of
            // smaller element
            i=i+1;
            animations.push([i,j]);
            animations.push([i,j]);
            swap(arr, i, j,animations);
        }
    }
                animations.push([i+1,high])
            animations.push([i+1,high])

    swap(arr, i + 1, high,animations);
    return (i + 1);
}
function swapbubbleSort(arr, xp, yp,animations)
{
              animations.push([xp,yp]);
              animations.push([xp,yp]);

    var temp = arr[xp];
                  animations.push([xp,yp, arr[yp],temp]);

    arr[xp] = arr[yp];
    arr[yp] = temp;
}
export function bubbleSort( arr, n)
{
     const animations =[];

var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swapbubbleSort(arr,j,j+1,animations);
         
        }
        else{
          animations.push([j,j+1]);
              animations.push([j,j+1]);
              animations.push([j,j+1,arr[j],arr[j+1]]);
        }
    }
 
}
  return animations;
}

///MergeSort

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}