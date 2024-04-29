#include <stdio.h>

struct Marks
{
    int science;
    int maths;
    int hindi;
    int english;
    int gujarati;
}m[100];

int main()
{
    int stu_mark;
    float total_marks;
    printf("Enter Size : ");
    scanf("%d",&stu_mark);

    for(int i=1; i<=stu_mark; i++)
    {
        printf("\n---Enter %d Student Marks---\n",i);

        printf("Enter Science Marks : ");
        scanf("%d",&m[i].science);

        printf("Enter Maths Marks : ");
        scanf("%d",&m[i].maths);

        printf("Enter Hindi Marks : ");
        scanf("%d",&m[i].hindi);

        printf("Enter English Marks : ");
        scanf("%d",&m[i].english);

        printf("Enter Gujarati Marks : ");
        scanf("%d",&m[i].gujarati);
    }

    for(int i=1; i<=stu_mark; i++)
    {
        printf("\n---%d Student Information---",i);

        total_marks = ((m[i].science + m[i].maths + m[i].hindi + m[i].english + m[i].gujarati) * 100)/500;

        printf("\nAverage Marks is : %0.2f",total_marks);
    }

    return 0;
}