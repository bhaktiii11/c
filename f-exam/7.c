#include <stdio.h>

int main() {
    int rows = 5;
    int number = 10;
    
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", number * number);
        }
        printf("\n");
        number -= 1;
    }
    
    return 0;
}