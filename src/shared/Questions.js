import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AdbIcon from "@mui/icons-material/Adb";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

export const categories = [
  {
    name: "Technology",
    id: 1,
    icon: <AdbIcon fontSize="large" />,
  },
  {
    name: "Nature",
    id: 2,
    icon: <ForestOutlinedIcon fontSize="large" />,
  },
  {
    name: "Politics",
    id: 3,
    icon: <FlagOutlinedIcon fontSize="large" />,
  },
  {
    name: "Sports",
    id: 4,
    icon: <SportsBasketballOutlinedIcon fontSize="large" />,
  },
];

export const questions = {
  Nature: [
    {
      que: "Which of the following is the largest rainforest in the world?",
      options: [
        "Congo Rainforest",
        "Daintree Rainforest",
        "Amazon Rainforest",
        "Sundarbans",
      ],
      answer: "Amazon Rainforest",
    },
    {
      que: "What gas do plants absorb from the atmosphere to perform photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon Monoxide", "Carbon Dioxide"],
      answer: "Carbon Dioxide",
    },
    {
      que: "Which of these animals is considered a keystone species in many forest ecosystems?",
      options: ["Elephant", "Rabbit", "Crow", "Deer"],
      answer: "Elephant",
    },
    {
      que: "What is the main source of energy for life on Earth?",
      options: ["Moon", "Sun", "Volcanoes", "Ocean Currents"],
      answer: "Sun",
    },
    {
      que: "Which of these is a renewable natural resource?",
      options: ["Coal", "Petroleum", "Wind", "Natural Gas"],
      answer: "Wind",
    },
  ],
  Technology: [
    {
      que: "Which programming language is primarily used for developing Android apps?",
      options: ["Swift", "Kotlin", "Python", "JavaScript"],
      answer: "Kotlin",
    },
    {
      que: "What does 'HTTP' stand for in web technology?",
      options: [
        "HyperText Transfer Protocol",
        "High Tech Transfer Protocol",
        "HyperText Transmission Process",
        "Hyperlink Transmission Protocol",
      ],
      answer: "HyperText Transfer Protocol",
    },
    {
      que: "Which company developed the first commercially successful graphical user interface (GUI)?",
      options: ["Apple", "Microsoft", "IBM", "Xerox"],
      answer: "Xerox",
    },
    {
      que: "What is the main function of a DNS (Domain Name System)?",
      options: [
        "Send emails",
        "Host websites",
        "Translate domain names to IP addresses",
        "Manage databases",
      ],
      answer: "Translate domain names to IP addresses",
    },
    {
      que: "Which type of technology is used in cryptocurrency transactions?",
      options: [
        "Artificial Intelligence",
        "Cloud Computing",
        "Blockchain",
        "Quantum Computing",
      ],
      answer: "Blockchain",
    },
  ],
  Politics: [
    {
      que: "Which of the following is a feature of a democratic government?",
      options: [
        "Rule by one",
        "Rule by a few",
        "Rule by law",
        "Rule by divine right",
      ],
      answer: "Rule by law",
    },
    {
      que: "Who is the head of the state in a parliamentary system of government?",
      options: [
        "Prime Minister",
        "President",
        "Chief Justice",
        "Speaker of the House",
      ],
      answer: "President",
    },
    {
      que: "What is the primary function of the legislature?",
      options: [
        "Interpret laws",
        "Implement laws",
        "Make laws",
        "Enforce laws",
      ],
      answer: "Make laws",
    },
    {
      que: "Which political ideology emphasizes individual liberty and limited government intervention?",
      options: ["Socialism", "Liberalism", "Communism", "Totalitarianism"],
      answer: "Liberalism",
    },
    {
      que: "Which of the following rights is guaranteed by the Indian Constitution under the Right to Equality?",
      options: [
        "Right to form associations",
        "Right to education",
        "Abolition of untouchability",
        "Right to property",
      ],
      answer: "Abolition of untouchability",
    },
  ],
  Sports: [
    {
      que: "Which country has won the most FIFA World Cup titles?",
      options: ["Germany", "Brazil", "Argentina", "France"],
      answer: "Brazil",
    },
    {
      que: "In which sport is the term 'Love' used for a score of zero?",
      options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
      answer: "Tennis",
    },
    {
      que: "Who holds the record for the most Olympic gold medals?",
      options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Mark Spitz"],
      answer: "Michael Phelps",
    },
    {
      que: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
      options: ["China", "Japan", "Brazil", "Russia"],
      answer: "Japan",
    },
    {
      que: "Which cricketing nation won the ICC Men's Cricket World Cup in 2019?",
      options: ["India", "Australia", "England", "New Zealand"],
      answer: "England",
    },
  ],
};
