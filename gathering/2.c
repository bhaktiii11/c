#include <stdio.h>

float calculateArea(float l, float w) {
    
    return l * w;  
}

int main() {
    float l, w, area;

    printf("Enter the length: ");
    scanf("%f", &l);
    printf("Enter the width: ");
    scanf("%f", &w);

    calculateArea(l, w);

    printf("The area of the rectangle is: %.2f\n", calculateArea(l, w));

}