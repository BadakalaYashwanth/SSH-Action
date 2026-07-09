#include <stdio.h>
#include <stdlib.h>

// Simple C Application
int main() {
    printf("Hello from C!\n");
    printf("This is a deploy-files sample application.\n");

    int numbers[] = {1, 2, 3, 4, 5};
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }

    printf("Sum of numbers: %d\n", sum);
    return 0;
}
