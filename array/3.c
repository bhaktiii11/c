#include <stdio.h>

int main() {

   int arr[5],sum=0,avg;

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

         sum += arr[i];
         avg = sum/5;


   }
    printf("%d\n",avg);

 return 0;
}