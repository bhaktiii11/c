#include <stdio.h>

int main() {
    int year;


    printf("Enter a year: ");
    scanf("%d", &year);

    int isLeapYear = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 1 : 0;

    printf("%d is %s a leap year.\n", year, isLeapYear ? "" : "not");

}