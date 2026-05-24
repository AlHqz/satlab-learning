const Curriculum = [
  {
    era: "Era 1: Prehistory",
    description: "The problem of trust and barter.",
    activities: [
      { id: 1, title: "The Double Coincidence of Wants", isLocked: true },
      { id: 2, title: "The Material Lab", isLocked: true },
      { id: 3, title: "The Magic Printer", isLocked: true },
      { id: 4, title: "The Cantillion Effect", isLocked: true},
    ]
  },
  {
    era: "Era 2: The Discovery",
    description: "Cypherpunk tools and cryptography.",
    activities: [
      { id: 5, title: "The Crusher (Hashes)", isLocked: true },
      { id: 6, title: "The Safe (Keys)", isLocked: true },
      { id: 7, title: "The Needle Finder (PoW)", isLocked: true },
    ]
  },
  {
    era: "Era 3: The Sovereign Network",
    description: "Bitcoin protocol and the P2P consensus.",
    activities: [
      { id: 8, title: "Just a page (Blocks)", isLocked: true },
      { id: 9, title: "The Immutable Chain", isLocked: true },
      { id: 10, title: "The exchange (Transactions)", isLocked: true },
      { id: 11, title: "Bus Station (Mempool)", isLocked: true },
      { id: 12, title: "Independent Cabins (Nodes)", isLocked: true },
      { id: 13, title: "We all decide (Consensus & descentralization)", isLocked: true },
      { id: 14, title: "Shared knowledge (Distribution)", isLocked: true },
      { id: 15, title: "FOR THE REWARD! (Mining)", isLocked: true },
      { id: 16, title: "Cut it in half (Halving)", isLocked: true },
      { id: 17, title: "21 million (Supply)", isLocked: true},
    ]
  },
  {
    era: "Era 4: The Lightning",
    description: "Scalability with the Lightning Network.",
    activities: [
      { id: 18, title: "The Shared Abacus (Channels)", isLocked: true },
      { id: 19, title: "Scales (Routing)", isLocked: false, path: "/activities/routing" },
      { id: 20, title: "Relay Race (HTLCs)", isLocked: true },
    ]
  }
];
export default Curriculum;