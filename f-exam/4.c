#include <stdio.h>
    
int main()
{
     int size;
    printf("Enter Array Size : ");
    scanf("%d",&size);
    int arr[size];
    int *p;
    p = &arr;
    for(int i=0; i<size; i++)
    {
        printf("Enter Array Elements : ");
        scanf("%d",&p[i]);
    }


    printf("\nSquare of array elements: \n");
    for ( int i = 0; i < size; i++)
        printf("%d ", ((p+i)) *((p+i)));

    printf("\n");

 return 0;
}