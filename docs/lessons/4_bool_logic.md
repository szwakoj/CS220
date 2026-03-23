# Boolean Logic and Bitwise Operations

When first learning about programming you learned about boolean expressions used to control conditional statements. Boolean, referring to math dealing in values of **True** or **False**, maps to binary directly just over the entire bit length. Here, we will review the basic boolean operations and how we use them in programming. Finally, we will see how they are applied to each bit to give us how to apply them in our code. 

In this lesson, we will cover:

- Basic Boolean Operators
- Truth Tables
- Boolean Expressions
- Bitwise Operations


## Boolean Operations

The word **Boolean** refers to anything that relates to the mathematics developed by George Boole that concerned itself with two values. These two values are often represented by the words `true` and `false`, as well as the numbers 1 and 0. It was developed as a means of quantifying logic mathematically, since a hypothesis is either true or false to reality. 

As programmers, we mostly use it to control the flow of a program using conditional statements like `if(condition)` and `while(condition)` to execute select pieces of code based on whether the condition is evaluated to `true` or `false`:

```c
if (input_temp < 32.0) {
	printf("It is below freezing!\n");
} else {
	printf("It is above freezing!\n");
}
```

Here, we use the "less than" symbol `<` as a relational operator to output a boolean value (`true` or `false`) in order to control the flow of the program. The relational operators in C are as follows:

- `==` - is equal to?
- `!=` - is not equal to?
- `>` - is greater than?
- `<` - is less than?
- `>=` - is greater than or equal to?
- `<=` - is less than or equal to?

Each compares the two values and outputs a `1` for `true` or `0` for `false`. 

These give us a boolean value to base a condition on, however we can also extend these with logical operators to do things under very specific conditions.

These are the main **boolean logical operators/functions** with their C counterparts:

- NOT a , `!a` - Inverts a boolean value
	- Mathematically represented as $\lnot{a}$   
- a AND b, `a && b` - Returns `true` if both values are `true`, `false` otherwise
	- Mathematically represented as $a \land b$    
- a OR b, `a || b` - Returns `true` if either or both values are `true`, `false` otherwise
	- Mathematically represented as $a \lor b$    
- a XOR b - Returns `true` if either a or b is exclusively `true`, `false` otherwise
	- XOR is only in C via the bitwise manipulation, which we cover later in this lesson
	- Mathematically represented as $a \oplus b$   

There are also these secondary boolean logical operators/functions, they do not have C operators not mathematical notations as they are compositions of the primary functions:

- NAND: Inverse of AND
	- NOT(a AND b) == a NAND b
- NOR: Inverse of OR
	-  NOT(a OR b) == a NOR b
- NXOR: Inverse of XOR
	- NOT(a XOR b) == a NXOR b


### Truth Tables
To better show the nature of these operations and boolean expressions generally, truth tables are used as a tool to show every possible input combination and every output for a given expression. Here are the basic operators' truth tables for sake of reference:

**NOT** 

| $a$ | $\lnot{a}$ |
| --- | ---------- |
| 0   | 1          |
| 1   | 0          |

**AND**

| $a$ | $b$ | $a \land b$ |
| --- | --- | ----------- |
| 0   | 0   | 0           |
| 0   | 1   | 0           |
| 1   | 0   | 0           |
| 1   | 1   | 1           |

**OR**

| $a$ | $b$ | $a \lor b$ |
| --- | --- | ---------- |
| 0   | 0   | 0          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 1          |

**XOR**

| $a$ | $b$ | $a \oplus b$ |
| --- | --- | ------------ |
| 0   | 0   | 0            |
| 0   | 1   | 1            |
| 1   | 0   | 1            |
| 1   | 1   | 0            |

### Boolean Expression

A **boolean expression** is any number of boolean operators and inputs that evaluates to `true` or `false`. For example, this is a boolean expression for if a car should start:

- $k$ = key is in ignition
- $b$ = break
- $p$ = car is in park
- $f$ = is a fault detected
- $g(k,b,p,f) = k \land (b \lor p) \land \lnot f$

| $k$ | $b$ | $p$ | $f$ | $g()$ |
| --- | --- | --- | --- | ----- |
| 0   | 0   | 0   | 0   | 0     |
| 0   | 0   | 0   | 1   | 0     |
| 0   | 0   | 1   | 0   | 0     |
| 0   | 0   | 1   | 1   | 0     |
| 0   | 1   | 0   | 0   | 0     |
| 0   | 1   | 0   | 1   | 0     |
| 0   | 1   | 1   | 0   | 0     |
| 0   | 1   | 1   | 1   | 0     |
| 1   | 0   | 0   | 0   | 0     |
| 1   | 0   | 0   | 1   | 0     |
| 1   | 0   | 1   | 0   | 1     |
| 1   | 0   | 1   | 1   | 0     |
| 1   | 1   | 0   | 0   | 1     |
| 1   | 1   | 0   | 1   | 0     |
| 1   | 1   | 1   | 0   | 1     |
| 1   | 1   | 1   | 1   | 0     |

We will not be doing many boolean expressions or boolean algebra, rather we will be applying these to digital signals in a computer via **logical gates** in a later lesson.
## Bitwise Operations 

Now that we know that numbers can be represented as binary digits, the deep connection of boolean logic to all of computing should become even more apparent. However, by themselves the boolean operators and functions operate only on two boolean values as inputs, binary numbers are strings of bits that are contained together. We can apply the boolean operators if we treat each bit of a binary number as a individual boolean value:

$237_{10} = 11101101_2$

| 1    | 1    | 1    | 0     | 1    | 1    | 0     | 1    |
| ---- | ---- | ---- | ----- | ---- | ---- | ----- | ---- |
| true | true | true | false | true | true | false | true |

$183_{10} = 10110111_2$

| 1    | 0     | 1    | 1    | 0     | 1    | 1    | 1    |
| ---- | ----- | ---- | ---- | ----- | ---- | ---- | ---- |
| true | false | true | true | false | true | true | true |

And then apply the boolean operator across each one lined up with their LSPs. for example the AND operator applied **bitwise**:

| 1              | 1              | 1              | 0              | 1              | 1              | 0              | 1              |
| -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
| AND,$\land$,&& | AND,$\land$,&& | AND,$\land$,&& | AND,$\land$,&& | AND,$\land$,&& | AND,$\land$,&& | AND,$\land$,&& | AND,$\land$,&& |
| 1              | 0              | 1              | 1              | 0              | 1              | 1              | 1              |
| =              | =              | =              | =              | =              | =              | =              | =              |
| 1              | 0              | 1              | 0              | 0              | 1              | 0              | 1              |

$$11101101_2 \land 10110111_2 = 10100101_2 $$

$$237_{10} \land 183_{10} = 165_{10} $$

Most of the time it will look like this, here is XOR with the same numbers:

```
    11101101
XOR 10110111
------------
    01011010
```


$$11101101_2 \oplus 10110111_2 = 01011010_2 $$

$$237_{10} \oplus 183_{10} = 90_{10} $$

These are called **bitwise operations**, they refer to any operation that treats the raw data of the inputs as a set of bits and can be treated as boolean values. Part of treating data as raw binary digits means that a set size for each number must be decided, usually the size of the inputs in raw bits. The ones above worked on the assumption of 8-bit numbers, the same operation could have been done on 16-bit representations of the numbers:

```
    0000000011101101
XOR 0000000010110111
--------------------
    0000000001011010
```

Although the result is the same, the computer must do a lot more operations to compare those leading 0's. This is especially important for the later bit-shift operators.

These are the bitwise operators in C:

- `~` - Bitwise NOT
- `&` - Bitwise AND
- `|` - Bitwise OR
- `^` - Bitwise XOR
- `<<` - Left Bit Shift
- `>>` - Right Bit Shift

They are used like the normal math operators:

```c
// unsigned char makes the variable 8-bits long and unsigned
unsigned char a = 237;
unsigned char b = 183;

unsigned char and_result = a & b;
unsigned char xor_result = a ^ b;
```

This is a little program you can use to see how each of the other ones work:

```C
// bitwise.c - Bitwise Operations Viewer
#include <stdio.h>
#include <stdint.h> // So we can control unsigned/signed and int size easier

// Helper Functions for printing
void print_binary(uint8_t val);
void print_operation(uint8_t a, uint8_t b,
	uint8_t result, const char* operation);

int main() 
{
	// uint8_t is an int of 1-byte length and is read as unsigned
	uint8_t a = 237;
	uint8_t b = 183;
	
	uint8_t and_result = a & b;
	uint8_t xor_result = a ^ b;
	// Add the others as an exercise
	
	print_operation(a,b,and_result, "AND");
	printf("\n%d & %d = %d\n\n",a,b,and_result);
	print_operation(a,b,xor_result, "XOR");
	printf("\n%d ^ %d = %d\n\n",a,b,xor_result);
	
	return 0;
}

// Helper function to print binary digits
void print_binary(uint8_t val)
{
    for (int i = 7; i >= 0; i--) {
        printf("%d", (val >> i) & 1);
    }
}
// Helper function to print equation 
void print_operation(
	uint8_t a, uint8_t b, 
	uint8_t result,
	const char* operation
){
	printf("\t"); print_binary(a);
	printf("\n");
    printf("%s\t", operation); print_binary(b);
    printf("\n");
    printf("----------------\n");
    printf("\t"); print_binary(result);
    printf("\n");
}
```

### Bit Shifts

Those two operators `<<` and `>>` are called the **bit shift** operators, left and right respectively (you can always know based on where they point). They are used to move bits within a binary string. They take two arguments like the other operators, but they mean very different things.

- `result = value << shift;`
	- `value` is the information being shifted, represented in binary
	- `shift` is the number of bits that value will be shifted by
	- `result` stores the result of the shift, value remains unaffected

To demonstrate, I will show the following operation:

```c
uint8_t value = 23; // 00010111
uint8_t shift = 2;  // 2 bit position shift
uint8_t result = value << shift;
```

In the computer:

```
Bin Num       Bit Shift  Decimal Value
00010111                 23
00101110      << 1       46
01011100      << 1       92
```

```
    00010111
<<         2
------------
    01011100
```

As you can see, the bit shift operators do just that, shift the bits physically to the left or right. To fill in for the missing bits that it leaves open, it fills it in with zeros. For example, 128 in a 8-bit number shifted right a few times:

```
Bin Num       Bit Shift  Decimal Value
10000000                 128
01000000      >> 1       64
00100000      >> 1       32
00010000      >> 1       16
00001000      >> 1       8
```

It also destroys information if runs out of space, as we can see with 255 in a 8-bit number:

```
Bin Num       Bit Shift  Decimal Value
11111111                 255
11111110      << 1       254
11111100      << 1       252
11111000      << 1       248
11110000      << 1       240
```

This of course only matters if we are using 8-bit numbers, showing once again, the size of our representation effects how we deal with that value. Here is the same thing but with a 16-bit number:

```
Bin Num               Bit Shift  Decimal Value
0000000011111111                 255
0000000111111110      << 1       510
0000001111111100      << 1       1020
0000011111111000      << 1       2040
0000111111110000      << 1       4080
```

Here it may also become apparent that when we bit shift a number it either multiplies or divides the number by 2 if there is enough space to hold the resulting value.

Left shifts double (x2) the value, while right shifts halves (x1/2) the value. This is because each digit position is a power of 2 and by moving it up/down you are effectively doubling or halving. This carries over to decimal where if we do a digit shift on a number, you are multiplying or dividing by 10:

```
Dec Num   Digit Shift  Value
00003                  3
00030      << 1        30
00300      << 1        300
```

To finish up, here is a program using hex values and some bit shifting to generate a neat little effect. See if you can break it down and understand what is going on!

```c
// zigzag.c - ZigZag Using Bit Shifts
#include <stdio.h>
#include <stdint.h>

void print_binary(uint64_t val);

int main() 
{
	uint64_t a = 0x00000000000000FF;
	uint64_t b = 0xFF00000000000000;

	int a_dir = 1;
	int b_dir = 0;
	while(1){
		print_binary(a | b);
		printf("\n");

		if(a_dir) a <<= 1;
		else a >>= 1;

		if(b_dir) b <<= 1;
		else b >>= 1;

		if (a == 0xFF00000000000000 || a == 0xFF)
			a_dir ^= 1;

		if (b == 0xFF00000000000000 || b == 0xFF)
			b_dir ^= 1;
	}
	
	return 0;
}

void print_binary(uint64_t val)
{
    for (int i = 63; i >= 0; i--) {
    	if ((val >> i) & 1)
        	putchar('#');
        else
        	putchar(' ');
    }		
}
```