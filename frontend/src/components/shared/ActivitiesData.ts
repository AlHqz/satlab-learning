export const activitiesData ={
    "era3-activity8": {
        title: "FOR THE REWARD!",
        intro: "Bitcoin Mining is often misunderstood as a process that has to do with solving complex math problems, as if you were given a candy by doing your math homework. But in reality, it is more like winning the lottery, the more tickets you have in a given amount of time, the more chances you have of winning the jackpot. But instead of paper tickets, in this case, what we accumulate are hashes (yes, like the ones produced by 'the crusher') and the moment we get the winning hash, we shout it to the rest of the network to add the Bitcoin block we just mined and 'claim' our reward (the newly generated bitcoins).\n\nThis process is repeated every ten minutes in average depending on the total hashing power of the network, and it is what secures the Bitcoin network and allows it to operate without a central authority (like a government or a bank).",    
        subtitle: "How does it work?",
        description: "The Bitcoin protocol has a built-in mechanism to adjust the difficulty of the mining process based on various factors that we'll cover later. Then, after the mining difficulty is automatically adjusted by the network, miners receive a condition to mine the next block that basically tells them 'bring me a hash that starts with this many zeros'. The more zeros, the harder it is to find a valid hash.\n\nBut, what information do miners need to include in the hashing algotrithm in order for it to be valid? or, what ingredients do they need to put in the crusher? Well, that's basically the information in the header (identifier) of the previous block in the chain, along with a magical number called 'nonce' and the exact time of the mining attempt (timestamp). \n\nThe miner's job is to find a 'nonce' that, when combined with the other two ingredients and put in the crusher, generates a hash that meets the difficulty requirement (the one with the required number of leading zeros).",
        tutorial: "What will you do in this activity?",
        steps: [
            "Click as fast as you can to find a valid hash.",
            "Mine the second block of the Bitcoin blockchain!",
        ],
        nextPath: "/era3/activity8/activity"
    }
};