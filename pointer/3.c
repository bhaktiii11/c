#include <stdio.h>

int swap(int *y,int *z){
    int s;
    s =*y;
    *y=*z;
    *z=s;

printf("%d\n%d",*y,*z);
}

int main() {
    int a,b;
    printf("enter the value a:");
    scanf("%d",&a);
     printf("enter the value b:");
    scanf("%d",&b);
    swap(&a,&b);

    return 0;
}