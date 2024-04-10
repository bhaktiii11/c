#include <stdio.h>

int even(int a){
    int sum,sqr;
    printf("Enter the numbers:-");
    scanf("%d",&a);
    
    for(int i=0;i<=a;i++){
       if(i%2==0){
           printf("%d\n",i);
           sum+=i;

       }
    }
    printf("enter the value\n :",sum);
    sqr=sum*sum;
}


int main() {
    int a;
    printf("%d",even(a));

    return 0;
}