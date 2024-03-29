#include <stdio.h>

int main() {

   int arr[5],max=0;

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

   }
   for(int i = 0 ;i < 5;i++){
       if(arr[i] > max){
        max= arr[i]; 
       }
   }printf("%d",max);

    return 0;
}