export type Track = "Foundation" | "Developer" | "Business" | "Security" | "Marketing" | "Expert — All" | "Expert — Technical" | "Expert — Business" | "Expert — Security" | "Expert — Marketing";

export type Level = "L1" | "L2" | "L3" | "L4";

export interface Certification {
  code: string;
  name: string;
  track: Track;
  level: Level;
  levelTitle: string;
  duration: string;
  prerequisites: string;
  modules: "Full" | "Roadmap";
}

export const certifications: Certification[] = [
  // Level 1 - Foundation
  { code: "DLTC-BF101", name: "Blockchain Fundamentals", track: "Foundation", level: "L1", levelTitle: "LEVEL 1 - Foundation", duration: "40h", prerequisites: "None", modules: "Full" },

  // Level 2 - Associate
  { code: "DLTC-BD201", name: "Blockchain Developer Associate", track: "Developer", level: "L2", levelTitle: "LEVEL 2 - Associate", duration: "80h", prerequisites: "DLTC-BF101", modules: "Full" },
  { code: "DLTC-BB201", name: "Blockchain Business Associate", track: "Business", level: "L2", levelTitle: "LEVEL 2 - Associate", duration: "60h", prerequisites: "DLTC-BF101", modules: "Full" },
  { code: "DLTC-BS201", name: "Blockchain Security Associate", track: "Security", level: "L2", levelTitle: "LEVEL 2 - Associate", duration: "70h", prerequisites: "DLTC-BF101", modules: "Full" },
  { code: "DLTC-BM201", name: "Blockchain Marketing Associate", track: "Marketing", level: "L2", levelTitle: "LEVEL 2 - Associate", duration: "50h", prerequisites: "DLTC-BF101", modules: "Full" },

  // Level 3 - Specialization (Developer)
  { code: "DLTC-ETH301", name: "Ethereum & Solidity Specialist", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "100h", prerequisites: "DLTC-BD201", modules: "Full" },
  { code: "DLTC-SOL301", name: "Solana Developer Specialist", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "100h", prerequisites: "DLTC-BD201", modules: "Full" },
  { code: "DLTC-HED301", name: "Hedera Hashgraph Developer", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "90h", prerequisites: "DLTC-BD201", modules: "Full" },
  { code: "DLTC-POL301", name: "Polkadot & Substrate Developer", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "110h", prerequisites: "DLTC-BD201", modules: "Roadmap" },
  { code: "DLTC-COS301", name: "Cosmos & IBC Developer", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "100h", prerequisites: "DLTC-BD201", modules: "Roadmap" },
  { code: "DLTC-AVX301", name: "Avalanche Developer Specialist", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "90h", prerequisites: "DLTC-BD201", modules: "Roadmap" },
  { code: "DLTC-WEB301", name: "Web3 Full-Stack Developer", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "120h", prerequisites: "DLTC-BD201", modules: "Full" },
  { code: "DLTC-DFI301", name: "DeFi Protocols & Smart Contracts", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "100h", prerequisites: "DLTC-ETH301", modules: "Roadmap" },
  { code: "DLTC-NFT301", name: "NFT Development & Marketplace", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "80h", prerequisites: "DLTC-BD201", modules: "Roadmap" },
  { code: "DLTC-L2-301", name: "Layer 2 & Scaling Solutions", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "90h", prerequisites: "DLTC-ETH301", modules: "Roadmap" },
  { code: "DLTC-ENT301", name: "Enterprise Blockchain (Hyperledger)", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "100h", prerequisites: "DLTC-BD201", modules: "Roadmap" },
  { code: "DLTC-AIT301", name: "AI + Blockchain Integration", track: "Developer", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "90h", prerequisites: "DLTC-BD201", modules: "Roadmap" },

  // Level 3 - Specialization (Business)
  { code: "DLTC-TKN301", name: "Tokenomics & DeFi Strategy", track: "Business", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "80h", prerequisites: "DLTC-BB201", modules: "Full" },
  { code: "DLTC-CBP301", name: "Central Bank & Regulatory DLT", track: "Business", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "80h", prerequisites: "DLTC-BB201", modules: "Roadmap" },
  { code: "DLTC-NFB301", name: "NFT Business & Brand Strategy", track: "Business", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "60h", prerequisites: "DLTC-BB201", modules: "Roadmap" },
  { code: "DLTC-VCW301", name: "Web3 Venture & Investment", track: "Business", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "70h", prerequisites: "DLTC-BB201", modules: "Roadmap" },
  { code: "DLTC-SCM301", name: "Blockchain Supply Chain Management", track: "Business", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "70h", prerequisites: "DLTC-BB201", modules: "Roadmap" },
  { code: "DLTC-RWA301", name: "Real-World Asset Tokenization", track: "Business", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "80h", prerequisites: "DLTC-BB201", modules: "Roadmap" },

  // Level 3 - Specialization (Security)
  { code: "DLTC-AUD301", name: "Smart Contract Auditing", track: "Security", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "120h", prerequisites: "DLTC-BS201", modules: "Full" },
  { code: "DLTC-ZKP301", name: "Zero-Knowledge Proofs & Privacy", track: "Security", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "110h", prerequisites: "DLTC-BS201", modules: "Roadmap" },
  { code: "DLTC-FOR301", name: "Blockchain Forensics & Investigations", track: "Security", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "80h", prerequisites: "DLTC-BS201", modules: "Roadmap" },

  // Level 3 - Specialization (Marketing)
  { code: "DLTC-CM301", name: "Web3 Community Management", track: "Marketing", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "60h", prerequisites: "DLTC-BM201", modules: "Full" },
  { code: "DLTC-GR301", name: "Crypto Growth & User Acquisition", track: "Marketing", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "70h", prerequisites: "DLTC-BM201", modules: "Full" },
  { code: "DLTC-BRD301", name: "Web3 Brand & Content Strategy", track: "Marketing", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "60h", prerequisites: "DLTC-BM201", modules: "Roadmap" },
  { code: "DLTC-INF301", name: "Crypto Influencer & PR Strategy", track: "Marketing", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "50h", prerequisites: "DLTC-BM201", modules: "Roadmap" },
  { code: "DLTC-DAO301", name: "DAO Governance & Community Building", track: "Marketing", level: "L3", levelTitle: "LEVEL 3 - Specialization", duration: "70h", prerequisites: "DLTC-BM201", modules: "Roadmap" },

  // Level 4 - Expert
  { code: "DLTC-PRO401", name: "DLTC Professional (Full Stack)", track: "Expert — All", level: "L4", levelTitle: "LEVEL 4 - Expert", duration: "200h", prerequisites: "2x L3 certs", modules: "Roadmap" },
  { code: "DLTC-ARC401", name: "DLT Solutions Architect", track: "Expert — Technical", level: "L4", levelTitle: "LEVEL 4 - Expert", duration: "180h", prerequisites: "ETH301 + ENT301", modules: "Roadmap" },
  { code: "DLTC-STR401", name: "Blockchain Strategy Executive", track: "Expert — Business", level: "L4", levelTitle: "LEVEL 4 - Expert", duration: "160h", prerequisites: "TKN301 + CBP301", modules: "Roadmap" },
  { code: "DLTC-SEC401", name: "Principal Blockchain Security Engineer", track: "Expert — Security", level: "L4", levelTitle: "LEVEL 4 - Expert", duration: "180h", prerequisites: "AUD301 + ZKP301", modules: "Roadmap" },
  { code: "DLTC-MKT401", name: "Head of Web3 Growth & Marketing", track: "Expert — Marketing", level: "L4", levelTitle: "LEVEL 4 - Expert", duration: "140h", prerequisites: "CM301 + GR301", modules: "Roadmap" },
];

export const trackColors: Record<string, { bg: string; text: string; border: string }> = {
  Foundation: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  Developer: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  Business: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
  Security: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  Marketing: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  "Expert — All": { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  "Expert — Technical": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  "Expert — Business": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
  "Expert — Security": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  "Expert — Marketing": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
};

export const levelColors: Record<string, string> = {
  L1: "bg-emerald-500",
  L2: "bg-orange-500",
  L3: "bg-blue-500",
  L4: "bg-red-500",
};

export const filterTracks = ["All", "Foundation", "Developer", "Business", "Security", "Marketing", "Expert"] as const;
