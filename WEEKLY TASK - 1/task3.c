#include <stdio.h>
int main() {
    
    // task-3
    
    int a,fact=1;
    
    printf("Enter First value : ");
    scanf("%d",&a);
    
    for(int i=1; i<=a; i++){
        fact*=i;
    }
    
    printf("%d",fact);
    
}