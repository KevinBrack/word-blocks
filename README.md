# Letter Blocks

Many household decorations have a series of wooden blocks with letters on each side. They can be arranged in many ways, to spell various words, representing various seasons or holidays. Typically, a set might have the letters to spell out a few words, such as Joy, Boo, Home, etc. with blank spaces being filled with pictures instead of letters. We want to know all possible unique single words that you can create by rearranging the blocks.
Given a set of cubes with one letter on each side, using this wordlist (https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt), output all possible words that use all cubes, with the cubes arranged in any order. Your output should be in alphabetical order.
Your algorithm should work regardless of the number of cubes or faces.

Example:
Input
Cubes`[[O,O,O,O,O,O], [Z,Z,Z,Z,,], [O,O,O,O,O,O]]`
Output
`['zoo']`

Your Input for this Challenge:

```
[['H','L','S','J','U','B'],
['O','O','N','O','S','O'],
['M','V','O','Y','A','O'],
['E','E','W','' ,'' ,'' ]]
```

For example, the string `nob` is valid, but `woo` is not, because that leaves a block unused.

Hint: There are 176 results.

Writing your solution in javascript, please track how long it takes you and any insights you had about hard/easy parts of it, and send me back the completed result within a day or two, if that works for you.

---

### Development Log

#### Monday 8/5/19

I spent a little over an hour getting the environment set up. I downloaded the dictionary of 172k words. That file was a bit of a memory hog in my IDE so I wrapped the dictionary in backticks and pushed each line (word) into an array.

I then created a function `dictFromInput` below the dictionary that recieves the expected input array. Then it returns a hash table with only words with lengths that could be made from the input blocks. Exporting only that function from the `dictionary.js` significantly reduced the strain on my editor.

I spent a little time working towards an initial permutation function.

#### Tuesday 8/6/19

I spent about 2.5 hours total Tuesday

I worked on finishing my permutation function. When I got that running smoothly, I passed in the blocks and quickly got back all the possible combinations of block orders.

After that I was experimenting with running the permutation function on the letters of each block. That's when I realized the second problem was quite a bit different. Instead of getting all the combinations of letters in each block, I needed a function to go through every combination of possible indexes for the block. The origional permutation function would not work that way.

```
[0,0,0,0]
[0,0,0,1]
[0,0,0,2]
...
...
[5,5,5,5]
```

Was actually the result I was looking for to run agains my array of possible block orders. After sketching for a while it came to me that this resembled an odometer. A 4 digit odometer would reach every combination between [0,0,0,0] and [9,9,9,9]. I wanted the same thing but with the "wheel" length being the number of letters on a block, not 10 based.

I was doing a little math to figure out the formula behind the 10 based odometer. Simple when you look at it

| NUMBER     | 4755                                           |                                         |     |     |
| ---------- | ---------------------------------------------- | --------------------------------------- | --- | --- |
| ARRAY      | [4,7,5,5]                                      |                                         |     |     |
| INDEX      | 0                                              | 1                                       | 2   | 3   |
| value      | 4                                              | 7                                       | 5   | 5   |
| represents | 4,000                                          | 700                                     | 50  | 5   |
| formula    | 4755 / indexHeight\*\*array.length - 1 - index | Same with the remainder of position [0] | ... | ... |

I was getting ready to implement this and it fealt a little resource heavy for what I was trying to accomplish. Then it hit me, an odometer works incrementally and mechanically to do this efficently. I modeled the mechanical model with code and sure enough I had all possible combinations of indexes of characters for each block.

### Wednesday 8/7/19

I was pretty sure I had all the pieces I needed to solve this puzzle at this point. It took about 1 more hour to put all the peices together.

I started by pseudocoding my `main` function. Then I used the permutation to get all possible shuffles of the blocks. I looped over each of those combinations and ran the odometer to get each possible combination of characters for that order.

I was a stuck for a moment checking my generated strings against the dictionary. Then I realized the blocks were upper case and the dictionary was lowercase. Everything else fell into place after that.

My final solution returned 176 words in alphabetical order the first try. Felt pretty good. May refactor a little.
