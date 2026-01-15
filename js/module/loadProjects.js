import { fetchJSON } from './fetchJSON.js';

export async function loadProjects(selector,limit=6){
    const container=document.querySelector(selector);

    if(!container) return;

    try{
        // Fetch projects from local JSON file
        const response = await fetch('./data/project.json');
        if(!response.ok) throw new Error(`Failed to load project data ${response.status}`);
        
        const jsonData = await response.json();
        let items = Array.isArray(jsonData.data) ? jsonData.data : jsonData;

        if(!Array.isArray(items) || items.length===0){
          container.innerHTML='<p class="text-center">No Projects available.</p>';
          return;
        }

        const totalItems = items.length;
        let currentLimit = limit || 6;

        function renderProjects(itemsToShow) {
            const projectsHTML = itemsToShow.map(project=>
                `
                <div class="project-box">
                  <img src="${project.image || './img/project_img.png'}" 
                      alt="${project.title || project.name}" 
                      class="project-img" />
                      
                  <div class="project-card-text-box">
                    <h4 class="project-topics">${project.name}</h4>

                    <div class="project-tags">
                      ${project.topics && project.topics.length > 0 ? project.topics.map(tech=>`<span class="tag">${tech}</span>`).join('') : ''}
                    </div>

                    <p class="project-detials">${project.description || 'No description available'}</p>

                    <div class="project-card-footer">
                      ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub repository for ${project.name}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                      </a>` : ''}
                      ${project.website ? `<a href="${project.website}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Project website for ${project.name}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Website
                      </a>` : ''}
                    </div>
                  </div>
                </div> 
                `
            ).join('');

            // Add load more button HTML if needed
            const loadMoreBtn = limit && currentLimit < totalItems ? `
                <div style="text-align: center; margin-top: 4rem; grid-column: 1 / -1;">
                    <button id="load-more-projects" class="load-more-btn">
                        Load More Projects
                    </button>
                </div>
            ` : '';
            
            container.innerHTML = projectsHTML + loadMoreBtn;
            
            // Re-attach event listener after re-render
            if (limit && currentLimit < totalItems) {
                const btn = document.getElementById('load-more-projects');
                if (btn) {
                    btn.addEventListener('click', function() {
                        currentLimit += 6;
                        renderProjects(items.slice(0, currentLimit));
                    });
                }
            }
        }

        // Initial render
        const initialItems = limit ? items.slice(0, currentLimit) : items;
        renderProjects(initialItems);

    }catch(e){
        console.log(e);
        container.innerHTML = '<p class="text-center">Failed to load Projects.</p>';
    }
}
