#include <stdio.h>

int main() {
    int n,fact=1;
   printf("enter the value :-");
   scanf("%d",&n);
   
   for(int i = 1 ; i<= n ; i++){
       fact *= i;
      
   } printf("%d\n",fact);

    return 0;
}