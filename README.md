# ESCAL BME - Biomedical Engineering Research Group Website

## Description

This is the official website for the ESCAL BME (Biomedical Engineering Research Group) at the Department of Computer Engineering, University of Peradeniya, Sri Lanka. 

The website showcases the research group's work in biomedical engineering, including brain-computer interfaces, AI-driven dental diagnostics, biosignal processing (ECG, EEG, sEMG), medical device development, and near-infrared imaging systems. It features research projects, publications, team members, news updates, and contact information.

## Project Structure

```
bme.escal.ce.pdn.ac.lk/
├── index.html              # Main landing page
├── people.html             # Team members page
├── project.html            # Projects showcase
├── publication.html        # Research publications
├── news.html              # Latest news and updates
├── blogs.html             # Research insights
├── contactUs.html         # Contact information and form
├── CNAME                  # Custom domain configuration
├── README.md              # Project documentation
├── SETUP_GUIDE.md         # Detailed setup instructions
├── temp_replace.py        # Utility script
├── css/                   # Stylesheets
│   ├── general.css        # Global styles
│   ├── hero.css          # Hero section styles
│   ├── modern-biomedical.css  # Medical theme styles
│   └── query.css         # Media queries
├── js/                    # JavaScript modules
│   ├── nav.js            # Navigation functionality
│   ├── neuroAPI.js       # API integration
│   ├── reveal.js         # Scroll animations
│   ├── typewriter.js     # Text animation
│   └── module/           # ES6 modules
│       ├── fetchJSON.js
│       ├── fetchSupervisors.js
│       ├── fetchTeamMembers.js
│       ├── loadBlogs.js
│       ├── loadNews.js
│       ├── loadPeople.js
│       ├── loadProjects.js
│       └── loadPublication.js
├── data/                  # Data files
│   ├── people.json       # Team member data
│   ├── project.json      # Project information
│   ├── publication.json  # Publication records
│   ├── news.json         # News items
│   ├── blogs.json        # Blog posts
│   └── img/              # Data-related images
│       ├── news/
│       └── project/
├── img/                   # Image assets
│   ├── about/
│   ├── blogs/
│   ├── footer/
│   ├── icons/
│   ├── Nav/
│   ├── partners/
│   └── title/
├── News/                  # News-related files
└── project_folder/        # Individual project pages
    ├── img/
    ├── js/
    ├── project1/
    ├── project2/
    ├── project3/
    ├── project4/
    ├── project5/
    └── project6/
```

## Setup and Deployment

### Local Development

1. **Clone the repository** to your local machine

2. **Start a local web server** in the project directory:

   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

4. The website should now be running locally on your machine.

**Note:** A local web server is required for proper functionality of JavaScript modules and data loading.

### GitHub Pages Deployment

1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set up custom domain (bme.escal.ce.pdn.ac.lk) via CNAME file
4. Configure DNS settings to point to GitHub Pages

### Configuration

- Update `data/*.json` files with your research group's information
- Replace images in `img/` directories with your branding
- Modify EmailJS configuration in `contactUs.html` with your service credentials
- Update GitHub organization name in `js/neuroAPI.js` for repository integration

## Content Management

### Adding Team Members
Edit `data/people.json`:
```json
{
  "Graduate Researchers": [
    { "eNumber": "E/XX/XXX", "current": "Position"}
  ],
  "supervisors": [
    {
      "email": "email@eng.pdn.ac.lk",
      "name": "Dr. Name",
      "profile_page": "https://people.ce.pdn.ac.lk/..."
    }
  ]
}
```

### Adding Projects
Edit `data/project.json`:
```json
{
  "_id": "project1",
  "name": "Project Title",
  "description": "Project description...",
  "topics": ["Topic1", "Topic2"],
  "image": "path/to/image.jpg"
}
```

### Adding Publications
Edit `data/publication.json` with publication details

### Adding News
Edit `data/news.json` with news items

---

**ESCAL BME - Advancing the frontiers of biomedical engineering through innovative research**
