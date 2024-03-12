#include<stdio.h>
void main(){
    int n;

    printf("enter number :");
    scanf("%d",&n);

    if(n >0){
        printf("This number is Positive");
    }else if(n<0){
        printf("This number is Negative");
    }else{
        printf("This number is Neutral");
    }
   
    
    
}