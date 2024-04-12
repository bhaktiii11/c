#include<stdio.h>

void cube(int *num){
    *num = (*num)*(*num)*(*num);
}

void main(){
    int a;
    printf("enter the value :");
    scanf("%d",&a);

    cube(&a);

    printf("%d",a);


}