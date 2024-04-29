#include<stdio.h>
main(){
    int num,i,sum;

    printf("enter your number:");
    scanf("%d",&num);

    for ( i = 1; i<=num; i++)
    {
        sum+=i;
    }
    printf("sum of all number: %d",sum);
}