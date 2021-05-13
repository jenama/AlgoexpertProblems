/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.
 */

 /**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
    //empty string
    let newStr = ''
        //iterate through the string
    for(let i = 0; i < address.length; i++) {
        //declare a variable for address[i]
        let el = address[i]
        //check if the type of element in string is not a number then we add []
        if (el === '.') {
            newStr += el.replace(el, '[.]')
        } else {
             newStr += el
        }
      
    }
    return newStr
};