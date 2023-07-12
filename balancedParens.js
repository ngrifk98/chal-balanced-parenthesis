/* Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_parens("()")
// true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true
*/

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function has_balanced_parens(string) {
    let count = 0;
  
    for (let char of string) {
      if (char === "(") {
        count++;
      } else if (char === ")") {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }
  
    return count === 0;
  }
  
  console.log("has_balanced_parens('()'):", has_balanced_parens("()")); // true
  console.log("has_balanced_parens('(Oh Noes!)('):", has_balanced_parens("(Oh Noes!)(")); // false
  console.log("has_balanced_parens('((There's a bonus open paren here.)'):", has_balanced_parens("((There's a bonus open paren here.)")); // false
  console.log("has_balanced_parens(')'):", has_balanced_parens(")")); // false
  console.log("has_balanced_parens('('):", has_balanced_parens("(")); // false
  console.log("has_balanced_parens('(This has (too many closes.) ) )'):", has_balanced_parens("(This has (too many closes.) ) )")); // false
  console.log("has_balanced_parens('Hey...there are no parens here!'):", has_balanced_parens("Hey...there are no parens here!")); // true
  
  console.log("has_balanced_parens(sample1):", has_balanced_parens(sample1)); // false
  console.log("has_balanced_parens(sample2):", has_balanced_parens(sample2)); // true
  console.log("has_balanced_parens(sample3):", has_balanced_parens(sample3)); // false
  console.log("has_balanced_parens(sample4):", has_balanced_parens(sample4)); // true
  