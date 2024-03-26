#include <stdio.h>

int main() 
{
    for(int row=1;row<=5;row++){
        for(int space=row+2;space>=4;space--){
            printf(" ");
        }
        for(int col=5;col>=row;col--){
            printf("%d",col);
        }printf("\n");
    }

return 0;
}