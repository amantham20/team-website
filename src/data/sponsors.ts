export interface Sponsor {
  name: string;
  tier: "Platinum" | "Gold" | "Silver" | "Bronze";
  logoUrl?: string; // Placeholder for future use
}

export const sponsors: Sponsor[] = [
  { name: "Tech Giant Corp", tier: "Platinum" },
  { name: "Robotics Innovations", tier: "Platinum" },
  { name: "Future Systems", tier: "Gold" },
  { name: "Engineering Solutions Inc", tier: "Gold" },
  { name: "Local Machine Shop", tier: "Silver" },
  { name: "Community Bank", tier: "Silver" },
  { name: "Small Business Partner", tier: "Bronze" },
  { name: "Team Supporter", tier: "Bronze" },
];

export const tierBenefits = {
  Platinum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maxima visibility on robot and website.",
  Gold: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Logo on robot and website.",
  Silver: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Logo on website.",
  Bronze: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Name on website.",
};
