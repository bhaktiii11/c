#include <stdio.h>

int main() {

   int arr[5];

   for(int i = 0 ;i < 5;i++){

       printf("enter the value of :-");
       scanf("%d",&arr[i]);

   }
   for(int i = 0 ;i < 5;i++){
       if(arr[0]>arr[i]){
         arr[0]=arr[i]; 
       }
   }
   printf("%d",arr[0]);

    return 0;
}