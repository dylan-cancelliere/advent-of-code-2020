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
### Day 5
- Part 1
 - I took a few days off of AoC to study for and then complete my final exams, plus a couple days for some R&R. Part 1 was a pretty standard binary search algorithm, which was a little unfortunate because for whatever reason I don't really enjoy implementing binary search algo's. It might have something to do with the fact that it feels a little like guessing, or maybe it's because I had an awful lab assignment concerning BST's and crib mobiles in one of my CS courses last spring. Regardless, there weren't any weird twists for part one so I was able to get the algorithm implemented easily enough.
- Part 2
 - My first go at it I completely misunderstood what I was supposed to do for this problem (a trend that will be repeated later on). Initially, I tried creating a toString() method of sorts so that I could find the missing seat. When this didn't work, I read the problem a little closer and realized I needed to find the seat +/- 1 of the seat id, rather than the seat itself.
### Day 6
- Part 1
 - Once again, I found myself relying on sets to come to a solution. Thinking back to the challenges I solved last year, I seem to remember doing much more logic pertaining to array operations, and I can't help but wonder if I could have used some other data structure I have since learned to make the challenges easier. I figured if I find myself overwhelmingly bored during break I'd take a look at some of my old solutions and see where I can improve, although in honesty I doubt I'll get around to it.
- Part 2
 - Overall, I found day 6 to be pretty straightforward. The addon from part 1 was that rather than using a set, I mapped each question to the number of times it had been answered, and if that number wasn't equal to the number of members in the group it was thrown out. I did have to do some funky stuff in order to be able to use `Array.prototype.forEach()` to iterate through all the characters in a string, but it was cool to see another way in which the spread operator can be utilized.
### Day 7
- Part 1
 - Day 7 is where things started to get real, at least for my programming knowledge. Starting off, I misread what I was actually supposed to find and did half of what ended up being part 2 before starting part 1. Once I figured out what I was actually supposed to be doing and built the data structure that would hold all my bag-related info, the solution wasn't too bad, although my approach certainly wasn't elegant.
- Part 2
 - Bags in bags in bags (in bags). When it was all said and done, my solution wasn't even that many lines of code, but this challenge took me forever to finish. I think it took me 4 or 5 tries before I figured out how to correctly add the bags up, despite it being pretty clear in the example, and even once I figured that out I had tons of bugs. I expected strings to cast which didn't, typed the wrong variable names, and forgot how to reference dictionaries (or Objects as I've learned they're called in JS). It certainly wasn't my finest day of coding, but all in all my solution ended up being pretty concise and probably as performant as it gets. Plus, it always feels good to write a recursive function that actually works, but boy does it suck to try to debug them.
### Day 8
- Part 1
 - I've been super excited for a problem like day 8's. One of my goals for winter break is to write a super basic emulator. Last year, I remember doing stuff with op codes, and I'm guessing that the problems are going to start going deeper into that kind of thing very soon. Having experience with this type of problem already, part 1 was pretty easy for me to blitz through.
- Part 2
 - Before starting my implementation, I thought for a good amount of time on how to do this problem efficiently, but to no avail. There might be a super cool way to solve this problem that I'll read about later, but I for one was stumped. So, I brute-forced my way through the problem by checking what would happen if I changed each nop and jmp. There was a small bug I ran into where I forgot to reset the command back to it's original state if changing it didn't fix the game, and to fix it I used JSON.stringify()/parse(), which was a pretty cool way to do a deep copy that I was previously unfamiliar with.