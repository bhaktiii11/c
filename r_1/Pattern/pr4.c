#include <stdio.h> 
  
int main() 
{ 
  
    for (int i = 0; i < 4; i++) { 

        for (int j = 0; j < 2 * (4 - i) - 1; j++) { 
            printf(" "); 
        } 

        for (int k = 0; k < 2 * i + 1; k++) { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
    
    for (int i = 0; i < 4; i++) { 
  
        for (int j = 0; j < 2 * i; j++) { 
            printf(" "); 
        } 

        for (int k = 0; k < 2 * (4 - i) - 1; k++) { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
    return 0; 
}