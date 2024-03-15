#include <stdio.h>

int main() {
    int a,i=0;
    printf("enter the value :-");
    scanf("%d",&a);
  
  while(i<=a)
  {
      
      if(i%2==0)
      {
          printf("%d\n",i);
          
          
      }
      
      
      i++;
  }
   

    return 0;
}