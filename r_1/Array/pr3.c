#include<stdio.h>
main(){
    int size,arr_rev[100];
    printf("Enter Array Size : ");
    scanf("%d",&size);

    for (int i = 0; i < size; i++)
    {
        printf("a[%d] = ",i);
        scanf("%d",&arr_rev[i]);
    }
    printf("\n-----After Reverse-----\n");
    for (int i = size-1; i >= 0; i--)
    {
        printf("\na[%d] = %d",i,arr_rev[i]);
    }
    
    

}