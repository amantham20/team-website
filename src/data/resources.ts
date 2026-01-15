export interface Resource {
  title: string;
  description: string;
  link: string;
}

export interface ResourceCategory {
  name: string;
  resources: Resource[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    name: "Programming",
    resources: [
      { title: "WPILib Documentation", description: "Official FIRST Robotics software documentation.", link: "#" },
      { title: "Java Best Practices", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "#" },
      { title: "Vision Processing with PhotonVision", description: "Guide to implementing vision systems.", link: "#" },
      { title: "Git & GitHub Tutorial", description: "Version control for robotics teams.", link: "#" },
      { title: "Command-Based Programming", description: "Architecture for robust robot code.", link: "#" },
    ],
  },
  {
    name: "CAD / Mechanical",
    resources: [
      { title: "Onshape for FRC", description: "Cloud-based CAD collaborative design.", link: "#" },
      { title: "Drivetrain Design Basics", description: "Sed do eiusmod tempor incididunt ut labore.", link: "#" },
      { title: "FEA for Robotics", description: "Analyzing part strength and weight.", link: "#" },
      { title: "Fastener Guide", description: "Choosing the right bolts and rivets.", link: "#" },
      { title: "Pneumatics 101", description: "Implementing air systems on robots.", link: "#" },
    ],
  },
  {
    name: "Electrical",
    resources: [
      { title: "Wiring Standards", description: "Clean and reliable wiring practices.", link: "#" },
      { title: "CAN Bus Troubleshooting", description: "Ut enim ad minim veniam, quis nostrud.", link: "#" },
      { title: "Power Distribution", description: "Understanding the PDP/PDH.", link: "#" },
      { title: "Sensor Integration", description: "Connecting encoders and limit switches.", link: "#" },
    ],
  },
  {
    name: "Drive Team",
    resources: [
      { title: "Driver Training Drills", description: "Duis aute irure dolor in reprehenderit.", link: "#" },
      { title: "Operator Roles & Communication", description: "Coordinating during match play.", link: "#" },
      { title: "Match Strategy 101", description: "Excepteur sint occaecat cupidatat non.", link: "#" },
    ],
  },
  {
    name: "Scouting / Strategy",
    resources: [
      { title: "Scouting App Guide", description: "How to use our custom scouting software.", link: "#" },
      { title: "Data Analysis and Strategy", description: "Sed ut perspiciatis unde omnis iste.", link: "#" },
      { title: "Alliance Selection Strategy", description: "Preparing for the elimination rounds.", link: "#" },
    ],
  },
];
