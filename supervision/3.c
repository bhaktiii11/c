#include <stdio.h>


enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

int main() {

    printf("Index value of weekdays:\n");
    printf("Monday: %d\n", Monday);
    printf("Tuesday: %d\n", Tuesday);
    printf("Wednesday: %d\n", Wednesday);
    printf("Thursday: %d\n", Thursday);
    printf("Friday: %d\n", Friday);
     printf("Thursday: %d\n", Saturday);
    printf("Friday: %d\n", Sunday);

    return 0;
}