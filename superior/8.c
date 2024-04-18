#include <stdio.h>

int main() {
    int array1[100], array2[100], intersect[100];
    int n1, n2, intersectSize = 0;

    printf("Enter the number of elements in the first array: ");
    scanf("%d", &n1);

    printf("Enter %d elements for the first array:\n", n1);
    for (int i = 0; i < n1; i++) {
        scanf("%d", &array1[i]);
    }

    printf("Enter the number of elements in the second array: ");
    scanf("%d", &n2);

    printf("Enter %d elements for the second array:\n", n2);
    for (int i = 0; i < n2; i++) {
        scanf("%d", &array2[i]);
    }


    for (int i = 0; i < n1; i++) {
        for (int j = 0; j < n2; j++) {
            if (array1[i] == array2[j]) {
                // If element is found in both arrays
                intersect[intersectSize++] = array1[i];
                break; // Move to the next element in array1
            }
        }
    }


    if (intersectSize == 0) {
        printf("There is no intersection between the arrays.\n");
    } else {
        printf("Intersection of the two arrays: ");
        for (int i = 0; i < intersectSize; i++) {
            printf("%d ", intersect[i]);
        }
        printf("\n");
    }

    return 0;
}