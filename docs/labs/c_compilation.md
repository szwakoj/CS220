# C Compilation Objects

To go from human-readable C code to a running program on a computer requires a few steps of processing before being converted to the **machine code** that ultimately is what the computer runs on the CPU. 

This lab will use a few `gcc` command flags to extract our those intermediate forms of the program we made. To reiterate the compilation process in the [C review lesson](../lessons/2_reviewing_c.md), there are four main steps in C compilation:
1. **Preprocessing**: The C preprocessor (CPP) formats the source code using macros like `#include` or `#define`, including needed headers and applying any user-defined changes before passing to the next step
2. **Compilation**: The compiler translates C source code into assembly language
3. **Assembly**: The assembler then converts the assembly code into machine code, producing object files, `.o` or `.obj`, as a result
4. **Linking**: The linker orders the object files properly and combines them into a single executable program that is ready to run on the target system

Each one of these steps produces distinct products that we can look closer at to understand the process a bit more. In order to do that, we will need another tool to be added to our system PATHs. `xxd` is a 
