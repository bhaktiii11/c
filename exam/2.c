#include <stdio.h>

void main()
{
    int u;
    float a, t, s;

    printf("Enter your total units: ");
    scanf("%d", &u);


    if(u<= 50)
    {
        a = u * 0.50;
    }
    else if(u <= 150)
    {
        a = 25 + ((u-50) * 0.75);
    }
    else if(u <= 250)
    {
        a = 100 + ((u-150) * 1.20);
    }
    else
    {
        a = 220 + ((u-250) * 1.50);
    }

    s = a * 0.20;
    t = a + s;

    printf("Electricity Bill is.. = Rs. %.2f", t);


}

 