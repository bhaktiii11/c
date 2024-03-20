#include <stdio.h>  
int main()  
{  
   int n;  
   int count=0;  
   printf("Enter a number");  
   scanf("%d",&n);  
   while(n!=0)  
   {  
       n=n/10;  
    count++;    
   }  
     
   printf("This is count %d \n",count);  
    
}  