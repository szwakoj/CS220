# Binary and Hexadecimal Numbers

In your previous courses in computer science, the idea of binary numbers must have come up at least once. However, until this point in your learning journey, you probably never had to understand it completely or why it is so deeply connected to computers. All information on the computer is ultimately stored in binary format, as we look deeper into the way a computer is made, we will need to be able to understand this representation of information to be better equipped for designing, fixing, or analyzing software.

In this lesson, we will cover:

- Number systems generally
- A technical description of the decimal number system we all use
- The binary number system
- How to convert to and from binary and decimal
- The hexadecimal number system
- How to convert to and from hexadecimal and decimal
- How hexadecimal and binary connect to make reading raw data a little easier
- Important terms when speaking of numbers in different systems


## Number Systems

When we want to communicate verbal information, we pick a system of speaking that formats that information, like a language, and express that information using the rules that the format/language defines. Ultimately that verbal information can be expressed in any format or language and still have the overall meaning but looks very different. Think about how you can say the same thing in any language:

- Ways to greet someone in many languages:
	- English: "Hello"
	- Spanish: "Hola"
	- Arabic: "مرحباً"
	- Swahili: "Jambo"
	- Chinese: "你好"
	- Russian: "дравствуйте"

Notice that they all mean the same thing, but the form in which they appear changes with the language/format. Each form has its own rules and symbols that inform how that information is received and understood. The information never changes but the form it takes and how many symbols it requires to be properly conveyed can be different.

The above is the case for verbal information, but what about other kinds of information like numbers, audio, or video? What about a method of storing any kind of information, verbal or otherwise? Something that we will assume going forward is that all information can be represented using numbers, and as such we will focus on **number systems**. This assumption is the main idea of Information Theory as a field.

A **number system** or **numeral system** is a method of representing values of numbers using a set of symbols or **digits**. The number system that you are most used to is the **decimal number system** also known as **base-10**, as we will see later. This is the standard way of representing numbers using the digits 0-9 for a total of ten digits, making its prefix "deci-" make sense.

### The Decimal Number System

The **decimal number system** isn't anything new to you and will be the "lingua franka" we translate back to when doing number conversions. Although you interact with these numbers every day, seldom does anyone stops to think why they are the way they are. To ensure we are on the same page on the mechanics of the base-10 system and as a means of introducing number systems generally, we will review.

**Digits** are the symbols that numerical systems use to denote values. . For decimal, we have ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. These are the building blocks that construct all numbers.

To represent values larger than nine, we use **positional notation** where each position represents a different weight. Each position is a power of 10:

| **Position**    | 6         | 5                 | 4             | 3         | 2        | 1      | 0      |
| --------------- | --------- | ----------------- | ------------- | --------- | -------- | ------ | ------ |
| **Power of 10** | $10^6$    | $10^5$            | $10^4$        | $10^3$    | $10^2$   | $10^1$ | $10^0$ |
| **Amount**      | 1,000,000 | 100,000           | 10,000        | 1,000     | 100      | 10     | 1      |
| **Place Name**  | Millions  | Hundred-Thousands | Ten-Thousands | Thousands | Hundreds | Tens   | Ones   |

**Example:** The number 90,621 breaks down as:

| **Position** | 4      | 3      | 2     | 1     | 0    |
| ------------ | ------ | ------ | ----- | ----- | ---- |
| **Weight**   | $10^4$ | $10^3$ | $10^2$| $10^1$| $10^0$|
| **Digit**    | 9      | 0      | 6     | 2     | 1    |

$$90621 = 9 \times 10^4 + 0 \times 10^3 + 6 \times 10^2 + 2 \times 10^1 + 1 \times 10^0$$
$$= 90000 + 0 + 600 + 20 + 1 = 90621$$

Here, ten is used as the **base**, hence the name base-10 system.

### Why more than one?

You may be asking yourself, "Well yeah, but isn't that the only number system? Seems like common sense.". You have a point in the day to day of normal life. Base-10 has become the single system that we use to represent numerical values for some time; however it is most definitely not universal. 

Historically, there have been many different kinds of number systems, sprung from different circumstances. Base-10 is a widespread system because we have an implicit knowledge of counting with 10, because of humanity's 10 fingers. However, one of the oldest formal number systems from civilization we have evidence of was a base-60 system from ancient Babylon. The Mayans created a vigesimal (base-20) system independently early in the time record, and tallying (writing numbers using a single symbol) could be thought of as the oldest number system and is technically base-1.

Which number systems people use ultimately comes down to which system best fits their task and the medium in which that number system will be used. For the task of easily being able to represent numbers for a creature that's bad at math with ten fingers, base-10 becomes a good pick. However, sometimes the task or medium requires a different representation than base-10 for practicality. 

So there have been many other examples of different number systems using different digits and bases than what we use today. But how?

### Number Systems Generally

All number systems can be explained generally using its base number and its digits, for example here are the number systems we will be learning about along with base-10:

| **Number System Name** | Decimal             | Binary | Hexadecimal      |
| ---------------------- | ------------------- | ------ | ---------------- |
| **Base Number**        | 10                  | 2      | 16               |
| **Digits**             | 0,1,2,3,4,5,6,7,8,9 | 0,1    | 0-9, A,B,C,D,E,F |

Notice that there are always base number of digits available to represent the number. Ultimately, it doesn't matter what symbols we use, so long as the base defines the number of unique symbols.

#### The Mathematical Description

For any number system with base $b$, we can describe how to calculate the value of a number using the following components:

**Components of a Number System:**

- **Base** ($b$): The number of unique digits in the system
- **Digits**: A set of $b$ symbols, typically $0, 1, 2, ..., (b-1)$
- **Positions**: Each digit occupies a position, numbered from right to left starting at 0

**The General Formula:**

For a number with digits $d_n, d_{n-1}, d_{n-2}, ..., d_1, d_0$ in base $b$:

$$\text{Value} = d_n \times b^n + d_{n-1} \times b^{n-1} + d_{n-2} \times b^{n-2} + ... + d_1 \times b^1 + d_0 \times b^0$$

Or more compactly using summation notation:

$$\text{Value} = \sum_{i=0}^{n} d_i \times b^i$$

Where:

- $d_i$ is the digit at position $i$
- $b$ is the base of the number system
- $i$ is the position index (starting from 0 on the right)
- $n$ is the position of the leftmost digit

#### Examples

Let's see how this general formula applies to different bases:

##### Base-10 (Decimal)

- **Base**: $b = 10$
- **Digits**: $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$ (10 total)
- **Position weights**: $10^0, 10^1, 10^2, 10^3, ...$

For the number $90621_{10}$:

$$90621_{10} = 9 \times 10^4 + 0 \times 10^3 + 6 \times 10^2 + 2 \times 10^1 + 1 \times 10^0$$

$$= 90000 + 0 + 600 + 20 + 1 = 90621$$

##### Base-5 (Quinary) - An Example

- **Base**: $b = 5$
- **Digits**: $0, 1, 2, 3, 4$ (5 total)
- **Position weights**: $5^0, 5^1, 5^2, 5^3, ...$

|**Position**|3|2|1|0|
|---|---|---|---|---|
|**Weight**|$5^3$|$5^2$|$5^1$|$5^0$|
|**Amount**|125|25|5|1|

For the number $1234_5$ (read as "one-two-three-four base five"):

$$1234_5 = 1 \times 5^3 + 2 \times 5^2 + 3 \times 5^1 + 4 \times 5^0$$



$$= 1 \times 125 + 2 \times 25 + 3 \times 5 + 4 \times 1$$



$$= 125 + 50 + 15 + 4 = 194_{10}$$


So $1234_5 = 194_{10}$, the same value, just represented differently.


From this general description, we can identify several important principles that hold for **all** number systems:

1. **The number of digits equals the base**: A base-$b$ system has exactly $b$ unique digit symbols
    
2. **Digits range from 0 to (b-1)**: The largest single digit in base-$b$ is always one less than the base itself
    
    - Base-10: digits are 0–9
    - Base-5: digits are 0–4
    - Base-2: digits are 0–1
3. **Position value increases exponentially**: Each position to the left is worth $b$ times more than the position to its right
    
4. **The rightmost position is always $b^0 = 1$**: No matter the base, the ones place always exists
    
5. **Any value can be represented in any base**: Just like how "hello" can be said in any language, any number can be written in any base
    

## The Binary Number System

With a general framework for all number systems, let's shrink back down to what we actually will be doing. Recall that all information on a computer is represented as binary numbers due to being made of transistors. This means all information must be represented using only two symbols, 0 and 1, for the transistors possible off and on state, respectively. This number system is therefore **base-2** and is the reason it is called **binary** (prefix bi- meaning two). 

This results in the following table:

|**Number System Name**|Binary|
|---|---|
|**Base Number**|2|
|**Digits**|0, 1|

Just like with decimal, binary uses positional notation where each position represents a power of 2:

| **Position**      | 7     | 6     | 5     | 4     | 3     | 2     | 1     | 0     |
| ----------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Power of 2**    | $2^7$ | $2^6$ | $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
| **Decimal Value** | 128   | 64    | 32    | 16    | 8     | 4     | 2     | 1     |

**Example:** The binary number $1011_2$ breaks down as:

|**Position**|3|2|1|0|
|---|---|---|---|---|
|**Weight**|$2^3$|$2^2$|$2^1$|$2^0$|
|**Digit**|1|0|1|1|

$$1011_2 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0$$

$$= 8 + 0 + 2 + 1 = 11_{10}$$

So the binary number $1011_2$ equals the decimal number $11_{10}$.

Notice that binary numbers get long very quickly. To represent the decimal number 255, you need eight binary digits: $11111111_2$. This is one of the trade-offs of using a smaller base, you need more positions to represent the same values, but you only need to work with two symbols.

### Converting from Decimal to Binary

There are multiple methods to convert from decimal to binary, but the most straightforward is the **division-by-2 method** (also called the repeated division method).

**The Division-by-2 Method:**

1. Divide the decimal number by 2
2. Record the remainder (this will be either 0 or 1)
3. Divide the quotient from step 1 by 2
4. Record the remainder
5. Repeat until the quotient is 0
6. Read the remainders from bottom to top this is your binary number

**Example:** Convert $45_{10}$ to binary

| Step | Division | Quotient | Remainder |
| ---- | -------- | -------- | --------- |
| 1    | 45 ÷ 2   | 22       | **1** ←   |
| 2    | 22 ÷ 2   | 11       | **0**     |
| 3    | 11 ÷ 2   | 5        | **1**     |
| 4    | 5 ÷ 2    | 2        | **1**     |
| 5    | 2 ÷ 2    | 1        | **0**     |
| 6    | 1 ÷ 2    | 0        | **1** ↑   |

Reading the remainders from bottom to top: $101101_2$

We can verify: $1 \times 2^5 + 0 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 32 + 8 + 4 + 1 = 45_{10}$ ✓

**Alternative Method: Subtraction Method**

Another approach is to subtract the largest power of 2 that fits into your number, working from left to right:

**Example:** Convert $45_{10}$ to binary

1. Largest power of 2 ≤ 45 is $2^5 = 32$. Place a 1 in position 5. Remainder: $45 - 32 = 13$
2. Largest power of 2 ≤ 13 is $2^3 = 8$. Place a 1 in position 3. Remainder: $13 - 8 = 5$
3. Largest power of 2 ≤ 5 is $2^2 = 4$. Place a 1 in position 2. Remainder: $5 - 4 = 1$
4. Largest power of 2 ≤ 1 is $2^0 = 1$. Place a 1 in position 0. Remainder: $1 - 1 = 0$
5. Positions 4 and 1 were skipped, so they get 0s

Result: $101101_2$

Both methods give the same answer; use whichever makes more sense to you.

### Converting from Binary to Decimal

Converting from binary to decimal is more straightforward, we simply apply the general formula for number systems that we learned earlier.

**Method:** Multiply each digit by its position weight (power of 2) and sum the results.

**Example 1:** Convert $11010_2$ to decimal

|**Position**|4|3|2|1|0|
|---|---|---|---|---|---|
|**Weight**|$2^4$|$2^3$|$2^2$|$2^1$|$2^0$|
|**Digit**|1|1|0|1|0|
|**Value**|16|8|0|2|0|

$$11010_2 = 1 \times 16 + 1 \times 8 + 0 \times 4 + 1 \times 2 + 0 \times 1 = 16 + 8 + 2 = 26_{10}$$

**Example 2:** Convert $10000001_2$ to decimal

$$10000001_2 = 1 \times 2^7 + 0 \times 2^6 + 0 \times 2^5 + 0 \times 2^4 + 0 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 1 \times 2^0$$

$$= 128 + 1 = 129_{10}$$

**Quick Tip:** You only need to add the positions where the digit is 1. All the 0s contribute nothing to the sum, so you can skip them entirely.

## The Hexadecimal Number System

While binary is the language computers speak natively, it has a significant drawback for human use: binary numbers get extremely long very quickly. The number $11111111111111111111111111111111_2$ is hard to read, hard to remember, and easy to make mistakes with. This is where **hexadecimal** comes in.

**Hexadecimal** (often shortened to **hex**) is a **base-16** number system. The prefix "hexa-" means six and "decimal" means ten, so hexadecimal literally means "six and ten" or sixteen. Hexadecimal provides a much more compact way to represent binary data while still being easy to convert back and forth.

The challenge with base-16 is that we need 16 unique digits, but we only have 10 numerical symbols (0-9). The solution? We borrow from the alphabet. The digits A through F represent the values 10 through 15:

|**Number System Name**|Hexadecimal|
|---|---|
|**Base Number**|16|
|**Digits**|0-9, A,B,C,D,E,F|

Here's how the hexadecimal digits map to decimal values:

|**Hex Digit**|0|1|2|3|4|5|6|7|8|9|A|B|C|D|E|F|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|**Decimal**|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|

Just like decimal and binary, hexadecimal uses positional notation with powers of 16:

|**Position**|4|3|2|1|0|
|---|---|---|---|---|---|
|**Power of 16**|$16^4$|$16^3$|$16^2$|$16^1$|$16^0$|
|**Decimal Value**|65,536|4,096|256|16|1|

**Example:** The hexadecimal number $2A3F_{16}$ breaks down as:

|**Position**|3|2|1|0|
|---|---|---|---|---|
|**Weight**|$16^3$|$16^2$|$16^1$|$16^0$|
|**Digit**|2|A|3|F|
|**Value**|2|10|3|15|

$$2A3F_{16} = 2 \times 16^3 + 10 \times 16^2 + 3 \times 16^1 + 15 \times 16^0$$

$$= 2 \times 4096 + 10 \times 256 + 3 \times 16 + 15 \times 1$$

$$= 8192 + 2560 + 48 + 15 = 10815_{10}$$

Notice how much more compact hexadecimal is compared to binary. The decimal number 10,815 would be $10101000111111_2$ in binary (14 digits), but only $2A3F_{16}$ in hexadecimal (4 digits).

### Converting from Decimal to Hexadecimal

Just like with binary, we use the **division method**, but this time we divide by 16.

**The Division-by-16 Method:**

1. Divide the decimal number by 16
2. Record the remainder (this will be 0-15; use A-F for 10-15)
3. Divide the quotient from step 1 by 16
4. Record the remainder
5. Repeat until the quotient is 0
6. Read the remainders from bottom to top, this is your hexadecimal number

**Example:** Convert $2748_{10}$ to hexadecimal

|Step|Division|Quotient|Remainder (Decimal)|Remainder (Hex)|
|---|---|---|---|---|
|1|2748 ÷ 16|171|12|**C** ←|
|2|171 ÷ 16|10|11|**B**|
|3|10 ÷ 16|0|10|**A** ↑|

Reading the remainders from bottom to top: $ABC_{16}$

We can verify: $10 \times 16^2 + 11 \times 16^1 + 12 \times 16^0 = 2560 + 176 + 12 = 2748_{10}$ ✓

**Example 2:** Convert $255_{10}$ to hexadecimal

|Step|Division|Quotient|Remainder (Decimal)|Remainder (Hex)|
|---|---|---|---|---|
|1|255 ÷ 16|15|15|**F** ←|
|2|15 ÷ 16|0|15|**F** ↑|

Result: $FF_{16}$

This is a number you'll see frequently in computer science. $FF_{16}$ represents the maximum value that can be stored in 8 bits.

### Converting from Hexadecimal to Decimal

Converting from hexadecimal to decimal follows the same pattern as binary to decimal.

**Method:** Multiply each digit by its position weight (power of 16) and sum the results. Remember to convert A-F to their decimal equivalents (10-15) before multiplying.

**Example 1:** Convert $1F4_{16}$ to decimal

|**Position**|2|1|0|
|---|---|---|---|
|**Weight**|$16^2$|$16^1$|$16^0$|
|**Digit**|1|F|4|
|**Value**|1|15|4|

$$1F4_{16} = 1 \times 256 + 15 \times 16 + 4 \times 1 = 256 + 240 + 4 = 500_{10}$$

**Example 2:** Convert $DEAD_{16}$ to decimal

$$DEAD_{16} = 13 \times 16^3 + 10 \times 16^2 + 10 \times 16^1 + 13 \times 16^0$$

$$= 13 \times 4096 + 10 \times 256 + 10 \times 16 + 13 \times 1$$

$$= 53248 + 2560 + 160 + 13 = 57005_{10}$$

### The Connection Between Binary and Hexadecimal

Here's where hexadecimal becomes truly useful: there's a remarkably simple relationship between binary and hexadecimal that makes conversion between them trivial. This is because 16 is a power of 2: $16 = 2^4$.

This means that **one hexadecimal digit perfectly represents exactly four binary digits**. This 4-to-1 mapping is what makes hexadecimal so practical for representing binary data.

Here's the complete mapping:

| **Hex** | **Binary** | **Decimal** | **Hex** | **Binary** | **Decimal** |
| ------- | ---------- | ----------- | ------- | ---------- | ----------- |
| 0       | 0000       | 0           | 8       | 1000       | 8           |
| 1       | 0001       | 1           | 9       | 1001       | 9           |
| 2       | 0010       | 2           | A       | 1010       | 10          |
| 3       | 0011       | 3           | B       | 1011       | 11          |
| 4       | 0100       | 4           | C       | 1100       | 12          |
| 5       | 0101       | 5           | D       | 1101       | 13          |
| 6       | 0110       | 6           | E       | 1110       | 14          |
| 7       | 0111       | 7           | F       | 1111       | 15          |

**Converting Binary to Hexadecimal:**

1. Group the binary digits into sets of 4, starting from the right
2. If the leftmost group has fewer than 4 digits, pad with zeros on the left
3. Convert each group of 4 binary digits to its hexadecimal equivalent
4. Concatenate the hex digits

**Example 1:** Convert $11010111_2$ to hexadecimal

1. Group into fours: $1101$ $0111$
2. Convert each group:
    - $1101_2 = D_{16}$
    - $0111_2 = 7_{16}$
3. Result: $D7_{16}$

**Example 2:** Convert $1011111010_2$ to hexadecimal

1. Group into fours from right: $10$ $1111$ $1010$
2. Pad the leftmost group: $0010$ $1111$ $1010$
3. Convert each group:
    - $0010_2 = 2_{16}$
    - $1111_2 = F_{16}$
    - $1010_2 = A_{16}$
4. Result: $2FA_{16}$

**Converting Hexadecimal to Binary:**

This is even easier, just replace each hex digit with its 4-bit binary equivalent.

**Example 1:** Convert $3C_{16}$ to binary

- $3_{16} = 0011_2$
- $C_{16} = 1100_2$
- Result: $00111100_2$ (or $111100_2$ without leading zeros)

**Example 2:** Convert $BEEF_{16}$ to binary

- $B_{16} = 1011_2$
- $E_{16} = 1110_2$
- $E_{16} = 1110_2$
- $F_{16} = 1111_2$
- Result: $1011111011101111_2$

This direct conversion is why hexadecimal is so popular in computer science. Instead of writing out 32 or 64 binary digits, programmers can write 8 or 16 hex digits and convert trivially when needed. It's a human-friendly notation for machine-friendly data.

## Important Terms

Now that we understand binary and hexadecimal number systems, there are several important terms used in computer science when working with these representations. These terms describe specific quantities and groupings of binary digits that are fundamental to how computers organize and process data.

### Bit

A **bit** (short for **binary digit**) is the smallest unit of data in a computer. It can have only two possible values: 0 or 1. This directly corresponds to the two states of a transistor: off or on, no voltage or voltage, false or true.

Everything in a computer, everything from numbers, letters, images, videos, or even programs, are all ultimately represented as a collection of bits. When we say a computer is "digital," we mean it works exclusively with these discrete binary values.

**Examples:**

- The binary number $1011_2$ consists of 4 bits
- A single bit can represent: on/off, true/false, yes/no
- The letter 'A' in ASCII is represented as $01000001_2$, which is 8 bits

### Nibble

A **nibble** (sometimes spelled **nybble**) is a group of exactly **4 bits**. The term is a playful reference to a nibble being half of a byte (which we'll discuss next).

Nibbles are particularly important because of their relationship to hexadecimal: one nibble corresponds exactly to one hexadecimal digit, as we saw in the previous section.

**Examples:**

- The binary number $1011_2$ is one nibble
- The binary number $11010111_2$ consists of two nibbles: $1101$ and $0111$
- The hexadecimal digit $F_{16}$ represents the nibble $1111_2$

**Why Nibbles Matter:**

- Each hexadecimal digit represents exactly one nibble
- This makes it easy to visually convert between binary and hex
- Nibbles are often used when working with binary-coded decimal (BCD) systems
- They're useful for representing single hexadecimal digits in hardware

### Byte

A **byte** is a group of **8 bits** and is the fundamental unit of memory in most modern computers. Almost all computer operations, memory addressing, and data storage are organized around bytes.

The byte is important enough that it's the standard unit used to measure computer memory and storage capacity. When you see kilobytes (KB), megabytes (MB), or gigabytes (GB), these are all based on bytes.

**Examples:**

- The binary number $11010111_2$ is one byte
- One byte can represent decimal values from $0$ to $255$ (or $00000000_2$ to $11111111_2$)
- The hexadecimal number $FF_{16}$ represents one byte with all bits set to 1
- One ASCII character is stored in exactly one byte

**Why Bytes Matter:**

- Memory addresses typically point to byte locations
- Most data types are measured in bytes (e.g., a 32-bit integer is 4 bytes)
- File sizes are measured in bytes and their multiples
- One byte can represent 256 different values ($2^8 = 256$)

**Important Note:** A byte always has exactly 8 bits. This wasn't always universal historically (some early computers used different byte sizes), but 8 bits per byte has been the standard since the 1960s and is essentially universal today.

### Word

A **word** is the natural unit of data used by a particular computer architecture. Unlike bit, nibble, and byte, which have fixed sizes, a word's size varies depending on the processor design.

The word size determines several important characteristics of a computer:

- How much data the processor can handle in a single operation
- The maximum memory address the processor can directly access
- The size of the processor's registers

**Common Word Sizes:**

- **8-bit processors:** 1 byte (8 bits) 
	- early microprocessors like the Intel 8080
- **16-bit processors:** 2 bytes (16 bits)  
	- processors like the Intel 8086
- **32-bit processors:** 4 bytes (32 bits) 
	- common in desktops from the 1990s-2000s
- **64-bit processors:** 8 bytes (64 bits) 
	- standard in modern computers today

**Examples:**

- On a 32-bit system, a word is $32$ bits or $4$ bytes
- On a 64-bit system, a word is $64$ bits or $8$ bytes
- A 64-bit processor can process a word like $0xFFFFFFFFFFFFFFFF_{16}$ in a single operation

**Why Word Size Matters:**

- Determines the maximum amount of RAM that can be directly addressed
    - 32-bit: Can address up to $2^{32}$ bytes = 4 GB of RAM
    - 64-bit: Can address up to $2^{64}$ bytes = 16 exabytes of RAM (theoretically)
- Affects the precision of integer arithmetic operations
- Influences overall system performance and architecture design

### Most Significant Bit (MSB) and Least Significant Bit (LSB)

In any binary number, the bits have different levels of importance based on their position. The **most significant bit (MSB)** is the bit in the highest-value position (leftmost), while the **least significant bit (LSB)** is the bit in the lowest-value position (rightmost).

**Example:** In the byte $10110011_2$

```
  MSB                    LSB
   ↓                      ↓
   1  0  1  1  0  0  1  1
  128 64 32 16  8  4  2  1  ← position values
```

- The MSB is $1$ (leftmost), representing $128_{10}$
- The LSB is $1$ (rightmost), representing $1_{10}$
- Changing the MSB changes the value by 128
- Changing the LSB changes the value by only 1

**Why MSB and LSB Matter:**

- The MSB in signed integers often represents the sign (positive/negative)
- The LSB is important for parity checks and determining even/odd
- Bit ordering (endianness) refers to whether MSB or LSB is stored first in memory
- When doing bit shifts, knowing which end is which is crucial

### Number Notation Conventions

When writing numbers in different bases, it's essential to indicate which base you're using to avoid confusion. There are several common conventions:

**Subscript Notation:**

- $10111_2$ means the number 10111 in binary (base-2)
- $2F_{16}$ means the number 2F in hexadecimal (base-16)
- $156_{10}$ means the number 156 in decimal (base-10)

This is the notation used in mathematical contexts and in this document.

**Prefix Notation (Programming):**

- `0b10111` or `0B10111` -  binary (used in Python, C++14 and later, and others)
- `0x2F` or `0X2F` - hexadecimal (used in C, C++, Java, Python, and many others)
- `0o177` or `0O177` - octal, base-8 (used in Python and some others)
- No prefix typically means decimal

**Examples in Code:**

```C
binary_num = 0b10111;     # Binary: 23 in decimal
hex_num = 0x2F;           # Hexadecimal: 47 in decimal
decimal_num = 156;        # Decimal: 156
```

**Suffix Notation:**

- Sometimes you'll see `10111b` or `2Fh` to indicate binary and hexadecimal
- This is less common but appears in some assembly languages and documentation

**Context Matters:** When working with computer systems, pay attention to the notation being used. A number like $10110$ could mean:

- Ten thousand, one hundred ten in decimal
- Twenty-two in binary ($10110_2 = 22_{10}$)
- Sixty-six thousand, five hundred seventy-six in hexadecimal ($10110_{16} = 66576_{10}$)

Always check for subscripts, prefixes, or context clues to determine the intended base.

### Summary Table

Here's a quick reference for these important terms:

| **Term**   | **Size**               | **Description**                                   | **Example**            |
| ---------- | ---------------------- | ------------------------------------------------- | ---------------------- |
| **Bit**    | 1 bit                  | Smallest unit; single binary digit (0 or 1)       | $1$                    |
| **Nibble** | 4 bits                 | Half a byte; one hex digit                        | $1011_2 = B_{16}$      |
| **Byte**   | 8 bits                 | Standard unit of memory; two hex digits           | $11010111_2 = D7_{16}$ |
| **Word**   | Varies by architecture | Natural processing unit (32 or 64 bits typically) | 4 or 8 bytes           |
| **MSB**    | Single bit             | Leftmost bit; highest value position              | The $1$ in $1011$      |
| **LSB**    | Single bit             | Rightmost bit; lowest value position              | The $1$ in $1010$      |

Understanding these terms is essential for working with computer hardware, low-level programming, network protocols, and data structures. They form the vocabulary that computer scientists and engineers use to discuss how computers represent and manipulate data at the most fundamental level.