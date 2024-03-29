#include <stdio.h>

int main() {

   int arr[5],sum=0;

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

         sum += arr[i];

   }
    printf("%d\n",sum);
    return 0;
}