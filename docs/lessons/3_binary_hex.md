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

This results in the following table


### Converting to Binary

### Converting from Binary

## The Hexadecimal System

### Converting to Hexadecimal

### Converting from Hexadecimal

## Important Terms