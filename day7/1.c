#include<stdio.h>
void main(){
    int a,b,c;
    printf("enter the value a :-");
    scanf("%d",&a);
     printf("enter the value b :-");
    scanf("%d",&b);
     printf("enter the value c :-");
    scanf("%d",&c);

    // (condition) ? :

    (a<b) ? (a<c)? printf("A is minimum"): printf("C is minimum"):
    (b<c) ? printf("b is minimum"): printf("c is minimum");
    
}