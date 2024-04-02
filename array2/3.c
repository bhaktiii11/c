#include <stdio.h>
main()
{
    int size;
    printf("Enter size of 2d array : ");
    scanf("%d", &size);
    int arr[size][size];
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size; j++){
            printf("Enter number for arr[%d][%d]:", i, j);
            scanf("%d", &arr[i][j]);
        }
    }
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size; j++){
            if (i == 0 || i == size-1 || j == 0 || j == size-1){
                printf("%d ", arr[i][j]);
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}