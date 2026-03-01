# Unit 1 Test Review Questions

## Due: 2/13/26

### Description

This HW will serve as a review of the material thus far and have questions to prepare you for the upcoming exam. "Unit 1: Computers and Binary" was centered on introducing the language of the computer and the layers of translation that occur within it. These topics will be the primary focus along with the material online it is associated with:

- Computers Generally
    - [Introduction](../lessons/1_introduction.md)
- The Abstraction Hierarchy
    - [Introduction](../lessons/1_introduction.md)
    - [C Compilation Lab](../labs/c_compilation.md)
- The C Language
    - [C Review](../lessons/2_reviewing_c.md)
    - [C Compilation Lab](../labs/c_compilation.md)
- Binary and Hexadecimal Numbers
    - [Binary and Hex](../lessons/3_binary_hex.md)
- Logical and Bitwise Operations

The test will have True/False, Multiple Choice, Short Answer, Fill-in-the-Blank, and Number Conversion Type Questions. They will all be based on these short answer questions. Answer each to the best of your ability and use the material and in-class notes to fill in any gaps you find you have. This is meant to be a graded review, simply looking up answers without understanding will not prepare you for the exam, try your best and ask questions during class time.

---

## Section 1: Computers Generally - /30 pts

**1. (4 pts) | ~4-5 sentences** What are the two main classifications of computers historically? What differentiates them? Which are used today?

---

**2. (4 pts) | ~3-4 sentences** What is a Turing Machine generally? Was one made? Why or why not?

---

**3. (4 pts) | ~3-4 sentences** With respect to memory in C, can you see how Turing Machines conceptually influenced the way we interact with memory? How do they relate?

---

**4. (4 pts) | ~3-4 sentences** Explain the Abstraction Hierarchy inside of a computer. Where do consumers mostly work? Where do we work?

---

**5. (6 pts - 1.5 pts per step)** In the C Compilation Lab, we saw how C is compiled from source code to an executable. Map each step of the compilation process to a layer in the abstraction hierarchy.

|Step|Description|Abstraction Layer|
|---|---|---|
|Preprocessing|||
|Compilation|||
|Assembly|||
|Linking|||

---

**6. (4 pts) | ~3-4 sentences** Transistors are the core of modern digital computers. What are their states? How many are there? How does that inform our number system on the computer?

---

**7. (2 pts) | ~2-3 sentences** In the CPU of the Von Neumann architecture, what are the two main components? What is the relationship between them?

---

**8. (2 pts) | ~2-3 sentences** When running code on a computer, is it run as assembly code?

---

## Section 2: Binary and Hexadecimal - /40 pts

**1. (4 pts - 1 pt each)** How big is a `char`, `int`, `float`, and `double` in memory in C?

|Type|Size (bytes)|Size (bits)|
|---|---|---|
|`char`|||
|`int`|||
|`float`|||
|`double`|||

---

**2. (3 pts) | ~2-3 sentences** What are number systems? Which do we use normally? Which do computers use?

---

**3. (3 pts) | ~2-3 sentences** Binary and Hexadecimal are names for number systems, what are their bases? What do we use hex for mostly?

---

**4. (3 pts)** | ~1-2 What is a bit, nibble, and byte? How big is each? What are their maximum unsigned values?

|Unit|Size|Max Unsigned Value|
|---|---|---|
|Bit|||
|Nibble|||
|Byte|||

---

**5. (3 pts) | ~3-4 sentences** What are MSB and LSB? How did we use it in HW1 to manipulate the bit-plane of an image?

---

**6. (5 pts - 1 pt each)** Convert the following decimal numbers into binary:

|Decimal|Binary|
|---|---|
|23||
|100||
|3||
|255||
|127||

---

**7. (5 pts - 1 pt each)** Convert the following binary numbers to decimal:

|Binary|Decimal|
|---|---|
|`111`||
|`11111111`||
|`00000001`||
|`10101`||
|`10110111`||

---

**8. (6 pts - 1 pt each)** Convert the following binary numbers into hex digits:

|Binary|Hex|
|---|---|
|`1100`||
|`1111`||
|`11000001`||
|`01100111`||
|`11011011`||
|`1011111011101111`||

---

## Section 3: Logical and Bitwise Operations - /30 pts

**1. (2 pts)** What are the 4 main logical operators?

---

**2. (2 pts) | ~1-2 sentences** What is a truth table?

---

**3. (8 pts - 2 pts each)** Create 4 truth tables showing the 4 main logical operations.

**AND**

|A|B|A AND B|
|---|---|---|
|0|0||
|0|1||
|1|0||
|1|1||

**OR**

|A|B|A OR B|
|---|---|---|
|0|0||
|0|1||
|1|0||
|1|1||

**NOT**

|A|NOT A|
|---|---|
|0||
|1||

**XOR**

|A|B|A XOR B|
|---|---|---|
|0|0||
|0|1||
|1|0||
|1|1||

---

**4. (14 pts - 2 pts each)** Find the resulting number from these operations. First convert the number from decimal to binary, then apply the operation bitwise. Show your work.

1. `3 & 7` =

2. `2 | 7` =

3. `~(15)` =

4. `21 ^ 10` =

5. `2 << 1` =

6. `64 >> 2` =

7. `(3 & 7) | (2 << 1)` =

---

**5. (2 pts) | ~1-2 sentences + expression** Design a bitwise check to see if a number is positive or negative.

---

**6. (2 pts) | ~1-2 sentences + expression** If a graphics program organizes its colors into RGB pixels represented by single numbers in hex, like `0xRRGGBB`. Write a bitwise equation to carry over the red and blue channels and max the green channel out.

---

## Point Summary

| Section                                   | Points   |
| ----------------------------------------- | -------- |
| Section 1: Computers Generally            | /30      |
| Section 2: Binary and Hexadecimal         | /40      |
| Section 3: Logical and Bitwise Operations | /30      |
| **Total**                                 | **/100** |
