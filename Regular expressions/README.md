
# Regular Expression
Regular expression are Pattrens which provides a way to search and replace in text

in Javascript there are two wyas to create a Regular expression(RegExp or reg):

1. long way: `regexp  = new RegExp("Pattren","flag");`
2. short way: `regexp  = /pattren/  or  /pattren/gmi (g,m and i are flags here)`

Slashes are used when we know the regular expression at the code writing time.

When the pattren is gonna initialized dynamically. we need long way.

```
let tag = prompt("What tag do you want to find?", "h2");

let regexp = new RegExp(`<${tag}>`);
``` 

## Flags
it's totally optional but they can affects the search. There are 6 types of flages in Javascript:

1. i : With this search is case-insenstive.(A=a)
2. g : With this search look for all matches. without it search only returns first.
3. m : Multiline mode.
4. s : enables dotall mode, that allows a dot `.` to match new line character.[Character class](#character-class)
5. u : enables full unicode support.
6. y : Searching at the exact position in the text.

## Methods
`str.match(regexp)`, `str.replace(regexp,replacement)`, `regexp.test(str)` returns `ture/false`

## Character class
we have a phone number like "+7(903)-123-45-67", and we need to turn it into pure numbers: 79031234567.

**Digit class : `/\d/`   or for inverse `/\D/`**
**Space class : `/\s/`   or for inverse `/\S/`**
**Word class : `/\w/`  or for inverse `/\w/`**<br/>
**Unicode class : `/\p{}/u`**




