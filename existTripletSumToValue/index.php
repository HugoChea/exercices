<?php
// PHP program to find a triplet
 
// returns true if there is 
// triplet with sum equal to
// 'sum' present in A[]. Also,
// prints the triplet
function find3Numbers($A, $arr_size, $sum)
{
    /* Sort the elements */
    sort($A);
 
    /* Now fix the first element 
    one by one and find the
    other two elements */
    for ($i = 0; $i < $arr_size - 2; $i++) 
    {
 
        // To find the other two elements, 
        // start two index variables from 
        // two corners of the array and 
        // move them toward each other
        $l = $i + 1; // index of the first element 
                     // in the remaining elements
 
        // index of the last element
        $r = $arr_size - 1; 
        while ($l < $r) 
        {
            if ($A[$i] + $A[$l] + 
                $A[$r] == $sum)
            {
                echo "Triplet is ", $A[$i], " ",
                                    $A[$l], " ", 
                                    $A[$r], "\n";
                return true;
            }
            else if ($A[$i] + $A[$l] +
                     $A[$r] < $sum)
                $l++;
            else // A[i] + A[l] + A[r] > sum
                $r--;
        }
    }
 
    // If we reach here, then
    // no triplet was found
    return false;
}
 
// Driver Code
$A = array (1, 4, 45, 6, 10, 8);
$sum = 22;
$arr_size = sizeof($A);
 
find3Numbers($A, $arr_size, $sum);
 
// This code is contributed by ajit
