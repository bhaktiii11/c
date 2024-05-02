#include<stdio.h>
int main(){
    int str[1000];
    int length =0;

    printf("Enter a string: ");
    scanf("%s", str);
     while (str[length] != '\0') {
        length++;
    }   

    for (int i = length - 1; i >= 0; i--) {
        printf("%c", str[i]);
    }
    printf("\n");
}