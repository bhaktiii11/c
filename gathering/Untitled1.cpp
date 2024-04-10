#include<stdio.h>

 rectangle(int a,int b){
    int area;

    printf("enter value of rectangle height:");
    scanf("%d",&a);
    printf("enter value of rectangle width:");
    scanf("%d"&b);

    if(a>0 && b>0){
        printf("rectangle height %d\n",a);
        printf("rectangle width %d\n",b);
        area=a*b;
    }
    else{
        printf("invalid");
    }
    return(area);
 }
 main(){
    int h,w;
    printf("area of rectangle %d",rectangle(h,w));
 }
    
 
