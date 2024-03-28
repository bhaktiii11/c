#include <stdio.h>

int main() {
    for(int row=1; row<=5; row++){
        for(int space=2;space<=row;space++){
            printf(" ");
        }
        for(int col=1; col<=4; col++){
            printf(" *",col);
        }printf("\n");
    }
return 0;
}