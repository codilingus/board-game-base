# Overview
This project provides basic API for creating simple board games.

# Usage
1. Create a new directory inside the main directory.
2. Copy there `game.js` and `index.html` files from `empty` directory.
3. Edit `game.js` you may find there two important functions that your file must have:
    1. `initialize()` This function will be called before your program runs. It should contain any code which is necessary to initialize the program, e.g. setting board size, setting speed of refreshing board, initializing variables, etc. If you don't need to set anything specific before running the program, this may be left empty (but not removed!).
    2. `nextStep()` This function should contain code that will be executed with each step of the program. 

# API
Below you can see what already defined functions and constants you may utilize in your `game.js` file.

## Board
Board is always square and contains NxN cells.

### getBoardSize()
Returns board's size.
##### Example
If board is 6x6, it will return 6.

### setBoardSize(newSize)
Sets board size to `newSize`. `newSize` **must** be from range [5, 512].

### clearBoard()
Makes board empty.

### fill(x, y, color) OR fill(x, y)
Fills a cell at (x, y) with color (if provided, otherwise with default color).

### clear(x, y)
Clears cell at (x, y).

### isFilled(x, y)
Returns `false` if cell at (x, y) is empty, `true` if filled.

## Navigation keys
You can utilize up, down, left, right arrow keyboard keys using the following functions and constants.

### Constants
You can use the following global constants, which reflect arrow keyboard keys:
* KEY_RIGHT
* KEY_LEFT
* KEY_UP
* KEY_DOWN
* KEY_EMPTY - when none of the above keys was pressed

### getRecentKey()
Returns a constant (described above) that represents key which was pressed last time (even a few steps before).

At the beginning `getRecentKey()` will return `KEY_EMPTY`.
##### Example
Program runs, in step 7 user presses UP key and in step 15 presses DOWN.

Result:  
In steps 0-6, `getRecentKey()` will return `KEY_EMPTY`.  
In steps 7-14, `getRecentKey()` will return `KEY_UP`.  
In steps 15+, `getRecentKey()` will return `KEY_DOWN`.  

### getLastStepKey()
Returns a constant (described above) that represents key which was pressed exactly during the step in which we are currently. Otherwise returns `KEY_EMPTY`.
##### Example
Program runs, in step 7 user presses UP key and in step 15 presses DOWN.

Result:  
In steps 0-6, `getLastStepKey()` will return `KEY_EMPTY`.  
In step 7, `getLastStepKey()` will return `KEY_UP`.  
In steps 8-14, `getLastStepKey()` will return `KEY_EMPTY`.  
In step 15, `getLastStepKey()` will return `KEY_DOWN`.  
In steps 16+, `getLastStepKey()` will return `KEY_EMPTY`.  

## Other
### setSpeed(newSpeed)
Sets speed of making next steps.


