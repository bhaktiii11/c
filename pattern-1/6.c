#include<stdio.h>
void main(){
    int a;
    for(int i=5 ;i>=1;i--){
        for(int j=1 ; j<=i; j++){

            printf("%d",j%2);
            a++;
        }printf("\n");
    }
}