import React from "react";

import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import WebsiteIcon from "@material-ui/icons/Language";

export default {
  name: "Shane Wilson",
  position: "Software Engineer/Developer",
  age: "28",
  email: "shanewilsonpro@gmail.com",
  phone: "(714) 409-3933",
  address: "Northridge, California",

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/shanewilsonpro/",
      text: "shanewilsonpro",
      icon: <LinkedIn />,
    },
    GitHub: {
      link: "https://github.com/shanewilsonpro",
      text: "shanewilsonpro",
      icon: <GitHub />,
    },
  },

  about:
    "I'm currently looking for the roles to apply for any position in Software " +
    "Engineer/Developer. I received a Bachelor of Science degree in Computer Science " +
    "at the California State University, Fullerton in 2021. I have some knowledge of " + 
    "programming languages Javascript, Python, and C++. I'm still learning more languages " +
    "as I continue to look for a job. I have strong organizational skills and time management. " +
    "However, I'm constantly improving more aspects of myself at my current work. I work as " +
    "self-employed for UberEats, DoorDash, and Instacart to support my bills, but I have more of " +
    "a passion for computers mainly in development.\n\n" +

    "I've attempted many hackathon events to work with my friends and new people as a team for " +
    "projects which has helped me refine my skills in programming and teamwork. I'm always willing " +
    "to learn even more about new things. In my free time, I like to develop my personal projects, " +
    "play video games, and explore new adventures.",

  experiences: [
    {
      title: "UberEats/DoorDash - Delivery Driver",
      date: "2018 - Present",
      description:
        "Completed on-time deliveries by choosing the best and most efficient routes. Actively communicated with customers and merchants. Efficiently solved administrative issues between customers, merchants, and company.",
    },
    {
      title: "Amazon - Part-Time Warehouse Associate",
      date: "2017 - 2020",
      description:
        "Unloaded, picked, staged and loaded products for shipping. Resolved service issues in a timely manner, including coordinating and processing returns. Worked at a rapid pace to meet deadlines.",
    },
  ],

  educations: [
    {
      title: "California State University, Fullerton",
      degree: "B.S. in Computer Science",
      date: "Jan 2018 - May 2021",
      description: "Fullerton, CA.",
    },
    {
      title: "Fullerton Community College",
      degree: "A.A. in Arts",
      date: "Aug 2013 - Dec 2017",
      description: "Fullerton, CA",
    },
    {
      title: "University High School",
      date: "2009 - 2013",
      description: "Irvine, CA",
    },
  ],

  skills: [
    {
      title: "Languages",
      description: ["Python (Proficient)", , "JavaScript (Proficient)", "HTML/CSS (Proficient)", "C++ (Familiar)", "Dart (Familiar)"],
    },
    {
      title: "Frameworks",
      description: ["ReactJS", "Bootstrap", "Flutter", "NodeJS", "React Native", "Angular"],
    },
    {
      title: "Tools",
      description: ["Firebase", "MySQL", "MongoDB", "Git", "GitHub", "GraphQL"],
    },
    {
      title: "Design",
      description: ["Adobe XD", "Figma"],
    },
  ],

  projects: [
    {
      tag: "React-Native",
      image:
        "https://i.ibb.co/k9Hdc6S/bookworm.png",
      title: "Bookworm App",
      caption:
        "The users can upload the book, read the book and mark it as read",
      description:
        "This app will be called Bookworm which the users can upload the book, read the book and mark it as read. This app have login screen which the user have to click to login with their email and password or sign up if they have not. After that, the users will be directed to home screen where they can manage the books. On the navigation bottom of the screen, there are three to navigate to screens; Total Books, Books Reading, and Books Read. On the total book screen where the users can see the list of books or empty if they have not add the books. The user can add the book by typing the book name and click the button to add to the list. They can click the book and upload the image for book or use the camera to take the picture of book. The users can mark as read or remove the book. On the books reading screen, the list of books that are currently reading. On the books read screen, the list of books are done reading.",
      links: [
        {
          link: "https://github.com/shanewilsonpro/bookworm-app",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "React",
      image:
        "https://i.ibb.co/qmpMTY2/hawkyclothing.png",
      title: "Hawky Clothing",
      caption: "E-commerce website for clothing",
      description:
        "This project have navigation and routing that takes the users to different pages of categories of items and from these items, the users will be able to add them to their cart. The users can see these things directly update and from this cart, the users are going to be able to checkout. From there, the users can increase or decrease these items and see the live changes in both checkout page and cart page remove items. There is integrating with Stripe so the users can handle the payments. This project will integrate with firebase to handle authentications especially Google and the storage for shop data.",
      links: [
        { link: "https://hawky-clothing.netlify.app/", icon: <WebsiteIcon /> },
        {
          link: "https://github.com/shanewilsonpro/hawky-clothing",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "HTML/CSS",
      image:
        "https://i.ibb.co/587FyRw/onlienotes.png",
      title: "Online Notes",
      caption: "The users to store their notes online",
      description:
        "This is to build online notes website which will enable users to store their notes online. The users would be able to manage their notes by editing or releasing them. There will be sign up otion for users to store their notes online. After signing up, the users will receive an e-mail message to confirm. There is option to remember username and password the next time the user open the website. It will stay login unless the user clicks logout button. Also there is reset password if the user forgot the password. To create the notes, the users need to click on the add notes button and the notepad will appear. The users can type anything on it then click All notes button to return to the list of notes that the users added. The list of notes have date and time when the users create and add the notes. At the top of notes list, there is the Edit button which can delete the note. If done, the user need to click Done button. In the header of website, the users can click Profile to view their profile info like username, email and password (the password is hidden).",
      links: [
        {
          link: "http://shanewilson.host20.uk/Online-Notes-Website/",
          icon: <WebsiteIcon />,
        },
        {
          link: "https://github.com/shanewilsonpro/Online-Notes-Website",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "NodeJS",
      image:
        "https://i.ibb.co/YZ7RqhG/onlinefileexplorer.png",
      title: "Online File Explorer App",
      caption: "Online file explorer app is using pure Node.js",
      description:
        "A online file explorer on website. When the users enters this page, they can see different folders and files which are located in a directory in the server. They explore these folders and read different files inside them. There is a display the name, size and last modified of each folder. The users can reorder the folders and files by name, size or last modified. If the user clicks the name in header, it will reorder the elements alphabetically. If the user clicks same again, it will reverse the order. Same goes for size and last modified headers.",
      links: [
        {
          link: "https://online-file-explorer-shane.herokuapp.com/",
          icon: <WebsiteIcon />,
        },
        {
          link: "https://github.com/shanewilsonpro/Online-File-Explorer-App",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "HTML/CSS",
      image:
        "https://i.ibb.co/6NK2xS3/drawing.png",
      title: "Drawing App",
      caption: "A simple drawing app on website for the user can draw",
      description:
        "A simple drawing app on website for the user can draw by holding their mouse key and move inside the canvas box. There is several color inputs where the user can pick any color they want. The user can select to control the width of the line they draw. Also there are few buttons; erase, save and reset. The user can click the erase button to erase in the canvas button like drawing. The user can click the save button to save the image of drawn picture. The user can click the reset button to reset to a blank canvas.",
      links: [
        {
          link: "http://shanewilson.host20.uk/Drawing-App/",
          icon: <WebsiteIcon />,
        },
        {
          link: "https://github.com/shanewilsonpro/Drawing-App",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "HTML/CSS",
      image:
        "https://i.ibb.co/LJBc6fX/Companywebsite.png",
      title: "Company Website",
      caption: "Company website using HTML/CSS and Bootstrap",
      description:
        "Just a simple and small project to create the front page of a company which offers web development services. The people can get inspired from these websites or create your own web page and getting them to get in touch with for development projects.",
      links: [
        {
          link: "http://shanewilson.host20.uk/Company-Website/",
          icon: <WebsiteIcon />,
        },
        {
          link: "https://github.com/shanewilsonpro/Company-Website",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "HTML/CSS",
      image:
        "https://i.ibb.co/dpqczsb/Applanding.png",
      title: "App Landing Website",
      caption:
        "The app landing in website to display the new app and what it does",
      description:
        "Just simple and small website for app landing to display the new app and what it does. The purpose for this website is to attract app landing apge that will lead the users through a link to explore great functionalities of an app that is selling on the App Store or Google Play. If they like it, they can click either of them and will be redirected from the page to the App Store or Google Play to purchase the app.",
      links: [
        {
          link: "http://shanewilson.host20.uk/App-Landing/",
          icon: <WebsiteIcon />,
        },
        {
          link: "https://github.com/shanewilsonpro/App-Landing-Website",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "HTML/CSS",
      image:
        "https://i.ibb.co/wcCmCbx/Fruitsslicegame.png",
      title: "Fruits Slice Game",
      caption:
        "In the game, the user have to slice the fruits quickly and earn the score",
      description:
        "The game on website is how fast the user can slice the fruit and earn the score. When the user clicks start button, the game starts and one fruit fall from the sky. The user has to move their mouse on fruit to slice it and get 1 point. So doing that can earn 1 point each fruit. If the user misses the fruit, the user will lose a trial which the user has 3 trials at the start of game. Once all 3 trials are lost, the game is over. The message box will display the user's total score. The user can play again by clicking Start button.",
      links: [
        {
          link: "http://shanewilson.host20.uk/Fruits-Slice-Game/",
          icon: <WebsiteIcon />,
        },
        {
          link: "https://github.com/shanewilsonpro/Fruits-Slice-Game-Website",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "Python",
      image:
        "https://i.ibb.co/V9TP58k/Alieninvasiongame.png",
      title: "Alien Invasion Game",
      caption: "Alien Invasion game using Python and IntelliJ in IDE",
      description:
        "The game Alien Invasion, where the player controls a rocket ship that appears at the bottom center of the screen. The player can move the ship right and left only using the arrow keys and shoot the bullets using the spacebar. When the player clicks the Play button, a fleet of aliens fills in the screen and start moving in the direction right and left and down a little by little. The player shoots and destroy the aliens. If the player shoots all aliens, a new fleet appear again in next level and they moves a little faster than before. So each level the player beat, a fleet of aliens will gain faster and more challenge. If any alien hits the player's ship or reaches the bottom of the screen, the player will lose a ship as live. If the player loses three lives, the game is over.",
      links: [
        {
          link: "https://github.com/shanewilsonpro/Alien-Invasion-Game",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "Python",
      image:
        "https://i.ibb.co/5rrzxtz/Blackjackgame.png",
      title: "Blackjack Game",
      caption: "Blackjack game using pure Python.",
      description: "This is simple game I created for Blackjack using Python.",
      links: [
        {
          link: "https://github.com/shanewilsonpro/Blackjack-Simple-Game",
          icon: <GitHub />,
        },
      ],
    },
  ],
};
