#include<stdio.h>
int main(){
    FILE *p;
    char data[100];
    p = fopen ("hello.txt","a");

    if(p==NULL){
        printf("can't open file");
    }
    else{
        printf("enter the massage");
        gets(data);
        fputs(data,p);
    }

    

    
}