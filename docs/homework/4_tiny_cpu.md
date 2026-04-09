# TinyCPU: Simulating a Von Neumann CPU

## Due Date: 4/19/26

## Description

In this homework, you will be building on the previous homework's ideas to create a fleshed out simulated virtual tinyCPU. You will create the CPU struct complete with shared memory, a program counter, registers, and instruction set. Culminating in you making your own programs in the machine code we develop.

This HW will primarily have you interacting with the fetch->decode->execute loop that is at the core of most CPUs. Rather than building this CPU from the simulated gates up, we will be working more top-down, working from the things that a CPU needs to do and then implementing it into code. 

It should be said that this is not exactly how real CPUs work, after all they do not have the liberty of switch cases or the operators in C. This is however technically a virtual machine simulating a fake CPU that I designed. 



---

