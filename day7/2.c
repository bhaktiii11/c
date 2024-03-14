#include <stdio.h>
void main()
{
    int a, b;
    printf("Press 1 for English\n");
    printf("Press 2 for Hindi\n");
    printf("Press 3 for Gujarati\n");

    printf("enter your number :-");
    scanf("%d", &a);

    switch (a)
    {
    case 1:
        printf("English");
        printf("Press 1 for Internet Recharge\n");
        printf("Press 2 for Top-up Recharge\n");
        printf("Press 3 for Special Recharge\n");
        printf("enter your number :-");
        scanf("%d", &b);
        switch (b)
        {
        case 1:
            printf("You have successfully done a Internet Recharge.\n");
            break;
        case 2:
            printf("You have successfully done a Top-up Recharge.\n");
            break;
        case 3:
            printf("You have successfully done a Special Recharge.\n");
            break;

        default:
            printf("invelid number");
            break;
        }
        break;

        
    case 2:
        printf("Hindi");
        printf("Internet Recharge ke liye 1 dabaiye\n");
        printf("Top-up Recharge ke liye 2 dabaiye\n");
        printf("Special Recharge ke liye 3 dabaiye\n");
        printf("enter your number :-");
        scanf("%d", &b);
        switch (b)
        {
        case 1:
            printf("apne safaltapurvak Internet Recharge kar liya he a Internet Recharge.\n");
            break;
        case 2:
            printf("apne safaltapurvak Internet Recharge kar liya he a Top-up Recharge.\n");
            break;
        case 3:
            printf("apne safaltapurvak Internet Recharge kar liya he Special Recharge.\n");
            break;

        default:
            printf("invelid number");
            break;
        }
        break;
    case 3:
        printf("Gujarati");
        printf("nternet Recharge mate 1 dabavo\n");
        printf("Top-up Recharge mate 2 dabavo\n");
        printf("Special Recharge mate 3 dabavo\n");
        printf("enter your number :-");
        scanf("%d", &b);
        switch (b)
        {
        case 1:
            printf("Tame safaltapurvak nternet Recharge karyu chhe \n");
            break;
        case 2:
            printf("Tame safaltapurvak Top-upl Recharge karyu chhe.\n");
            break;
        case 3:
            printf("Tame safaltapurvak Special Recharge karyu chhe.\n");
            break;

        default:
            printf("invelid number");
            break;
        }
        break;
    default:
        printf("NOT available");
    }
}