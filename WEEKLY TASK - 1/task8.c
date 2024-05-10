#include <stdio.h>
int main() {
    
    // task-8
    
    int a,first=0,second=1,ans;
    
    printf("Enter value : ");
    scanf("%d",&a);
    
    for(int i=0;i<=a;i++){
        printf("%d\t",first);
        ans=first+second;
        first=second;
        second=ans;
    }
    
}