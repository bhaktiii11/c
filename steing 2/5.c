#include<stdio.h>
main(){
	char fullname[100];
	char firstname[100];
	char lastname[100];

	gets(firstname);
	gets(lastname);

	strcpy(fullname,strcat(firstname,lastname));

	puts(fullname);
}