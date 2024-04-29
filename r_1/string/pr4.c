#include<stdio.h>
main(){
    char val[100];
    printf("Enter any string : ");
    scanf("%s",&val);

    for (char i = 0; val[i] != NULL; i++)
    {
        if (val[i]>='a' && val[i]<='z')
        {
            val[i]-=32;
        }
        printf("%c",val[i]);
        
    }
    

}