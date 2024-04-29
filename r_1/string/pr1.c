#include <stdio.h>

int main()
{
    char str[100];  
    int vowels = 0;
    
    printf("Enter the string: ");
    scanf("%[^\n]s",&str);

    for(int i = 0; str[i]; i++)  
    {
        if(str[i]=='a'|| str[i]=='e'||str[i]=='i'||
           str[i]=='o'|| str[i]=='u'||str[i]=='A'||
           str[i]=='E'||str[i]=='I'||str[i]=='O' ||str[i]=='U')
        {
            vowels++;
        }
    }
    printf("Total Number of Vowels in String : %d",vowels);


    return 0;
}