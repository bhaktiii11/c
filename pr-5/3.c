#include <stdio.h>
main(){int arr[3][3];
    
     for (int i = 0; i <= 2; i++)
    {
        for (int j = 0; j <= 2; j++)
        {
            printf("enter a value : ");
            scanf("%d",&arr[i][j]);
        }
        printf("\n");
    }
    for (int i = 0; i <= 2; i++)
    {
        for (int j = 0; j <= 2; j++)
        {
            printf("%d",arr[i][j]);
        }
        printf("\n");
    }
   printf("The transpose matrix of an array:\n");
    for(int i=0; i<3;i++){

     for (int j = 0; j < 3; j++)
    {
     printf("%d",arr[j][i]);

    }
    printf("\n");
    }
}