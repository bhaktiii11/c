#include <stdio.h>

void table(){
    int j=5;
    for(int i=1 ;i<=10;i++){
      printf("%d * %d =%d\n",j,i,j*i);
    }
}

int main() {
  table();
    return 0;
}