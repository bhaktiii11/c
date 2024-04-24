#include <stdio.h>

void main() {
    int N;


    printf("Enter the number of employees: ");
    scanf("%d", &N);

    for (int i = 0; i < N; ++i) {
        char name[100];
        char work[100];


        printf("Enter name for employe %d: ", i + 1);
        scanf("%s", name);


        printf("Enter work for employe %d: ", i + 1);
        scanf("%s", work);

}


} 