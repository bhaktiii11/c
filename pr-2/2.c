#include <stdio.h>

int main() {
    int count=11;
    for (int row=1; row<=5;row++){
        for(int col=1;col<=row;col++){
            printf("%d\t",count );
            count++;
        }
        printf("\n");
    }
    return 0;
}