import React from 'react';

import { Typography } from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import GetAppIcon from "@material-ui/icons/GetApp";

import Image from "../../assets/images/profilePicture.jpg"

import resume from "../../utils/resume";

import './Profile.components.css'
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/CustomTimeline.components.js";
import CustomButton from "../Button/CustomButton.components.js";

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    <a href={link} target="_blank">
                        {text}
                    </a>
                </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resume.name}</Typography>
                <Typography className='title'>{resume.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={Image} alt='' />
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title='Name' text={resume.name} />
                    <CustomTimelineItem title='Title' text={resume.title} />
                    <CustomTimelineItem title='Email' text={resume.email} />

                    {Object.keys(resume.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resume.socials[key].text} link={resume.socials[key].link} />
                    ))}
                </CustomTimeline>

                <div className="button_container">
                    <CustomButton text={'Resume'} icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Profile;