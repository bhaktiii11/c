#include <stdio.h>
int main(){
    char val[] = "BHAKTI";
     printf("BHAKTI\n");

    for(int i=0;val[i]!=NULL;i++)
    {
        if(val[i]>='A' && val[i]<='Z')
        {
            val[i] += 32;
        }
        printf("%c",val[i]);
    }
}