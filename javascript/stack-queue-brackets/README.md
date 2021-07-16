# Challenge Summary
<!-- Description of the challenge -->
Write a function called validate brackets
Arguments: string
Return: boolean
representing whether or not the brackets in the string are balanced
There are 3 types of brackets:
Round Brackets : ()
Square Brackets : []
Curly Brackets : {}
## Whiteboard Process
<!-- Embedded whiteboard image -->
![](bracket.PNG)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
O(n)
## Solution
<!-- Show how to run your code, and examples of it in action -->
`{}  `                  	TRUE
`{}(){}  `              	TRUE
`()[[Extra Characters]]`	TRUE
`(){}[[]]`	                TRUE
`{}{Code}[Fellows](())`   	TRUE
`[({}]`	                    FALSE
`(](`	                    FALSE
`{(})`	                    FALSE
