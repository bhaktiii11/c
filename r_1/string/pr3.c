#include<stdio.h>
main(){
    char st_1[100],st_2[100];
    int i,j;

    printf("Enter first string = ");
    scanf("%s",&st_1);
    printf("Enter first string = ");
    scanf("%s",&st_2);

    for(i=0; st_1[i];i++);
    for(j=0; st_2[j];j++)
    {
        st_1[i] = st_2[j];
        i++;
    }
    printf("concat =%s",st_1);
}