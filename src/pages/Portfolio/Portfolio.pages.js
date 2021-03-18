import React, { useState } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Tab,
  Tabs,
  Typography,
  Grow,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";

import "./Portfolio.pages.css";

import resume from "../../utils/resume";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(resume.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                tabValue === tag ? "customTabs_item active" : "customTabs_item"
              }
            />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resume.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        maxWidth={"md"}
        className="projectDialog"
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt='' className="projectDialog_image" />
        <DialogContent >
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel='noreferrer'
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
