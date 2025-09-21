# Lokesh Sharma - Professional Portfolio

A modern, responsive portfolio website showcasing software engineering skills and projects.

## Features

- **Modern Design**: Clean, minimalist UI with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling, hover effects, and dynamic content filtering
- **Professional**: Structured sections highlighting skills, projects, and experience

## Sections

1. **Hero Section**: Name, role, tagline with call-to-action buttons
2. **About**: Personal introduction and philosophy
3. **Skills**: Categorized tech stack with visual icons
4. **Projects**: Filterable project showcase with achievements
5. **Experience**: Timeline of work history with measurable impact
6. **Contact**: Contact form and social links

## Customization Guide

### Personal Information

**Update in `index.html`:**
- Replace "Lokesh Sharma" with your name
- Update the tagline and description
- Change email and social media links
- Replace placeholder profile image

### Projects

**Add your projects in the projects section:**
```html
<div class="project-card" data-category="your-category">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <ul class="project-achievements">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" class="project-link">Code</a>
            <a href="demo-link" class="project-link">Live Demo</a>
        </div>
    </div>
</div>
```

### Skills

**Update skills in the skills section:**
- Modify skill categories (Languages, Frameworks, Tools)
- Add/remove skill items
- Update icons using Font Awesome classes

### Experience

**Update work experience in the timeline:**
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <h4>Company Name</h4>
        <span class="timeline-date">Start - End Date</span>
        <ul>
            <li>Achievement or responsibility</li>
        </ul>
    </div>
</div>
```

### Colors and Styling

**Customize colors in `styles.css`:**
```css
:root {
    --primary-color: #4f46e5;    /* Main brand color */
    --secondary-color: #10b981;  /* Secondary accent */
    --accent-color: #f59e0b;     /* Additional accent */
}
```

### Profile Image

Replace the placeholder image in the hero section:
1. Add your professional headshot to the project folder
2. Update the `src` attribute in the `.profile-image img` element

## File Structure

```
Lokesh_Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and themes
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images and assets
- Debounced scroll events
- Efficient CSS animations
- Responsive design patterns

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Create account at netlify.com
2. Drag and drop the project folder
3. Your site will be deployed automatically

### Vercel
1. Create account at vercel.com
2. Import from GitHub or upload files
3. Deploy with one click

## Local Development

1. Clone or download the project
2. Open `index.html` in a web browser
3. For live reloading, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## Customization Tips

1. **Images**: Use high-quality, optimized images (WebP format recommended)
2. **Content**: Keep descriptions concise and impact-focused
3. **Projects**: Highlight measurable achievements and technologies used
4. **Contact**: Ensure all links are working and up-to-date
5. **SEO**: Update meta tags and descriptions for better search visibility

## License

This project is open source and available under the MIT License.

## Support

For questions or customization help, feel free to reach out or create an issue in the repository.