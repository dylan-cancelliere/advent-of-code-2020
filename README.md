# advent-of-code-2020
My solutions for Advent of Code 2020 with the goal of improving my vanilla JavaScript abilities. Also my first foray into VSCode, so a learning experience on all fronts.
## Usage
Navigate to the directory corresponding to the day of the challenge you wish to view and run `node app.js`
## Solution Commentary
### Day 1 
- Part 1
  - After finding my solution and looking at how other people approached the problem, it was clear that I should have used a set instead of a dictionary, as my usage of the dictionary was exactly what sets were designed to do. But, otherwise it seemed like I had the right algorithm, the only issue being that my data structure had a little extra overhead and would be less performant
  - My solution is probably close to the best time complexity attainable for this solution, but the memory complexity is atrocious. If for whatever reason my memory usage was more constrained and I cared less about time complexity, it would make more sense to use a slower algorithm with arrays, or possibly for very large data sets to build a database
- Part 2
  - I spent a little while thinking and couldn't come up with a particularly clever way to solve this problem. My previous method of using a dictionary/set didn't seem to work, as I was no longer just finding a number's compliment. Another approach I considered, which I had initially considered for the first problem, was sorting the data and then performing a binary search. In the end I decided on an algorithm that probably wasn't the most efficient, but was pretty straightforward to write and easy to understand
### Day 2
- Part 1
  - Recently, I've been writing a decent amount of C, and I've become really accustomed to the `fscanf()` function. Unfortuantely, it seems that in JS I have two main options when it comes to string parsing: `String.prototype.split` and writing a regex. The regex route is undoubtedly more efficient, but it seemed like it was going to take too much time to be worth it for a more novice regex former like myself, and I have serious doubts on the actual performance differences anyways. So, while not particularly elegant, I `string.split()`'d my way to a solution, which seemed to work well enough
- Part 2
  - Not writing the regex was definitely the right move. I barely had to make any adjustments to my code to get it to work for the second part of this challenge, which felt great
### Day 3
- Part 1
  - Day 3 was pretty uneventful. The algorithm was a pretty basic iterate through a list and check at an index problem, with the added twist of needing to use the modulus operator to 'wrap around' the array. To be clear, I did enjoy the challenge. I tend to like writing algorithms with a little math in them (although not too much)
- Part 2
  - Not too much to add, with only a couple small modifications my original function worked perfectly for part 2 of this day. These first few challenges I've completed all on the 3rd of December, so now that I'm caught up I'm excited to see what the future  challenges are going to be
### Day 4
- Part 1
  - Today was a decent uptick in difficulty. I revisited a few of the concepts I had been thinking about for earlier challenges, namely sets and regex's. The first part seemed sort of awkward to write, although my solution was decent enough. I don't frequently use while loops inside for loops in the way I did to implement this solution, but it made a lot of sense to do so and seemed to work alright
- Part 2
  - I'm a little conflicted on the code I wrote today. On one hand, I had a lot of fun and became more comfortable writing simple regex's. I still definitely use regexr.com for every expression I write, but I imagine that need will go away with practice. On the other hand, I had a ton of nested conditionals, and overall my code didn't feel very elegant and took a considerable amount of time to write. I think some of that was unavoidable due to the number of different conditions I had to check for, but I'm going to spend some time looking at other people's submissions tomorrow to see where I could make improvements in my code.