#include <stdio.h>
int main() {
    
    // task-9
    
    int sum=0;
    char k[100];
    
    printf("Enter value : ");
    scanf("%s",&k);
    
    for(int i=0;k[i];i++){
        sum+=k[i]-'0';
    }
    printf("%d",sum);

}