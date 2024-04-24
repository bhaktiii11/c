#include<stdio.h>
 struct house{
 int roomquantity;
 int establishedyear;
 char city[100];
};
 void main(){
      struct house s[100];
    int n;
   

     printf("ENTER THE NUMBERS OF HOUSES :\n");
     scanf("%d",&n);

     for (int i = 0; i < n; i++)
     {
        printf("Enter room quantity :\n");
        scanf("%d",&s[i].roomquantity);

        printf("Enter establishedyear:\n");
        scanf("%d",&s[i].establishedyear);

        printf("Enter AGE :\n");
        scanf("%s",&s[i].city);

       
     }
     for (int i = 0; i < n; i++)
     {
        printf(" ROOM :%d\nYEAR : %d\ncity : %s\n ",s[i].roomquantity,s[i].establishedyear,s[i].city);
     }
     
}