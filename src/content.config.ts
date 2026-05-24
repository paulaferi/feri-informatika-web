import { defineCollection, z } from "astro:content";
import { sveltiaLoader } from "astro-loader-sveltia-cms/loader";

const laboratories    = defineCollection({ loader: sveltiaLoader("laboratories") });
const interestGroups  = defineCollection({ loader: sveltiaLoader("interestGroups") });
const ethicsOpinions  = defineCollection({ loader: sveltiaLoader("ethicsOpinions") });
const studyProgrammes = defineCollection({ loader: sveltiaLoader("studyProgrammes") });
const studentProjects = defineCollection({ loader: sveltiaLoader("studentProjects") });
const conferences     = defineCollection({ loader: sveltiaLoader("conferences") });
const projects        = defineCollection({ loader: sveltiaLoader("projects") });

const staff = defineCollection({
  loader: sveltiaLoader("staff"),
  schema: ({ image }) => z.object({
    name:            z.string(),
    photo:           image().optional(),
    title:           z.string().optional(),
    role:            z.string(),
    email:           z.string().optional(),
    phone:           z.string().optional(),
    office:          z.string().optional(),
    contactHours:    z.string().optional(),
    linkedin:        z.string().optional(),
    cobiss:          z.string().optional(),
    researchTopics:  z.string().optional(),
    publications:    z.string().optional(),
    cv:              z.string().optional(),
    teaching:        z.string().optional(),
    projects:        z.string().optional(),
    editorial:       z.string().optional(),
    awards:          z.string().optional(),
    conferenceOrg:   z.string().optional(),
    projectsCollab:  z.string().optional(),
    reviewerFor:     z.string().optional(),
    certificates:    z.string().optional(),
  }),
});

const industryPartners = defineCollection({
  loader: sveltiaLoader("industryPartners"),
  schema: ({ image }) => z.object({
    name:        z.string(),
    description: z.string(),
    logo:        image().optional(),
    url:         z.string().optional(),
  }),
});

const news = defineCollection({
  loader: sveltiaLoader("news"),
  schema: ({ image }) => z.object({
    title:      z.string(),
    date:       z.coerce.date(),
    tags:       z.array(z.enum([
      "student", "conference", "scientific", "professional",
      "project", "awards", "interest-groups"
    ])),
    summary:    z.string(),
    coverImage: image().optional(),
    images:     z.array(image()).optional(),
  }),
});

const achievements = defineCollection({
  loader: sveltiaLoader("achievements"),
  schema: ({ image }) => z.object({
    title:      z.string(),
    subtitle:   z.string().optional(),
    date:       z.coerce.date(),
    tags:       z.array(z.enum([
      "student", "conference", "scientific", "professional",
      "project", "awards", "interest-groups"
    ])),
    coverImage: image().optional(),
    images:     z.array(image()).optional(),
  }),
});

export const collections = {
  laboratories, interestGroups, staff, projects,
  ethicsOpinions, studyProgrammes, studentProjects,
  conferences, industryPartners, achievements, news,
};