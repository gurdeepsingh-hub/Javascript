
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

1. i : With this search is case-insenstive.(A=a)<br/>
2. g : With this search look for all matches. without it search only returns first.<br/>
3. m : Multiline mode.<br/>
4. s : enables dotall mode, that allows a dot `.` to match new line character.([Character class](#character-class))<br/>
5. u : enables full unicode support.<br/>
6. y : Searching at the exact position in the text.<br/>

## Methods
`str.match(regexp)`<br/> `str.replace(regexp,replacement)`<br/>  `regexp.test(str)` returns `ture/false`<br/>

## Character class
we have a phone number like "+7(903)-123-45-67", and we need to turn it into pure numbers: 79031234567.<br/>

**Digit class : `/\d/`   or for inverse `/\D/`**<br/>
**Space class : `/\s/`   or for inverse `/\S/`**<br/>
**Word class : `/\w/`  or for inverse `/\w/`**<br/>
**Unicode class : `/\p{}/u`**<br/>

## Anchors
To match start and end of any string. we use anchor.<br/>

for start ^ <br/>
Example: ```
String.match(/^\d/); // to check if string starts with digit ```

for end $ <br/>
Example: ``` 
String.match(/\w/); // to check if string ends with word ```

[Anchors](./StartAndEnd.js)<br/>


### Multiline Mode
The multiline mode is enabled by the flag `m`.

It only affects the behavior of ^ and $.

In the multiline mode they match not only at the beginning and the end of the string, but also at start/end of line.

Example:[Multiline.js](./Multiline.js)<br/>

