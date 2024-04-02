#include <stdio.h>

int main() {
   int sum=0;
   int arr[3][3]={{2,4,1},{3,5,4},{8,2,6}};

   for(int i=0;i<=2;i++){
       for (int j=0;j<=2;j++){
           if(i==j){
               sum +=arr[i][j];
               printf("enter the value : %d\n",arr[i][j]);


       }
     }
    }printf("%d",sum); 
       printf("\n");
   return 0;
}