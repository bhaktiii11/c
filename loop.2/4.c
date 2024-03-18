#include <stdio.h>

int main()
{
    int f=0 ,s=1,n,ans,i;
    printf("Enter Number:");
    scanf("%d",&n);
    for(i=0; i<=n; i++)
    {
        printf("%d\n",f);
        ans=f+s;
        f=s;
        s=ans;
    }

    return 0;
}