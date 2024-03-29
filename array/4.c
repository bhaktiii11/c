#include <stdio.h>

int main() {

   int arr[5],sum=0;

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

   }
   for(int i = 0 ;i < 5;i++){
       if(arr[i] %2!=0){
           printf("%d\n",arr[i]);
       }
   }

return 0;
}