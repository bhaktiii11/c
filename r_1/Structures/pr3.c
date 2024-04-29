#include <stdio.h>

struct Date {
    int day;
    int month;
    int year;
};

int main() {
    struct Date date1, date2;

    printf("Enter first date (day month year): ");
    scanf("%d %d %d", &date1.day, &date1.month, &date1.year);

    printf("Enter second date (day month year): ");
    scanf("%d %d %d", &date2.day, &date2.month, &date2.year);

    if (date1.year < date2.year || date1.month < date2.month || date1.day < date2.day)
    {
        printf("First date comes first.\n");
    } 
    else if (date1.year == date2.year && date1.month == date2.month && date1.day == date2.day)
    {
        printf("Both dates are the same.\n");
    } 
    else
    {
        printf("Second date comes first.\n");
    }

    return 0;
}