#include<stdio.h>
main(){
     int arr[100], size ,sum=0;
     printf("Enter a size of array : ");
     scanf("%d",&size);

     for (int i = 0; i < size; i++)
     {
        printf("Enter array element : ");
        scanf("%d",&arr[i]);
     }
     for (int i = 0; i < size; i++)
     {
        sum = sum + arr[i];
     }
     printf("Sum of array : %d",sum);
     
     
}