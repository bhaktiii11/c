#include <stdio.h>
int main(){
   char val[] = "HelLO worLD";
    
    int i;
    for( i=0; val[i] != NULL; i++){
        if(val[i] >= 'A' && val[i] <= 'Z'){
            val[i] += 32;
        }
        
    else if(val[i] >= 'a' && val[i] <= 'z'){
            val[i] -= 32;
        }
        
         printf("%c",val[i]);
         
    }
}