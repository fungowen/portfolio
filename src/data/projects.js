// Every project on the site comes from this one file.
// Add a project by copying a block and changing the fields.
//
// Field guide
//   slug      url segment, lowercase and hyphenated. Must be unique.
//   title     what recruiters read first. Say the outcome, not the tech.
//   blurb     one sentence for the grid. Aim for under 120 characters.
//   year      string, shown in the grid.
//   kind      'Dashboard' | 'Notebook' | 'App' | 'Tool'. Used as a filter label.
//   tools     short list, 2-4 items. Longer lists read as padding.
//   featured  true puts it in the top row of the grid.
//   summary   2-3 sentences on the detail page, under the title.
//   sections  the write-up. Keep to 3: the problem, what you built, what it changed.
//   embed     optional Tableau Public url for a live dashboard.
//   images    optional screenshots. Put the files in /public/shots/.
//   links     optional buttons: repo, live version, writeup.

export const projects = [
  {
    slug: 'example-tableau-dashboard',
    title: 'Replace me: a dashboard someone actually used',
    blurb:
      'One sentence a recruiter can understand without knowing your industry.',
    year: '2026',
    kind: 'Dashboard',
    tools: ['Tableau', 'SQL'],
    featured: true,
    summary:
      'Two or three sentences. Who needed this, what was hard about it, and what changed once it existed. Write it for someone outside your team.',
    embed: {
      // Publish to Tableau Public, then paste the share url here.
      url: '',
      caption: 'Live version, hosted on Tableau Public.',
    },
    images: [],
    links: [
      // { label: 'View on Tableau Public', url: 'https://public.tableau.com/...' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'What decision was being made badly, slowly, or blindly before this existed. Name the people who had the problem.',
      },
      {
        heading: 'What I built',
        body: 'The shape of the thing. Where the data came from, the modelling choices you made, and one decision you would defend in an interview.',
      },
      {
        heading: 'What changed',
        body: 'The outcome. A number is best, but "the weekly report went from three hours to ten minutes" is a number too.',
      },
    ],
  },
  {
    slug: 'example-power-bi-report',
    title: 'Replace me: a Power BI report shown as screenshots',
    blurb:
      'For work you cannot publish. Screenshots plus a written walkthrough carry it fine.',
    year: '2026',
    kind: 'Dashboard',
    tools: ['Power BI', 'DAX'],
    featured: true,
    summary:
      'If the underlying data is confidential, say so plainly and show the craft instead: layout, measures, the modelling. Recruiters read that as judgement, not as a gap.',
    embed: null,
    images: [
      // { src: '/shots/report-overview.png', alt: 'Overview page of the report' },
    ],
    links: [],
    sections: [
      {
        heading: 'The problem',
        body: 'Describe the business question. Keep client names, real figures, and anything covered by an NDA out of it.',
      },
      {
        heading: 'What I built',
        body: 'Walk through the pages in order. Explain one measure properly rather than listing twenty.',
      },
      {
        heading: 'What changed',
        body: 'Who uses it now, how often, and what they stopped doing by hand.',
      },
    ],
  },
  {
    slug: 'example-notebook',
    title: 'Replace me: an analysis you can read end to end',
    blurb:
      'A notebook rendered as a page, so nobody has to clone a repo to see your thinking.',
    year: '2025',
    kind: 'Notebook',
    tools: ['Python', 'pandas', 'Quarto'],
    featured: false,
    summary:
      'Notebooks show reasoning in a way dashboards cannot. Render it with Quarto, drop the html into /public/, and link to it from here.',
    embed: null,
    images: [],
    links: [
      // { label: 'Read the analysis', url: '/notebooks/churn.html' },
      // { label: 'Source on GitHub', url: 'https://github.com/...' },
    ],
    sections: [
      {
        heading: 'The question',
        body: 'One question, stated in a sentence. Analyses that answer four questions read as four half-analyses.',
      },
      {
        heading: 'The approach',
        body: 'Where the data came from, what you cleaned, and what you decided to leave out. Say what surprised you.',
      },
      {
        heading: 'What I found',
        body: 'The finding, then the caveat. Naming the limitation is the part that makes people trust the rest.',
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
