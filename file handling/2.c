#include<stdio.h>
int main(){
    FILE *f;
    char data[100];
    f = fopen ("memo.txt","w");

    if(f==NULL){
        printf("can't open file");
    }
    else{
        printf("enter the massage");
        gets(data);
        fputs(data,f);
    }

    

    
}