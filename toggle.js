document.addEventListener('DOMContentLoaded', function() {
    const skillsBtn = document.getElementById('skillsToggle');
    const skillsContent = document.getElementById('skillsContent');
    
    if (skillsBtn && skillsContent) {
        skillsContent.style.display = 'grid';
        skillsBtn.textContent = 'Hide Skills';
        
        skillsBtn.addEventListener('click', function() {
            if (skillsContent.style.display === 'none') {
                skillsContent.style.display = 'grid';
                this.textContent = 'Hide Skills';
            } else {
                skillsContent.style.display = 'none';
                this.textContent = 'Show Skills';
            }
        });
    }
    
    const projectsBtn = document.getElementById('projectsToggle');
    const projectsContent = document.getElementById('projectsContent');
    
    if (projectsBtn && projectsContent) {
        projectsContent.style.display = 'block';
        projectsBtn.textContent = 'Hide Projects';
        
        projectsBtn.addEventListener('click', function() {
            if (projectsContent.style.display === 'none') {
                projectsContent.style.display = 'block';
                this.textContent = 'Hide Projects';
            } else {
                projectsContent.style.display = 'none';
                this.textContent = 'Show Projects';
            }
        });
    }
});