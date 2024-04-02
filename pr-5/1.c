#include <stdio.h>
main(){

   int arr[5];

    for (int i = 0; i < 5; i++)
    {
            printf("enter a value : ");
            scanf("%d",&arr[i]);
    }
    
    for (int i = 0; i < 5; i++)
    {
        if (arr[i] < 0)
        {
            printf("%d\n",arr[i]);
        }
        
    }
}
