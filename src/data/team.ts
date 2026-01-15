export interface TeamMember {
  name: string;
  role: string;
}

export const members: TeamMember[] = [
  { name: "John Doe", role: "Team Captain" },
  { name: "Jane Smith", role: "Programming Lead" },
  { name: "Alice Johnson", role: "Mechanical Lead" },
  { name: "Bob Brown", role: "Electrical Lead" },
  { name: "Charlie Davis", role: "Business Lead" },
  { name: "Eve White", role: "Media Lead" },
  { name: "Frank Miller", role: "Drive Team" },
  { name: "Grace Wilson", role: "Scouting Lead" },
];

export const mentors: TeamMember[] = [
  { name: "Dr. Robert Smith", role: "Head Mentor" },
  { name: "Sarah Connor", role: "Mechanical Mentor" },
  { name: "Tony Stark", role: "Programming Mentor" },
  { name: "Bruce Wayne", role: "Design Mentor" },
];
