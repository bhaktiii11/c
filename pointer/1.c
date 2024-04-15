#include <stdio.h>

int MAXIMUM (int *a,int *b){
    if(*a < *b){
        printf("MAXIMUM %d",*b);
    }
    else{
        printf("MAXIMUM %d",*a);
    }
}

int main() {
    int a,b;
    printf("enter the value of a :");
    scanf("%d",&a);
     printf("enter the value of b :");
    scanf("%d",&b);

    MAXIMUM(&a,&b);

    return 0;
}