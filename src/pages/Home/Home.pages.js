import React from 'react';
import { Grid, Typography } from "@material-ui/core";

import resume from '../../utils/resume';
import './Home.styles.css';

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
        </>
    )
}

export default Resume;