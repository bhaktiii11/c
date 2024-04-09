#include<stdio.h>
#include<string.h>
fuction(int r){

        if(r<=1){
            return 1;
        }
        else{
            return r*fuction(r-1);
        }
}
main(){

int r;
printf("enter the value=\n");
    scanf("%d",&r);

printf("%d\n",fuction(r));
}