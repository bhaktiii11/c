#include <stdio.h>

int MINIMUM (int *a,int *b){
    if(*a < *b){
        printf("MINIMUM  %d",*a);
    }
    else{
        printf("MINIMUM %d",*b);
    }
}

int main() {
    int a,b;
    printf("enter the value of a :");
    scanf("%d",&a);
     printf("enter the value of b :");
    scanf("%d",&b);

    MINIMUM(&a,&b);

    return 0;
}