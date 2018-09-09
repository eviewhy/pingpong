var Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log("looged in");
});

bot.on('message', msg => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (msg.content.substring(0, 1) == '!') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'z':
                msg.channel.send('zane is the best programmer evie knows')
            break;
        case 'j':
                var bestQuote = [
                    "13 year olds are the meanest people in the world. They terrify me to this day.", 
                    "Anyone who’s seen my dick and met my parents needs to die. I can’t have them roaming around.",
                    "You have the moral backbone of a chocolate éclair.",
                    "We’ve been on the road for three hours. And in the distance, we see a McDonald’s. We see the golden arches. And we got so excited. We started chanting, 'McDonald’s! McDonald’s! McDonald’s! McDonald’s!' And my dad pulled into the drive-thru, and we started cheering. And then, he ordered one black coffee for himself. And kept driving.",
                    "Why do people shush animals? They've never spoken",
                    "Honestly, when I’m walking down the street, no one’s ever like, 'Hey, look at that man!' I think they’re just like 'Whoa! That tall child looks terrible!'",
                    "Because if you watch cartoons, quicksand is like the third biggest thing you have to worry about in adult life, behind real sticks of dynamite and giant anvils falling on you from the sky.",
                    "Ey, if you’re comin’ to visit, take I-90 ‘cause I-95 has a little quicksand in the middle.",
                    "Luckily, I had a good alibi since I was in Wisconsin and 12.",
                    "That would be like if you’re going out of town for the week and you paid a horse to watch your dog.",
                    "You seen this shit? You seen this Home Alone 2: Lost in New York shit? It’s a grid system, motherfucker! Where you at? 24th and 5th? Where you wanna go? 35th and 6th? 11 up and 1 over, you simple bitch!!",
                    "I think the bullying that young people have to go through now is really rough, I really sympathize, ‘cause I was bullied when I was a kid. When I was in grade school, I was bullied for being Asian-American. Aaaand, the biggest problem with that… is that I am not Asian-American.",
                    "If I’m on the street on like a Friday at 3 PM and I see a group of 8th graders on one side of the street, I will cross to the other side of the street.",
                    "8th graders will make fun of you, but in an accurate way. They will get to the thing that you don’t like about you. They don’t even need to look at you for long, they’ll just be like, 'Ha ha ha ha ha! Ha ha ha ha ha! Hey, look at that high-waisted man! He got feminine hips!",
                    "Now when people make fun of me, I deserve it.",
                    "When people get mad at me now, it’s my fault, when people get mad at me on the highway that’s all my bad, I’m a terrible driver, I know nothing about cars.",
                    "I’m one of the worst drivers I’ve ever seen, and I just want you all to know that if you’re ever on the highway behind me, uh, I hear you honking and I also don’t want me to be doing what I’m doing. I don’t like that I’m in that lane either, and I sure would like to get out of it!",
                    "Cars were pulling up and looking over to see who just did that piece of shit move, expecting to see like a 100-year-old blind dog who’s texting while driving and drinking a smoothie, instead they see a 28-year-old healthy man trying his best.",
                    "No, you can’t say like the 'f'-word, you can’t say that on Special Victims Unit, but people walk around on SVU going like, 'Looks like the victim had anal contusions. Yo, looks like we found semen and fecal matter in the victim's ear canal.",
                    "Or like when some smokes too many cigarettes? Or like when someone shops too much with credit cards? Or like when someone plays too many scratchy lotteries? Or like when someone eats too much chocolate cake? Or like when someone eats too much chocolate cake and then barfs it up?",
                    "A couple years ago, I saw this movie called Public Enemies with Johnny Depp, it was about old bank robbers and stuff. Here’s how easy it was to get away with bank robbery back in the 30’s. As long as you weren’t still there when the police arrived, you had a 99% chance of getting away with it.",
                    "'Ha ha ha! And if anyone asks, you tell em it was Golden Joe and the Suggins Gang!' And then they like shoot 'Suggins' into the side of the wall. It’s like, what, were bullets free back then?",
                    "Percentage-wise, it is 100% easier not to do things than to do them. And so much fun not to do them! Especially when you are supposed to do them. In terms of, like, instant relief, cancelling plans is like heroin. It is an amazing feeling. Such instant joy.",
                    "Uhh, the New York Post is my favorite newspaper. I think it’s great, I read it every day. I like reading the New York Post because reading the New York Post is like talking to someone who heard the news, and now they’re trying to give you the gist.",
                    "My dad came home from work, and my mom told my dad that she had cleaned under my bed and found a shoebox with two cigarettes and a Cosmopolitan to which prompted my dad to ask, 'How does John know how to make a cosmopolitan?'",
                    "Sometimes when people order fries, [playfully] they act like it’s a little adventure. They’ll be like, 'Should we get a plate of fries for the table? Should we do it? Should we-should we share some fries?' They gotta make sure that everyone’s onboard with it, it’s like, 'If I get fries, you’ll have a couple, right? If I get fries for the table, you’ll have — I know you’ll have fries if I get fries — should we do it? Yeah, let’s be bad! C’mon, let’s do it, all right, we’re gonna take a plate of fries!",
                    "Like I try to travel alone sometimes you know and I’ll put up with anything. Like I'll book a ticket on some garbage airline. You know I don’t want to name any actual airline so lets just make one up and so let's just call it Delta Airlines.",
                    "We all ran in different directions, I ran into the laundry room and I jumped up on the washing machine and I crawled out through a window into the backyard and now I’m running through the backyard and there was this big chain link fence and I thought, 'I’ve never climbed a fence that high before.' And then I woke up at home.",
                    "I have a lot of strange interactions on the street. Years ago, I was walking down the street and a homeless guy came up to me. And he walked up to me he pushed me like that, he pushed me in the chest. And then he said these things in this order. He pushed me and he said, 'Excuse me, I am homeless, I am gay, I have aids, I’m new in town.'",
                    "It was as if a ghost had been trapped in my belly and finally flew out towards the light.",
                    "The moral of the story is… that if you’ve been nervous your entire life, you should ask your doctor about Xanax because if you lie to him, he will stick his finger in your ass. And if you do suffer from frequent urination, keep it to yourself.",
                    "Because I was over on the bench!!!",
                    "We invite a woman here with homemade puppets to teach you about bullying through skits and you laugh at this woman? We noticed you had all been bullying each other and making fun of everything constantly. So we invite a woman with straight gray hair, in a denim dress, with a wrist-cast and homemade puppets that all have the same voice to teach you about bullying through skits, and you, ha-ha-ha, laugh it up. What was so funny about that woman? I want to know. What was so funny about when she couldn’t fit the box of puppets back into the trunk of her Dodge Neon? What was so hilarious that you all ran to the windows? Well, you all missed a valuable lesson on the danger of cliques.",
                    "The greatest assembly of them all, once a year, Stranger Danger. Yeah, the hottest ticket in town. The Bruno Mars of assemblies. You are gathered together as a school and you are told never to talk to an adult that you don’t know and you are told this by an adult that you don’t know.",
                    "Bittenbinder wore three-piece suits. He also wore a pocket watch. Two years in a row, he wore a cowboy hat. He also had a huge handlebar mustache. None of that matters, but it’s important to me that you know that. He did not look like his job description. He looked like he should be the conductor on a locomotive powered by confetti. But, instead, he made his living in murder. He was the weirdest goddamn person I ever saw in my entire life. He was a man most acquainted with misery. He could look at a child and guess the price of their coffin.",
                    "So Bittenbinder came every year with a program to teach us about the violent world waiting for us outside the school gym, and that program was called Street Smarts! 'Time for Street Smarts with Detective JJ Bittenbinder. Shut up! You’re all gonna die. Street Smarts!' That was the general tone. He would give us tips to deal with crime.",
                    "Bittenbinder, he didn’t want us to not get kidnapped. He wanted us to almost get kidnapped and then fight the guy off using weird, psych-out, back-room Chicago violence.",
                    "I am 35 years old and I am still terrified of secondary locations. If I’m at a place, I never want to go to another place.",
                    "You see, what had happened, New York, was that when I was a student, I had paid them tuition money. Every semester, two semesters a year, for four years. I don’t remember exactly what it was, but rounding up, back in 1999 dollars, it was about $15,000 a semester, two semesters a year, for four years. So it was about $30,000 a year for four years. So it was about $120,000, okay? So roughly speaking, I gave my college about $120,000. Okay, so you might say that I already gave them $120,000 and now you have the audacity to ask me for more money.",
                    "What is college? Stop going until we figure it out. Because I went to college, I have no idea what it was. I went to college, I was 18 years old, I looked like I was 11. I lived like a goddamn Ninja Turtle. I didn’t drink water the entire time. I lived on cigarettes and alcohol and Adderall.",
                    "College was like a four-year game show called Do My Friends Hate Me or Do I Just Need to Go to Sleep? But instead of winning money, you lose $120,000.",
                    "How dare you clap? How dare you clap for the worst financial decision I ever made in my life? I paid $120,000 for someone to tell me to go read Jane Austen and then I didn’t.",
                    "That is way better than walking across a stage at graduation, hungover, in a gown, to accept a certificate for reading books that I didn’t read. Strolling across a stage, the sun in my eyes, my family watching as I sweat vodka and ecstasy, to receive a four-year degree in a language that I already spoke.",
                    "Dear IRS, please deduct from my federal income tax one XXL Billabong T-shirt from youth. It was too big. My mom said it could be a sleep shirt. Please deduct this from my 2017 income.",
                    "I’m gross. I have hair on my shoulders now. I don’t even have a joke for that. That’s how much I hate that shit.",
                    "I can’t listen to any new songs because every new song is about how tonight is the night and how we only have tonight. That is such 19-year-old horseshit.",
                    "I want to write songs for people in their 30s called 'Tonight’s No Good, How About Wednesday? Oh, You’re in Dallas on Wednesday? Okay. Well, Let’s Just Not See Each Other for Eight Months And It Doesn’t Matter at All.'",
                    "I smell a robot. Prove, prove, prove. Prove to me you’re not a robot. Look at these curvy letters. Much curvier than most letters, wouldn’t you say? No robot could ever read these. You look, mortal, if ye be. You look and then you type what you think you see. Is it an E or is it a 3? That’s up to ye. The passwords of past you’ve correctly guessed, but now it’s time for the robot test! I’ve devised a question no robot could ever answer. Which of these pictures does not have a stop sign in it?",
                    "When my wife walks down the street, she does not give a shit what anyone thinks of her in any situation. She’s my hero. When I walk down the street, I need everybody, all day long, to like me so much. It’s exhausting. My wife said that walking around with me is like walking around with someone who’s running for mayor of nothing.",
                    "My dad once grabbed me by the shirt and lifted me up during church and said, 'God can’t hear you.'",
                    "Bread is God is bread ♪ ♪ Is God is bread ♪ ♪ Is God is bread.",
                    "My vibe is more like, 'Hey, you could pour soup in my lap and I’ll probably apologize to you.'",
                    "I grew up Catholic. I don’t go to church anymore. But I went on Christmas Eve with my parents, ’cause you know how you lie to your parents. So… we go into the church and I was like, 'I got this under control.' And then I got schooled because they introduced a bunch of new shit.",
                    "Oh, yes, and what a mighty king I will be, eating dinner at 4:45 in the afternoon.",
                    "Craig and Stacia are looking for a two-story A-frame that’s near Craig’s job in the downtown, but also satisfies Stacia’s need to be near the beach which is nowhere near Craig’s job. With three children and nine on the way, and a max budget of $7, let’s see what Lori Jo can do on this week’s episode of You Don’t Deserve A Beach House.",
                    "No one wants to applaud the penis of a 32-year-old weirdo",
                    "Well… you know how I’m filled with rage? I’m so horny and angry all the time… and I have no outlet for it. So… eggs.",
                    "I don’t know. I know you told me. But I have had a very long day. I am very small. And I have no money. So you can imagine the kind of stress that I am under.",
                    "Hey, doesn’t anyone wanna know why… his dick was near my biters… in the first place? Isn’t anyone curious… as to how I had access?",
                    "We had a rule in our house, you were not allowed to watch TV on a school night. So, every school night, I would 100% be watching TV.",
                    "I worked at an office once on 57th Street in New York City. I was there for a couple weeks. I was in a cubicle next to this other cubicle. This woman named Mischa sat in the other cubicle. I want to get the number right. I think Mischa had… about 900,000 photos of her daughter up in her cubicle.",
                    "Like old, old, old money. Like, his money was in molasses or something.",
                    "Ah! One feels like a duck splashing around in all this wet! And when one feels like a duck, one is happy!",
                    "Too old to be a duckling. Quack, quack.",
                    "Eat ass, suck a dick and sell drugs.",
                    "Based on my ten-year-old memory, Bill Clinton is about 13 feet tall.",
                    "I’m either having a drink or I have to pee, you’re livin’ the golden years, kid, not me."
                ];
                var randomQuote = bestQuote[Math.floor(Math.random() * bestQuote.length)];
                msg.channel.send(randomQuote);
            break;
        case 'pr': 
            var prQuotes = [
                "Everywhere I go, I'm walking on red carpet.",
                "TREAT YO' SELF!",
                "Never half-ass two things. Whole-ass one thing.",
                "I'm a simple man. I like pretty, dark-haired women and breakfast food.",
                "I hate talking to people about things.",
                "When life gives you lemons, you sell some of your grandma's jewelry and you go clubbin'.",
                "I am big enough to admit that I'm often inspired by myself.",
                "I have no idea what I'm doing, but I know I'm doin git well.",
                "'Cause windows are the eyes to the house.",
                "If there were more food and fewer people, this would be a perfect party.",
                "Everything nurts and I'm dying.",
                "Sophisticated with a hint of slutty.",
                "You poetic, noble land mermaid.",
                "Time is money, money is power, power is pizza, and pizza is knowledge.",
                "Ovaries before brovaries",
                "My whole life is a giant mess and I love it.",
                "I hope you brought a change of clothes because your eyes are about to piss tears.",
                "I have never taken the high road. But I tell other people to ‘cause then there’s more room for me on the low road.",
                "I don't want to brag, but I've got a ton of experience with women being mad at me.",
                "I stand behind my decision to avoid salad and other disgusting things.",
                "You're as guilty as you are sexy.",
                "Warning: High levels of swagger coming through.",
                "Everything hurts. Running is impossible.",
                "BA-BA-BOOEY",
                "Clear alcohols are for rich women on diets.",
                "You are a beautiful, talented, brilliant, powerful musk ox.",
                "When April was born I was already in third grade, which means if we were friends back then I would have been hanging out with a baby. I don't know anything about infant care. Oh my god I could have killed her.",
                "I also think it's pointless for a human to paint scenes of nature when they can go outside and stand in it.",
                "Oh dude, you forgot to put a shirt on. Don't worry I do it all the time.",
                "Love…love fades away, but things…things are forever.",
                "Guys love it when you can show them you're better than they are at something they love.",
                "I think Comic Sans always screams FUN.",
                "Sometimes you gotta work a little so you can ball a lot.",
                "The less I know about other people’s affairs, the happier I am. I’m not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
                "Veganism is the sad result of a morally corrupt mind. Reconsider your life.",
                "I love games that turn people against each other.",
                "When I walked in this morning I saw that the flag was at half mast, I thought, ‘All right, another bureaucrat ate it!’ And then I saw it was Lil’ Sebastian. Half-mast is too high. Show some damn respect.",
                "One time I accidentally drank an entire bottle of vinegar. I thought it was terrible wine.",
                "You may have thought you heard me say I wanted a lot of bacon and eggs, but what I said was: Give me all the bacon and eggs you have.",
                "Fishing relaxes me. It’s like yoga, except I still get to kill something.",
                "I don’t even want to be here. The air is too fresh. It’s disgusting. I can’t breathe.",
                "When life gives you lemons make lemonade. I read that one on a can of lemonade. I like to think it applies to life.",
                "We have to remember what’s important in life: friends, waffles, and work. Or waffles, friends, work. But work has to come third.",
                "There has never been a sadness that can’t be cured by breakfast food.",
                "I'm allergic to sushi. Every time I eat more than 80 pieces, I barf.",
                "Dress code? Black tie optional. Just like life.",
                "What I hear when I'm being yelled at is people caring loudly at me.",
                "Behind every successful man is me, smiling and taking partial credit.",
                "I don’t care about that prize. But I’m gonna win because I want his happiness to go away.",
                "I hope no one minds if I live tweet this bitch",
                "The bankrupt government of Pawnee has been shut down all summer so it's been three months of no work, no meetings, no memos, no late nights, nothing. I wouldn't wish it on my worst enemy.",
                "I wonder who else was born in Eagleton. Voldemort, probably.",
                "Do you have a first date outfit I could borrow? Like, I don't know a pair of cargo pants?",
                "I call this turf 'n' turf. It's a 16-ounce T-bone and a 24-ounce porterhouse. Also, whisky and a cigar. I am going to consume all of this at once because I am a free American.",
                "There’s a booth over there selling something called 'fried sausage quilts,' so I’m going to buy the booth.",
                "I guess some people object to powerful depictions of awesome ladies.",
                "Well I am not usually one for speeches. So, Goodbye.",
                "I love you and I like you.",
            ];
            var randomPR = prQuotes[Math.floor(Math.random() * prQuotes.length)];
            msg.channel.send(randomPR);
            break;
            // Just add any case commands if you want to..
         }
     }
});
bot.login(process.env.BOT_TOKEN);
