#include <stdio.h>
int main() {
    
    // task-10
    
    int count=0;
    char k[100];
    
    printf("Enter value : ");
    scanf("%s",&k);
    
    for(int i=0;k[i];i++){
       count +=i;
    }
    printf ("reverse number is :");
    for(int i=count-1;k[i]>=1;i--){
         printf("%c",k[i]);
    }
    
}