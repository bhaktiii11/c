#include <stdio.h>

int main() {

   int arr[5];

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

   }
   for(int i = 0 ;i <5;i++){
       printf("%d\n",arr[i]*arr[i]);
   }
    return 0;
}