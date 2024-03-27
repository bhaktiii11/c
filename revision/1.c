#include<stdio.h>
main(){
    int num, prime = 1;
    printf("Enter Prime Number : ");
    scanf("%d",&num);
    
    if(num<=1 || (num>2 && num%2==0)) {
        prime = 0;
    } 
    else{
        for(int i=3; i*i<=num; i+=2) {
            if(num%i==0) {
                prime = 0;
                break;
            }
        }
    }

    printf("%d is %s a prime number.\n", num, prime ? "" : "not");
}