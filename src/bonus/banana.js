/*
Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

1. 'b' + 'a': This concatenates the string 'b' and 'a', resulting in the string "ba."

2. 'a': The unary plus operation is applied to the string 'a.' 
    In JavaScript, if you use the unary plus on a string that cannot be converted to a valid number, 
    it results in NaN (Not a Number).
3. 'ba' + NaN + 'a': The concatenation of "ba," NaN, and "a" results in the string "baNaNa."
4. .toLowerCase(): This method is then applied to convert the entire string to lowercase, resulting in "banana."
**/
