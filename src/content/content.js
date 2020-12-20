import Project1 from "../assets/img/pro11.png";
import Project2 from "../assets/img/pro2.png";
import cmg from "../assets/img/cmg.jpg";

const homeContent = [
  {
    primaryLabelText: "Freelancer ( Fullstack Developer ).",
    secondaryLabelText: "👔",
  },
  {
    primaryLabelText: "I'm also currently available for new projects.",
    secondaryLabelText: "😎",
  },
  {
    primaryLabelText:
      "My interest in make open source library that can help developer to grow and scale.",
    secondaryLabelText: "🚀",
  },
  {
    primaryLabelText:
      "Contact me any kind of website and software developement.",
    secondaryLabelText: "📱",
  },
];

const listOfProjects = [
  {
    id: 1,
    img: Project1,
    link: "https://jalaramyarn.web.app/Home",
    content:
      "Online yarn color selection and send all selected data to whatsapp.",
    tech: "Tech : React, Firebase, webpack ",
    client_project: true,
  },
  {
    id: 2,
    img: Project2,
    link: "https://silly-poitras-45a91f.netlify.app/",
    content: "Online and Live Teample darshan.",
    tech: "Tech : React, Firebase, webpack ",
    client_project: true,
  },
  {
    id: 3,
    img: cmg,
    link: "/",
    content: "",
    client_project: false,
  },
  {
    id: 4,
    img: cmg,
    link: "/",
    content: "",
    client_project: false,
  },
  {
    id: 5,
    img: cmg,
    link: "/",
    content: "",
    client_project: false,
  },
];

export { homeContent, listOfProjects };
