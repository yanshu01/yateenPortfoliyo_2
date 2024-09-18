import erp from "../Assets/erp.png";
import wait from "../Assets/wait.png";
import Landing from "../Assets/Landing.png";
import tennis from "../Assets/tt.png";
import mario from "../Assets/mario.png";
import shl from "../Assets/shl.png"
import openinapp from "../Assets/openinapp.png"

export default function projects_data() {
  const projects = [
    {
      heading: "Gym Website For FLEX (Gym)",
      description: `I designed and developed a modern, user-friendly gym website
       to help users explore gym facilities, view training schedules, book classes,
        and access personalized fitness services. The website showcases the gym’s 
        features, including equipment, trainers, and nutrition plans, through an
         engaging layout and visual presentation..`,
      tech: ["React", "JavaScript", "Tailwind", "Node JS"],
      img: erp,
      github: "https://lnkd.in/ehvGcFQX",
      link: "https://main--flexgym01.netlify.app/",
    },

    {
      heading: "E Commerce Website",
      description: `I developed a fully functional eCommerce platform designed to
       provide users with a seamless and intuitive shopping experience. The website 
       allows users to browse products.`,
      tech: [
        "React",
        "Node",
        "JavaScript",
        "Express",
        "Tailwind css",
      ],
      img: Landing,
      github: "https://github.com/yanshu01/E-com",
      link: "https://main--ecomshopy.netlify.app/",
    },

    {
      heading: "BookMarker ",
      description: ` developed an innovative web app that allows users to bookmark their reading progress using NFC and QR technology. The app provides a seamless way to mark the last page read in a book, enabling users to resume their reading without hassle. By integrating NFC and QR scanning, users can easily update and track their bookmarks digitally.`,
      tech: ["React", "HTML/CSS", "Tailwind", "Node"],
      img: tennis,
      github: "https://github.com/yanshu01/Bookmarker",
      link: "##",
    },

    
  ];

  return projects;
}
