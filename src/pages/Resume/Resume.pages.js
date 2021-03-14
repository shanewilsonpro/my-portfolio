import React from 'react';
import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

import CustomButton from "../../components/Button/CustomButton.components.js";
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/CustomTimeline.components.js";
import resume from '../../utils/resume';
import './Resume.pages.css';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Resume = () => {
    return (
        <>
            {/* About me */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resume.about}</Typography>
                </Grid>
            </Grid>

            {/* Education and experience */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Experiences' icon={<WorkIcon />}>
                                {resume.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{experience.title}</Typography>
                                            <Typography variant='caption' className='timeline_data'>{experience.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Education' icon={<SchoolIcon />}>
                                {resume.educations.map((education) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_data'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='section graybg pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Skills</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={3}>
                        {resume.skills.map((skill) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={0} className='skill'>
                                    <Typography variant='h6' className='skill_title'>
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map((element) => (
                                        <Typography variant='body2' className='skill_description'>
                                            <TimelineDot variant={'outlined'} className='timeline_dot' />
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Contact */}
            <Grid container spacing={5} className='section pt_45 pb_45'>

                {/* Contact form */}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Form</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text='Submit' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Information</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo_item'>
                                        <span>Address: </span> {resume.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo_item'>
                                        <span>Phone: </span> {resume.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo_item'>
                                        <span>Email: </span> {resume.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className='contactInfo_socialsContainer'>
                                {Object.keys(resume.socials).map((key) => (
                                    <Grid item className='contactInfo_social'>
                                        <a href={resume.socials[key].link}>
                                            {resume.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Resume;