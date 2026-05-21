import { defineConfig } from "astro/config";
import sveltia from "astro-loader-sveltia-cms";

export default defineConfig({
  site: "https://paulaferi.github.io",
  base: "/feri-informatika-web",
  integrations: [
    sveltia({
      config: {
        backend: {
          name: "github",
          repo: "TU-USUARIO/feri-informatika-web",
          branch: "main",
        },
        media_folder: "public/images",
        public_folder: "/feri-informatika-web/images",
        collections: [

          // ── LABORATORIES ──────────────────────────────────────────────
          {
            name: "laboratories",
            label: "Laboratories",
            folder: "src/content/laboratories",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "name", label: "Laboratory Name", widget: "string" },
              { name: "acronym", label: "Acronym", widget: "string", required: false },
              { name: "description", label: "Description", widget: "text" },
              { name: "researchAreas", label: "Research Areas", widget: "list",
                field: { name: "area", label: "Area", widget: "string" } },
              { name: "members", label: "Staff Members (slugs)", widget: "list",
                field: { name: "member", label: "Staff slug", widget: "string" } },
              { name: "externalUrl", label: "External URL", widget: "string", required: false },
              { name: "body", label: "Extended description", widget: "markdown", required: false },
            ],
          },

          // ── INTEREST GROUPS ───────────────────────────────────────────
          {
            name: "interestGroups",
            label: "Interest Groups",
            folder: "src/content/interest-groups",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "name", label: "Group Name", widget: "string" },
              { name: "description", label: "Brief Description", widget: "text" },
              { name: "url", label: "External Link", widget: "string", required: false },
              { name: "body", label: "Full description", widget: "markdown", required: false },
            ],
          },

          // ── STAFF ─────────────────────────────────────────────────────
          {
            name: "staff",
            label: "Staff",
            folder: "src/content/staff",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "name", label: "Full Name", widget: "string" },
              { name: "role", label: "Position / Title", widget: "string" },
              { name: "email", label: "Email", widget: "string", required: false },
              { name: "phone", label: "Phone", widget: "string", required: false },
              { name: "office", label: "Office Number", widget: "string", required: false },
              { name: "officeHours", label: "Office Hours", widget: "string", required: false },
              { name: "photo", label: "Photo", widget: "image", required: false },
              { name: "researchAreas", label: "Main Areas of Research", widget: "list",
                required: false,
                field: { name: "area", label: "Area", widget: "string" } },
              { name: "education", label: "Education", widget: "markdown", required: false },
              { name: "achievements", label: "Achievements", widget: "markdown", required: false },
              { name: "body", label: "Research Work & Publications", widget: "markdown", required: false },
            ],
          },

          // ── RESEARCH PROJECTS ─────────────────────────────────────────
          {
            name: "projects",
            label: "Research Projects",
            folder: "src/content/projects",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "title", label: "Project Title", widget: "string" },
              { name: "status", label: "Status", widget: "select",
                options: ["active", "past"] },
              { name: "description", label: "Short Description", widget: "text" },
              { name: "startYear", label: "Start Year", widget: "number" },
              { name: "endYear", label: "End Year", widget: "number", required: false },
              { name: "funder", label: "Funding Body", widget: "string", required: false },
              { name: "principalInvestigator", label: "Principal Investigator", widget: "string", required: false },
              { name: "newsLink", label: "Link to related news (manual)", widget: "string", required: false },
              { name: "body", label: "Full Description & Details", widget: "markdown", required: false },
            ],
          },

          // ── ETHICS COMMITTEE OPINIONS ─────────────────────────────────
          {
            name: "ethicsOpinions",
            label: "Ethics Committee — Opinions",
            folder: "src/content/ethics-opinions",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "date", label: "Date", widget: "datetime" },
              { name: "research", label: "Research Title", widget: "string" },
              { name: "researchers", label: "Researchers", widget: "string" },
              { name: "decision", label: "Decision / Opinion", widget: "text", required: false },
            ],
          },

          // ── STUDY PROGRAMMES ──────────────────────────────────────────
          {
            name: "studyProgrammes",
            label: "Study Programmes",
            folder: "src/content/study-programmes",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "title", label: "Programme Title", widget: "string" },
              { name: "type", label: "Type", widget: "select",
                options: ["IPT", "ITK", "Bachelor", "Master", "PhD"] },
              { name: "duration", label: "Duration (years)", widget: "number" },
              { name: "ects", label: "ECTS Credits", widget: "number" },
              { name: "scope", label: "Scope", widget: "string", required: false },
              { name: "externalUrl", label: "Link to moja.um.si", widget: "string", required: false },
              { name: "body", label: "Curriculum & General Info", widget: "markdown", required: false },
            ],
          },

          // ── STUDENT PROJECTS ──────────────────────────────────────────
          {
            name: "studentProjects",
            label: "Student Projects",
            folder: "src/content/student-projects",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "title", label: "Project Title", widget: "string" },
              { name: "student", label: "Student Name(s)", widget: "string" },
              { name: "year", label: "Year", widget: "number" },
              { name: "description", label: "Short Description", widget: "text" },
              { name: "externalUrl", label: "Link to praktik.um.si", widget: "string", required: false },
              { name: "body", label: "Full Details", widget: "markdown", required: false },
            ],
          },

          // ── CONFERENCES ───────────────────────────────────────────────
          {
            name: "conferences",
            label: "Conferences",
            folder: "src/content/conferences",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "name", label: "Conference Name", widget: "string" },
              { name: "acronym", label: "Acronym", widget: "string", required: false },
              { name: "description", label: "Description", widget: "text" },
              { name: "date", label: "Date", widget: "datetime", required: false },
              { name: "location", label: "Location", widget: "string", required: false },
              { name: "url", label: "Conference Website", widget: "string", required: false },
              { name: "body", label: "Full Details", widget: "markdown", required: false },
            ],
          },

          // ── INDUSTRY PARTNERS ─────────────────────────────────────────
          {
            name: "industryPartners",
            label: "Industry Partners",
            folder: "src/content/industry-partners",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "name", label: "Organisation Name", widget: "string" },
              { name: "description", label: "Collaboration Description", widget: "text" },
              { name: "logo", label: "Logo", widget: "image", required: false },
              { name: "url", label: "Website", widget: "string", required: false },
            ],
          },

          // ── ACHIEVEMENTS (TOTEM) ──────────────────────────────────────
          {
            name: "achievements",
            label: "Achievements & Activities",
            folder: "src/content/achievements",
            create: true,
            slug: "{{slug}}",
            fields: [
              { name: "title", label: "Title", widget: "string" },
              { name: "date", label: "Date", widget: "datetime" },
              { name: "tags", label: "Tags", widget: "select", multiple: true,
                options: ["student", "conference", "scientific", "professional",
                          "project", "awards", "interest-groups"] },
              { name: "description", label: "Description", widget: "text" },
              { name: "body", label: "Full Details", widget: "markdown", required: false },
            ],
          },

          // ── NEWS ──────────────────────────────────────────────────────
          {
            name: "news",
            label: "News",
            folder: "src/content/news",
            create: true,
            slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
            fields: [
              { name: "title", label: "Title", widget: "string" },
              { name: "date", label: "Date", widget: "datetime" },
              { name: "tags", label: "Tags", widget: "select", multiple: true,
                options: ["student", "conference", "scientific", "professional",
                          "project", "awards", "interest-groups"] },
              { name: "summary", label: "Summary", widget: "text" },
              { name: "body", label: "Full Content", widget: "markdown" },
            ],
          },

        ],
      },
    }),
  ],
});