#include <stdio.h>

int main() {
 int arr[5]={5,9,4,7,3};
 int *p;
 
 for(int i=4;i>=0;i--){
     p = &arr[5];
     p = &arr;
     printf("%d,%u\n",p+i,*(p+i));
 }

    return 0;
}