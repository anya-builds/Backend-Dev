// v8 engine => execute js
// fs , timers

// more than v8 engine

## main js thread

normal app JS executes on one main JS thread


## V8 engine
parsing JS 
executes JS
manage call stack
heap memory and performing garbage collection

## node js core apis
fs
http
buffer 
process
timers

core apis => some of this written in js

## c++ bindings
connect js facing apis to naative functionality
js code to communicate  with libuv
os apis
native libraries

## libuv
native library used by node js
event loop
wrker thread pool
timers
async i/o handling

## os
low level work
reading files
writing files
