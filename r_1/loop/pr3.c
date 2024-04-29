#include <stdio.h>
int main() {
    int num,i, p = 1;

    printf("Enter a number: ");
    scanf("%d", &num);

    do {
        if (num % 2 == 0) {
            p = 0;
            break;
        }
        i++;
    } while (i * i <= num);

    if (p && num > 1) {
        printf("%d is a prime number.\n", num);
    } else {
        printf("%d is not a prime number.\n", num);
    }

    return 0;
}