# C Review: Binary Image Memory Reading/Writing

## Due Date: 2/20/26

## Description

In this homework, you will be learning to manipulate information using raw binary. In order to visualize the various binary operations we are doing, we will be using the PBM/PGM/PPM  image formats as a way of quickly writing pixel information directly to memory.

For more info on the PBM/PGM/PPM file format, the Wikipedia page for them is a pretty good resource along side the specifications that I could find:

- [Netpbm Wikipedia Page](https://en.wikipedia.org/wiki/Netpbm)
- [Netpbm Specifications](https://netpbm.sourceforge.net/)
	- [PBM Spec](https://netpbm.sourceforge.net/doc/pbm.html)
	- [PGM Spec](https://netpbm.sourceforge.net/doc/pgm.html)
	- [PPM Spec](https://netpbm.sourceforge.net/doc/ppm.html)

The spark notes version is that "Netpbm" or "**Net**work **P**ortable **B**it**m**ap Format" is a collection of tools and specifications for portable graphics file formats. They have three main types of portable formats that can be opened by nearly any text editor:

- **PBM** (Portable BitMap Format) - Each pixel is either a 1 or 0, for white or black respectively
- **PGM** (Portable GreyMap Format) - Typically, each pixel can be any number between 0-255 signifying how grey the pixel is, with 0 being black and 255 being white
- **PPM** (Portable PixMap Format) - Each pixel now has three numbers ranging from 0-255, for each red, green, and blue color channels

Each type of file defines ways of writing pixels to an image file in a very general way, it is so general I can show the raw form of the file format. The basic one, PBM, binary numbers, 0 to turn off a pixel and 1 to turn it on. The following .pbm file stores a happy face:

```
P1
10 10
0 0 0 0 0 0 0 0 0 0
0 0 1 0 0 0 0 1 0 0
0 0 1 0 0 0 0 1 0 0
0 0 1 0 0 0 0 1 0 0
0 0 0 0 0 0 0 0 0 0
1 0 0 0 0 0 0 0 0 1
0 1 0 0 0 0 0 0 1 0
0 0 1 1 1 1 1 1 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
```

Let's explain line-by-line:

1. `P1` - This is the "magic number" it ultimately decides what format we are using. `P1` specifically refers to the Portable BitMap Format in ascii, rather than in raw bytes, more on this later.
2. `10 10` -  After the magic number, there is two numbers to represent the width and height in that order. These are used to read the rest of the file, automatically making sure that each pixel is put in the correct location.
3. `0 0 0 0 ...` - This is the actual contents of the file. For black and white grey scale images each number represents the value for that pixel to be drawn to the screen.
