#include<stdio.h>
main(){
    int size_arr1, size_arr2, arr_1[size_arr1], arr_2[size_arr2];
    printf("Enter First Array Size : ");
    scanf("%d",&size_arr1);
    for(int i=0; i<size_arr1; i++)
    {
        printf("a[%d] = ",i);
        scanf("%d",&arr_1[i]);
    }

    printf("Enter Second Array Size : ");
    scanf("%d",&size_arr2);
    for(int i=0; i<size_arr2; i++)
    {
        printf("a[%d] = ",i);
        scanf("%d",&arr_2[i]);
    }

    int resize;
    int merge_arr[resize];
    for(int i=0; i<size_arr1; i++)
    {
        merge_arr[i] = arr_1[i];
    }
    for(int i=0; i<size_arr2; i++)
    {
        merge_arr[i + size_arr1] = arr_2[i];
        resize++;
    }
    printf("---After Merge Array---");
    for(int i=0; i<size_arr1+size_arr2; i++)
    {
        printf("\na[%d] = %d",i,merge_arr[i]);
    }

}