#include<stdio.h>
void main(){

    for(int i=65 ;i<=69;i++){
        for(int j=i ; j>=65; j--){
            printf("%2c",j);

        }printf("\n");
    }
}