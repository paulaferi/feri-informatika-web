import { defineCollection } from "astro:content";
import { sveltiaLoader } from "astro-loader-sveltia-cms/loader";

const laboratories    = defineCollection({ loader: sveltiaLoader("laboratories") });
const interestGroups  = defineCollection({ loader: sveltiaLoader("interestGroups") });
const staff           = defineCollection({ loader: sveltiaLoader("staff") });
const projects        = defineCollection({ loader: sveltiaLoader("projects") });
const ethicsOpinions  = defineCollection({ loader: sveltiaLoader("ethicsOpinions") });
const studyProgrammes = defineCollection({ loader: sveltiaLoader("studyProgrammes") });
const studentProjects = defineCollection({ loader: sveltiaLoader("studentProjects") });
const conferences     = defineCollection({ loader: sveltiaLoader("conferences") });
const industryPartners= defineCollection({ loader: sveltiaLoader("industryPartners") });
const achievements    = defineCollection({ loader: sveltiaLoader("achievements") });
const news            = defineCollection({ loader: sveltiaLoader("news") });

export const collections = {
  laboratories, interestGroups, staff, projects,
  ethicsOpinions, studyProgrammes, studentProjects,
  conferences, industryPartners, achievements, news,
};