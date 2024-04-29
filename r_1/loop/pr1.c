#include<stdio.h>
main(){
    int num,f=1;

    printf("enter your number:");
    scanf("%d",&num);

    for (int i=1; i <=num; i++)
    {
        f*=i;
    }

    printf("factorial of all number:%d",f);

}