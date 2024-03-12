#include<stdio.h>
void main(){
    int age;

    printf("enter age :");
    scanf("%d",&age );


    if (age>=20){
         printf("You can Vote");
       
    }
    else if (age >=18){
        printf("You can also vote.");
    }
    else{
         printf("You cannot vote.");
    }
    
    
}