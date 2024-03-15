#include <stdio.h>

int main() {
    int a,b;
    printf("enter the value :-");
    scanf("%d",&a);
    printf("enter the value :-");
    scanf("%d",&b);
  
  while(a<=b)
  {
      
      if(a%4==0)
      {
          printf("%d\n",a);
        }
      a++;
  }
   

    return 0;
}