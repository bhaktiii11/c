#include <stdio.h>
#include <string.h>
lenth(char n[])
{
    int len;

    len = strlen(n);
    return len;
}

main()
{

    char arr[100];
    scanf("%s", &arr);



    printf(" arr lenth : %d", lenth(arr));
}