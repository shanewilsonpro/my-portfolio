import React from 'react';

import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

export default {
    name: 'Shane Wilson',
    title: 'Software Developer',

    birthday: '20th October 1994',
    email: 'shanewilsonpro@gmail.com',
    phone: '714-423-8058',

    socials: {
        linkedin: {
            link: 'https://www.linkedin.com/in/shanewilsonpro/',
            text: "Shane Wilson",
            icon: <LinkedIn />,
        },
        github: {
            link: 'https://github.com/shanewilsonpro',
            text: "Shane Wilson",
            icon: <GitHub />,
        },
    },

    about: 'Start the carrer blah blah',

    experiences: [
        {
            title: 'Work 1',
            date: '2018 - Present',
            description: 'Expenses as material breeding insisted building to in. Continual so.'
        },
        {
            title: 'Work 2',
            date: '2017 - 2018',
            description: 'Expenses as material breeding insisted building to in. Continual so.'
        },
        {
            title: 'Work 3',
            date: '2014 - 2017',
            description: 'Expenses as material breeding insisted building to in. Continual so.'
        },
    ],

    educations: [
        {
            title: 'University',
            date: '2018 - Present',
            description: 'Expenses as material breeding insisted building to in. Continual so.'
        },
        {
            title: 'Community College',
            date: '2017 - 2018',
            description: 'Expenses as material breeding insisted building to in. Continual so.'
        },
        {
            title: 'High school',
            date: '2014 - 2017',
            description: 'Expenses as material breeding insisted building to in. Continual so.'
        },
    ],

    skills: [
        {
            title: 'Front-end',
            description: [
                "ReactJS",
                'JavaScript',
                'Bootstrap',
                'HTML/CSS',
                'Flutter',
            ],
        },
        {
            title: 'Back-end',
            description: [
                'NodeJS',
                'Python',
            ],
        },
        {
            title: 'Databases',
            description: [
                'Firebase',
                'MySQL',
                'MongoDB',
            ],
        },
        {
            title: 'Source Control',
            description: [
                'Git',
                'GitHub',
                'Scrum/Agile'
            ],
        },
    ],
};