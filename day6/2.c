#include<stdio.h>
void main(){
    int a,b,c,d;
    printf("enter the first value a :- ");
    scanf("%d",&a);
     printf("enter the second value b :- ");
    scanf("%d",&b);
     printf("enter the third value c :- ");
    scanf("%d",&c);
    printf("enter the fourth value d :- ");
    scanf("%d",&d);
  



    
  


    if (a>b)
    {
        if (a>c)
        {
            if (a>d)
            {
                printf("a max");
            }
            else{
                printf("d max");
            }
            
        }
        
        else{
            printf("c max");
        }
        
    }
    
    
    else if(b>c){
        if(b>d)
        {
            printf("b max");
        }
    }
        
        else if(c>d){
                printf("c max");
            }
            
        else{
            printf("d max");
             
        }
        
    
    




    // if (a>b)
    // {
    //     if (a>c)
    //     {
    //         if (a>d)
    //         {
    //             printf("a max");
    //         }
    //         else{
    //             printf("d max");
    //         }
            
    //     }
    //     else{
    //         if (c>d)
    //         {
    //             printf("c max");
    //         }
    //         else{
    //             printf("d max");
    //         }
            
    //     }
        
    // }
    // else{
    //     if (b>c)
    //     {
    //         if (b>d)
    //         {
    //             printf("b max");
    //         }
    //         else{
    //             printf("d max");
    //         }

    //     }
    //     else{
    //         if (c>d)
    //         {
    //             printf("c max");
    //         }
    //         else{
    //             printf("d max");
    //         }
            
    //     }
        
    // }
    




}