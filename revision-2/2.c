#include<stdio.h>
int main(){
    int num1,num2,num3;

    printf("enter the value :");
    scanf("%d %d %d",&num1 ,&num2, &num3);

    if (num1 >= num2)
    {
      if (num1 >= num3)
      {
         printf("%d is the largest.\n", num1);
      }
      else{
         printf("%d is the largest.\n", num3);
      }
    }
    else{
        if (num2 >= num3)
        {
             printf("%d is the largest.\n", num2);
        }
        else{
             printf("%d is the largest.\n", num3);
        }

    }

}