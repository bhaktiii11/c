#include <stdio.h>

int main() {

   int arr[5],sum=0,product=1;

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

   }
   for(int i = 0 ;i < 5;i++){
       if(arr[i] %2==0){
        product *= arr[i]; 
       }
   }printf("%d",product);

    return 0;
}