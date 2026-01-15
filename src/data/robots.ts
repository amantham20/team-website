export interface Robot {
  year: string;
  name: string;
  game: string;
  description: string;
  slug: string;
  highlights: string[];
  awards: string[];
}

export const robots: Robot[] = [
  {
    year: "2024",
    name: "Crescendo Bot",
    game: "Crescendo",
    slug: "2024-crescendo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlights: ["Swerve Drive", "Vision Processing", "Note Launcher"],
    awards: ["Regional Finalist", "Innovation in Control"],
  },
  {
    year: "2023",
    name: "Charged Up Bot",
    game: "Charged Up",
    slug: "2023-charged-up",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: ["Telescoping Arm", "Vacuum Gripper"],
    awards: ["Excellence in Engineering"],
  },
  {
    year: "2022",
    name: "Rapid React Bot",
    game: "Rapid React",
    slug: "2022-rapid-react",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    highlights: ["Double Intake", "High Hub Shooter"],
    awards: ["Regional Winner"],
  },
  {
    year: "2021",
    name: "Infinite Recharge At Home",
    game: "Infinite Recharge",
    slug: "2021-infinite-recharge",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlights: ["Improved Shooter", "Path Following"],
    awards: ["Quality Award"],
  },
  {
    year: "2020",
    name: "Infinite Recharge Bot",
    game: "Infinite Recharge",
    slug: "2020-infinite-recharge",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    highlights: ["Turreted Shooter", "Color Sensor"],
    awards: ["Imagery Award"],
  },
  {
    year: "2019",
    name: "Deep Space Bot",
    game: "Destination: Deep Space",
    slug: "2019-deep-space",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    highlights: ["Elevator", "Hatch Intake"],
    awards: ["Spirit Award"],
  },
  {
    year: "2018",
    name: "Power Up Bot",
    game: "FIRST Power Up",
    slug: "2018-power-up",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    highlights: ["Cube Grabber", "Climber"],
    awards: ["Industrial Design Award"],
  },
  {
    year: "2017",
    name: "Steamworks Bot",
    game: "FIRST Steamworks",
    slug: "2017-steamworks",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    highlights: ["Gear Placer", "Fuel Shooter"],
    awards: ["Gracious Professionalism"],
  },
];
