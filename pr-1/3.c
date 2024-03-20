#include <stdio.h>  
int main()  
{  
   int s,sum=0,a,b; 
   printf("enter value of s: ");
   scanf("%d",&s);
   b=s%10;
   while (s >=10)
   {
    s=s/10;
   }
   a=s;
   sum = a+b;
   printf("sum of first and last num =%d",sum);
    
   
}  