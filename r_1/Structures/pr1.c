#include <stdio.h>
struct Student
{
    char name[100];
    int marks;
    int roll_number;
} s[100];

main()
{

    int n;
    printf("enter lenth=");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        printf("enter name:");
        scanf("%s", &s[i].name);

        printf("enter marks :");
        scanf("%d", &s[i].marks);

        printf("enter roll_number :");
        scanf("%d", &s[i].roll_number);
    }
    for (int i = 0; i < n; i++)
    {
        printf("name %s\n",s[i].name);
        printf("marks %d\n",s[i].marks);
        printf("roll_number %d\n",s[i].roll_number);
    }
}