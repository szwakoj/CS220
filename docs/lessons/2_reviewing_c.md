# C Review

- A general C review
- Compiled languages
- C datatypes, both primitive and composite
- Conditionals and loops
- The C Pre-Processor
- and introducing C++
## Compilation 

Before recalling the C syntax and semantics, we must first remember the domain we are working in and how programs are ran on a computer system. Computers cannot understand human languages without the power and water supply of a medium-sized town, meaning there must be intermediate steps to running our human-readable code on a computer.
### Compilation and Interpretation

The two main methods of getting a computer to run code are **compilation** and **interpretation**. 

**Interpreted languages** like Python and JavaScript are executed line-by-line by an interpreter at runtime. When you run a Python script, the interpreter reads each line, translates it to machine instructions, and executes it immediately. This makes development faster since you can test code quickly, but execution tends to be slower since the machine instructions are not always written in the most efficient manner out-of-the-box.

**Compiled languages**, like C and C++, accomplish this task in a different way. Instead of being executed by and interpreter at runtime, C programs are compiled and converted to low-level machine code before runtime. Essentially, compiled languages are translated into machine code at compile time for the target system to produce an executable that can be ran without recompilation or interpretation. This leads to faster programs and more fine-grained control over what happens during the course of your program

This process involves four primary steps:

1. **Preprocessing**: The C preprocessor (CPP) formats the source code using macros like `#include` or `#define`, applying any user-defined changes before passing to the next step
2. **Compilation**: The compiler translates C source code into assembly language
3. **Assembly**: The assembler then converts the assembly code into machine code, producing object files, `.o` or `.obj`, as a result
4. **Linking**: The linker orders the object files properly and combines them into a single executable program that is ready to run on the target system

The following are the commands to compile a simple C program, using the GNU C Compiler:
```bash
# Compile source.c into an executable named program
gcc source.c -o program
# Run the executable
./program
```
In this simple program, all of the main steps are hidden from the user, however we can use compiler flags to view some of the intermediate files:

- `-E`: Stops after preprocessing stage
- `-S`: Stops compilation after generating assembly code
- `-c`: Stops compilation after generating object files, preventing linking
## Basics 

Now that we have reviewed how to compile and run our programs, let's go over the the fundamental building blocks of C programming.

The following is a standard "Hello World!" program written in C:
```c
#include <stdio.h>

int main(int argc, const char* argv[])
{
	printf("Hello CS240!\n");
	
	return 0;
}
```

1. `#!C #include <stdio.h>` - This is a preprocessor macro to include the `stdio.h` file at the beginning of this source code file.
2. `#!C int main(){}` - The main function, our main entry point into executing code on the computer. The compiler runs this function in the final executable, making it responsible for orchestrating  all other functions.
3. `#!C (int argc, const char* argv[])` - Command line arguments. When you run the program in the command-line, you may optionally give additional parameters to feed into your program, for example: `#!bash ./program argument1 argument2`. `argc` and `argv` are variables that contain information about the command-line arguments. `argc`
	1. `argc` - the number of arguments, including the filename of the executable
		1. In the example above, it would take on the value 3
	2. `argv` - an array of char*'s to the actual string parameters passed
4. `#!C printf("Hello CS240!\n");` - This line represents a statement in C, an individual line of code. All statements in C must end in a semicolon `;`. This specific statement is calling a function from `stdio.h`, `#!C printf();` which allows the programmer to print information to the screen.
5. `#!C return 0;` - The return statement. When we defined `#!C main();`, we put an `#!C int` identifier before the function identifier. This defines the return type that is expected from our function, which is enforced by the compiler. When the return statement is ran the function ends and as will the entire program.  
### Variables and Data Types

Variables in C must be declared with a specific type before use. Unlike dynamically typed languages, C requires you to explicitly state what kind of data each variable will hold.

The following is an example of declaring variables:
```C
#include <stdio.h>

int main(int argc, const char* argv[])
{
	int num_books = 1000;      // Declaring an int type with a starting value
	float average_length;      // Declaring a float type without a starting value
	
	
	return 0;
}
```
#### Basic Data Types

C provides several primitive data types:

- **Integer Types**: `int`, `short`, `long`, `long long`
    - Typically `int` is 4 bytes (32 bits), ranging from -2,147,483,648 to 2,147,483,647
    - Can be modified with `unsigned` for non-negative values only
- **Floating-Point Types**: `float`, `double`
    - `float` is single-precision (4 bytes)
    - `double` is double-precision (8 bytes), preferred for most applications
- **Character Type**: `char`
    - 1 byte, used for characters and small integers
    - Characters are enclosed in single quotes: `'A'`, `'z'`, `'\n'`
- **Boolean Type**: `bool` with `<stdbool.h>`
    - Values are `true` or `false`
Example declarations:
```C
int count = 0;
double pi = 3.14159;
char grade = 'A';
unsigned int positive_only = 42;
```
#### Composite Data Types

Beyond basic types, C allows you to build more complex data structures:

**Arrays**: Contiguous blocks of memory holding multiple elements of the same type
```c
int numbers[5] = {10, 20, 30, 40, 50};
char name[20] = "Alice";  // Strings are char arrays

// Access elements by index (zero-indexed)
int first = numbers[0];  // 10
numbers[2] = 35;         // Modify third element
```
Arrays in C have fixed size and no bounds checking. Accessing an index outside the array's bounds leads to undefined behavior, a common source of bugs.

**Structures**: Group related data of different types
```c
struct Student {
    char name[50];
    int id;
    double gpa;
};

struct Student alice;
alice.id = 12345;
alice.gpa = 3.8;
strcpy(alice.name, "Alice Johnson");
```

**Pointers**: Variables that store memory addresses
```c
int value = 42;
int *ptr = &value;  // ptr stores the address of value

printf("Value: %d\n", *ptr);  // Dereference to get value (42)
*ptr = 100;  // Modify value through pointer
printf("New value: %d\n", value);  // Prints 100
```
Pointers are powerful but dangerous. They enable dynamic memory allocation and efficient data manipulation, but incorrect pointer usage causes crashes, memory leaks, and security vulnerabilities.
### Conditionals

Conditionals allow your program to make decisions based on conditions.

**If-Else Statements**
```c
int score = 85;

if (score >= 90) {
    printf("Grade: A\n");
} else if (score >= 80) {
    printf("Grade: B\n");
} else if (score >= 70) {
    printf("Grade: C\n");
} else {
    printf("Grade: F\n");
}
```

**Switch Statements**: Useful for multiple discrete cases
```c
char operation = '+';
int a = 10, b = 5;

switch (operation) {
    case '+':
        printf("Result: %d\n", a + b);
        break;
    case '-':
        printf("Result: %d\n", a - b);
        break;
    case '*':
        printf("Result: %d\n", a * b);
        break;
    default:
        printf("Unknown operation\n");
}
```
The `break` statement is crucial in switch cases to prevent fall-through to subsequent cases.
### Loops

Loops enable repetition of code blocks.

**For Loops**: Best when the number of iterations is known
```c
// Print numbers 0 through 9
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}

// Iterate through an array
int arr[5] = {2, 4, 6, 8, 10};
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}
```

**While Loops**: Best when the number of iterations is unknown
```c
int count = 0;
while (count < 5) {
    printf("Count: %d\n", count);
    count++;
}
```

**Do-While Loops**: Execute at least once, then check condition
```c
int input;
do {
    printf("Enter a positive number: ");
    scanf("%d", &input);
} while (input <= 0);
```
## The C Pre-Processor (CPP)

The C preprocessor runs before compilation and handles directives that begin with `#`. These directives modify your source code before it's compiled.

**Include Directive**: Imports header files
```c
#include <stdio.h>   // System header (standard library)
#include "myheader.h"  // User-defined header (local file)
```

**Define Directive**: Creates macros and constants
```c
#define PI 3.14159
#define MAX_SIZE 100
#define SQUARE(x) ((x) * (x))

// Usage
double area = PI * SQUARE(radius);
```
Macros are simple text replacements. Notice the parentheses in `SQUARE(x)` to avoid unexpected behavior with operator precedence.

**Conditional Compilation**: Include or exclude code based on conditions
```c
#define DEBUG

#ifdef DEBUG
    printf("Debug: x = %d\n", x);
#endif

#ifndef MAX_VALUE
    #define MAX_VALUE 1000
#endif
```
This is useful for platform-specific code or enabling debug output during development.