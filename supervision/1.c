#include<stdio.h>
#include<string.h>
 struct book{
    int  book_id,book_publication_year,book_price;
    char  book_title[100],book_author[100],book_genre[100],book_publisher[100];

 }s[100];

 int main()
 {
    int n;
    printf("enter the  number : ");
    scanf("%d",&n);

   for (int i=0 ; i < n ; i++){
       printf("enter the book_id : ");
       scanf("%d",&s[i].book_id);

        printf("enter the book_title : ");
       scanf("%s",&s[i].book_title);

        printf("enter the book_author : ");
       scanf("%s",&s[i].book_author);

        printf("enter the book_genre : ");
       scanf("%s",&s[i].book_genre);

        printf("enter the book_publishe : ");
       scanf("%s",&s[i].book_publisher);

        printf("enter the book_publication_year : ");
       scanf("%d",&s[i].book_publication_year);

        printf("enter the book_price : ");
       scanf("%d",&s[i].book_price);
     }

     for(int i=0 ; i< n ; i++){
        printf("book_id =%d\n book_title =%s\n book_author =%s\n book_genre =%s\n book_publishe =%s\n book_publication_year =%d\n book_price =%d\n",s[i].book_id,s[i].book_title,s[i].book_author,s[i].book_genre,s[i].book_publisher,s[i].book_publication_year,s[i].book_price);
     }
}
