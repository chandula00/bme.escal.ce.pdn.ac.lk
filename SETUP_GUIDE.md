# PeraBME Website Setup Guide

## ✅ What's Been Created

A complete website structure for **PeraBME - ESCAL Biomedical Research Group** has been created at:
`/Users/chandula/Uni_Pera/cepdnaclk/PeraBME-Web/`

### 📁 Directory Structure Created

```
PeraBME-Web/
├── index.html              ✅ Main landing page
├── people.html             ✅ Team members page  
├── project.html            ✅ Projects showcase
├── publication.html        ✅ Research publications
├── news.html              ✅ Latest news
├── blogs.html             ✅ Research blogs
├── contactUs.html         ✅ Contact form
├── CNAME                  ✅ Domain: perabme.ce.pdn.ac.lk
├── README.md              ✅ Documentation
├── .nojekyll              ✅ GitHub Pages config
├── css/                   ✅ All stylesheets copied
├── js/                    ✅ All JavaScript modules copied
├── data/                  ✅ JSON data files created
│   ├── people.json        ✅ (Template with supervisors)
│   ├── project.json       ✅ (3 sample projects)
│   ├── publication.json   ✅ (Empty - ready for data)
│   ├── news.json          ✅ (Empty - ready for data)
│   └── blogs.json         ✅ (Empty - ready for data)
├── img/                   ✅ All images copied
└── project_folder/        ✅ Project subdirectories
```

## 🔄 Changes Made from PeraMorphIQ to PeraBME

### Content Changes:
- ✅ **Name**: PeraMorphIQ → PeraBME
- ✅ **Tagline**: "Neuromorphic Research Group" → "ESCAL Biomedical Research Group"
- ✅ **Research Area**: Neuromorphic computing → Biomedical engineering
- ✅ **Email**: peramorphiq@eng.pdn.ac.lk → perabme@eng.pdn.ac.lk
- ✅ **Domain**: peramorphiq.ce.pdn.ac.lk → perabme.ce.pdn.ac.lk
- ✅ **Focus Areas**: Hardware accelerators → Medical devices, Health informatics, Biosignal processing

### Files Adapted:
- All 7 HTML files with updated branding and content
- Data JSON files with biomedical-focused examples
- CNAME file with new domain
- README with complete documentation

## 🚀 Next Steps to Deploy

### 1. Create GitHub Repository
```bash
cd /Users/chandula/Uni_Pera/cepdnaclk/PeraBME-Web
git init
git add .
git commit -m "Initial commit: PeraBME website"
```

### 2. Push to GitHub
```bash
# Create a new repository on GitHub (e.g., PeraBME-Web)
git remote add origin https://github.com/YOUR_ORG/PeraBME-Web.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" section
3. Source: Deploy from main branch
4. Custom domain: `perabme.ce.pdn.ac.lk`
5. Enforce HTTPS ✓

### 4. Configure DNS
Add these DNS records to your domain:
```
Type: CNAME
Host: perabme
Value: YOUR_ORG.github.io
```

## 📝 Customize Your Content

### Add Team Members
Edit: `data/people.json`
```json
{
  "Graduate Researchers": [
    { "eNumber": "E/XX/XXX", "current": "Position"}
  ]
}
```

### Add Projects  
Edit: `data/project.json`
- Add your biomedical research projects
- Update images and descriptions

### Add Publications
Edit: `data/publication.json`
- Add research papers
- Include DOI links and citations

### Add News
Edit: `data/news.json`
- Add latest research updates
- Include images in `data/img/news/`

### Update Images
Replace logos and images in:
- `img/title/` - Logo and favicon
- `img/partners/` - Partner logos
- `img/about/` - About section icons
- `img/footer/` - Footer icons

### Update Contact Info
Edit: `contactUs.html`
- Line ~645: Update phone numbers
- Line ~650: Verify email address
- Update EmailJS configuration if needed

## 🧪 Test Locally

```bash
cd /Users/chandula/Uni_Pera/cepdnaclk/PeraBME-Web
# Using Python
python3 -m http.server 8000
# OR using Node.js
npx http-server

# Open: http://localhost:8000
```

## 🎨 Branding Customization

To further customize the branding:

1. **Colors**: Edit `css/hero.css` and `css/general.css`
   - Current: Blue/cyan theme
   - Consider: Medical green/blue theme

2. **Fonts**: Already using Orbitron for tech feel
   - Can be kept or changed to something more medical

3. **Logo**: Replace `img/title/image3.png` with PeraBME logo

## ✉️ Contact Form Setup

The contact form uses EmailJS. To activate:

1. Go to https://www.emailjs.com/
2. Create account and get credentials
3. Update in `contactUs.html` (line ~913):
   ```javascript
   emailjs.init({
       publicKey: "YOUR_PUBLIC_KEY"
   });
   ```

## 📊 Analytics (Optional)

Add Google Analytics by inserting tracking code in all HTML files before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔐 Security Notes

- CNAME file configured for custom domain
- `.nojekyll` file prevents Jekyll processing
- No sensitive data in repository
- Contact form secured through EmailJS

## 📞 Support

For questions or issues:
- Check README.md for detailed documentation
- Review original PeraMorphIQ structure for reference
- Contact: perabme@eng.pdn.ac.lk

---

**Website Status**: ✅ Ready to deploy
**Created**: January 14, 2026
**Based on**: PeraMorphIQ template
**Customized for**: ESCAL Biomedical Research Group
