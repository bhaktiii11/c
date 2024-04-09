#include <stdio.h>

void divide (int a){
    if(a % 3 == 0 && a % 5 ==0){
        printf("divide number");
    }
    else{
        printf("not divide namber");
    }
}
void main(){
    divide(45);
}