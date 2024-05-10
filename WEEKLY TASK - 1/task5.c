#include <stdio.h>
int main() {

    // task-5
    
    int a,b,c;
    
    printf("enter value 1 :");
    scanf("%d",&a);
    
    printf("enter value 2 :");
    scanf("%d",&b);
    
    printf("enter value 3 :");
    scanf("%d",&c);
    
    if(a>b && a>c){
        printf("A is large...");
    }
    else if( b>a && b>c){
        printf("B is large...");
    }
    else{
        printf("C is large...");
    }
   
}