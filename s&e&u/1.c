#include <stdio.h>
#include <string.h>
struct student{
    int stu_id;
    char stu_name[100];
    int stu_age;
    char stu_course[100];
    char stu_city[100];
    char stu_standard[100];
    char stu_school[100];

}s[100];
int main() {

   int n=3;


   for (int i=0 ; i < n ; i++){
       printf("enter the id : ");
       scanf("%d",&s[i].stu_id);

       printf("enter the name : ");
       scanf("%s",&s[i].stu_name);

       printf("enter the age : ");
       scanf("%d",&s[i].stu_age);

       printf("enter the course : ");
       scanf("%s",&s[i].stu_course);

       printf("enter the city : ");
       scanf("%s",&s[i].stu_city);

       printf("enter the standard : ");
       scanf("%s",&s[i].stu_standard);

       printf("enter the school : ");
       scanf("%s",&s[i].stu_school);
   }

   for (int i = 0; i < n ; i++){
       printf("stu_Id = %d\n stu_name =%s\n stu_age=%d\n stu_course=%s\n stu_city=%s\n stu_standard=%s\n stu_school=%s\n",s[i].stu_id,s[i].stu_name,s[i].stu_age,s[i].stu_course,s[i].stu_city,s[i].stu_standard,s[i].stu_school);
   }

    return 0;
}