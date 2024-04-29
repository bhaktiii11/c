#include<stdio.h>
main(){
    int table,i_3;
    printf("Enter Ending Point : ");
    scanf("%d",&table);

    for(i_3=1; i_3<=10; i_3++)
    {
        printf("\n%d * %d = %d",table,i_3,table*i_3);
    }
}