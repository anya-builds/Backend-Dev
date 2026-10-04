## libux native library used by node

help node js to handle async operation across diff os system

event lopp
work thread pool
timeers
async i/o operations

v8 does not provide 
fs operaation
network socket haanding
timers
general event loop foor node js apis

node js need something else?/
node js need another layer to corrdinate this runtime feature

event lopp ->
complete i/o operations
timers-> if some timers are in ready state
pending callbacks
socket activity

thread pool
libuv provides a shared worker thread pool

this pool is used by those operation that cannot be handles efficiently

manay files system operation
crypttographic operation
compression related work

timers ->
libuv help node js track those timers and imp -> determine when the timer is become eligible to execute
timer-> 5 sec delay ->does not mean JS sleeps on the main thread
runtime  record the timer and continue processing other task

