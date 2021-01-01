interface Skill {
  name: string;

  /**
   * URL for an image to represent the skill
   */
  imageUrl: string;

  /**
   * My familiarity with the skill: Proficient, Fluent, Experienced, etc.
   */
  skillLevel: string;

  /**
   * Something I have to say about this skill
   */
  comment?: string;
}

export const skills: Skill[] = [
  {
    name: "Python",
    imageUrl: "/img/python.png",
    skillLevel: "Fluent",
  },
  {
    name: "Machine Learning",
    imageUrl: "/img/machinelearning.png",
    skillLevel: "Experienced",
  },
  {
    name: "Computer Vision",
    imageUrl: "/img/computervision.png",
    skillLevel: "Familiar",
  },
  {
    name: "JavaScript",
    imageUrl: "/img/javascript.png",
    skillLevel: "Fluent",
  },
  {
    name: "React",
    imageUrl: "/img/react.png",
    skillLevel: "Competent",
  },
  {
    name: "C++",
    imageUrl: "/img/cplusplus.png",
    skillLevel: "Competent",
  },
  {
    name: "Amazon Web Services",
    imageUrl: "/img/aws.png",
    skillLevel: "Familiar",
  },
];
