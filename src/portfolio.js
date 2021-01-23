
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Muhammad Omar",
  title: "Hello, I'm Muhammad Omar aka (Omaroovee) ",
  subTitle: emoji("Software Engineer; Loves anything that scales. I am generally interested in building Large-Scale Applications, Cloud Infrastructure, Data Infrastructure, Streaming Systems, Backend/DevOps, and Golang."),
  resumeLink: "https://drive.google.com/file/d/1Xg0-UhjYjvHvzGFQldlKt4KF5HZV6ASr/view?usp=sharing"
}
// Your Social Media Link

const socialMediaLinks = {

  linkedin: "https://www.linkedin.com/in/Omaroovee/",
  twitter: "https://www.twitter.com/Omaroovee",
  github: "https://github.com/Omaroovee",
  gmail: "Omaroovee@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "Topics of Interests",
  subTitle: "These are topics and technologies that I enjoy learning and I enjoy working with/on them.",
  skills: [ ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      image: require("./assets/images/go.png")
    },
    {
      skillName: "Microservices",
      image: require("./assets/images/mircsrvs.png")
    },
    {
      skillName: "Distributed Systems",
      image: require("./assets/images/distrbuitedsys.png")
    },
    {
      skillName: "Docker",
      image: require("./assets/images/docker.png")
    },
    {
      skillName: "Kubernetes",
      image: require("./assets/images/kubernetes.png")
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "High Institute of Computer Science and Information Systems 6th October",
      logo: require("./assets/images/uni.jpg"),
      subHeader: "Bachelor's degree in Computer Science",
      duration: "September 2014 - May 2018",
      desc: "Graduated with Grade: Very Good.",
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "NowPay",
      companylogo: require("./assets/images/np.jpg"),
      date: "Jan 2019 – Present (2 yrs 3 mos)",
      desc: "Working on a product that helps to Improve the financial-wellness of corporate employees.",
      descBullets: [
        "Manage infrastructure on AWS and ensure high availability and reliability of the application.",
        "Develop, record, and maintain cutting edge web-based Nodejs applications.",
        "Architect and implement new features.",
        "Refactor, optimize, and improve the existing codebase for maintenance and scale.",
        "Troubleshoot and fix bugs/flaws to ensure servers are running optimally.",
        "Participate in all phases of the development life cycle.",
        "Implement analytics and monitoring routines."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Omaroovee", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Latest Articles",
  subtitle: "My latest articles published on Medium ",
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20 155 277 7713",
  email_address: "Omaroovee.gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Omaroovee"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
