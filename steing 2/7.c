#include<stdio.h>
main(){
	char f[100];
	char s[100];


	gets(f);
	gets(s);

	if(strcmp(f,s)==0){
		printf("Strings are equal");
	}
	else{
		printf("No, they are not equal");
	}


}