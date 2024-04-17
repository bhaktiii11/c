#include<stdio.h>
#include<string.h>
 struct book{
    int  car_id,car_year;
    float car_mileage,car_price;
    char  car_company[100],car_model[100], car_color[100],book_publisher[100];

 }s[100];

 int main()
 {
    int n;
    printf("enter the  number : ");
    scanf("%d",&n);

   for (int i=0 ; i < n ; i++){
       printf("enter the car_id : ");
       scanf("%d",&s[i].car_id);

        printf("enter the car_company : ");
       scanf("%s",&s[i].car_company);

        printf("enter the car_modelr : ");
       scanf("%s",&s[i].car_model);

        printf("enter the car_year : ");
       scanf("%d",&s[i].car_year);

        printf("enter the car_color : ");
       scanf("%s",&s[i].car_color);

        printf("enter the car_price : ");
       scanf("%f",&s[i].car_price);

        printf("enter the car_mileage : ");
       scanf("%f",&s[i].car_mileage);
     }

     for(int i=0 ; i< n ; i++){
        printf("car_id =%d\n car_company =%s\n car_model =%s\n car_year =%d\n car_color =%s\n car_price =%f\n  car_mileage =%f\n",s[i].car_id,s[i].car_company,s[i].car_model,s[i].car_year,s[i].car_color,s[i].car_price,s[i].car_mileage);
     }
}

