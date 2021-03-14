import React from 'react';

import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

export default {
    name: 'Shane',
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
    }
}