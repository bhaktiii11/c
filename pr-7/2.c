#include<stdio.h>

void swap(int *x ,int *y,int *z){
    int aa;
    aa = *x;
    *x = *y;
    *y = *z;
    *z = aa;

    printf("%d\n%d\n%d",*x,*y,*z);
}



void main(){

int a,b,c;

printf("enter the value a :");
scanf("%d",&a);
printf("enter the value b :");
scanf("%d",&b);
printf("enter the value c :");
scanf("%d",&c);

swap(&a,&b,&c);


}