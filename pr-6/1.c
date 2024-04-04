#include <stdio.h>
int main(){
    char val[] = "HELLO WORLD";
     printf("HELLO WORLD\n");

    for(int i=0;val[i]!=NULL;i++)
    {
        if(val[i]>='A' && val[i]<='Z')
        {
            val[i] += 32;
        }
        printf("%c",val[i]);
    }
}