#include<stdio.h>
void main(){
    int a,b,c,d;
    printf("enter the first value a :- ");
    scanf("%d",&a);
     printf("enter the second value b :- ");
    scanf("%d",&b);
     printf("enter the third value c :- ");
    scanf("%d",&c);
  


    if (a<b)
    {
    if (a<c)
    {
        printf("a is min");
    }
    else{
        printf("c is min");
    }
    
    }else{
    if (b<c)
    {
        printf("b is min");
    }else{
        printf("c is min");
    }
    }
    
    
}