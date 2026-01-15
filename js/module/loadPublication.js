import { fetchJSON } from './fetchJSON.js';

export async function loadPublications(selector,limit=3){
    const container=document.querySelector(selector);

    if(!container) return;

    try{
        // Fetch publications from local JSON file
        const response = await fetch('./data/publication.json');
        if(!response.ok) throw new Error(`Failed to load publication data ${response.status}`);
        
        const jsonData = await response.json();
        let items = Array.isArray(jsonData.data) ? jsonData.data : jsonData;

        if(!Array.isArray(items) || items.length===0){
          container.innerHTML='<p class="text-center">No Publications available.</p>';
          return;
        }

        const totalItems = items.length;
        let currentLimit = limit || 3;
        
        function renderPublications(itemsToShow) {
            const pubsHTML = itemsToShow.map(pub=>
                `
                    <div class="publication-card">
                      <div class="pub-content">
                        <h4 class="pub-title">${pub.title}</h4>
                        <p class="pub-authors"><strong>Authors:</strong> ${pub.authors}</p>
                        <p class="pub-venue"><strong>Venue:</strong> ${pub.venue} (${pub.year})</p>
                        ${pub.volume ? `<p class="pub-volume"><strong>Volume:</strong> ${pub.volume}${pub.pages ? `, Pages: ${pub.pages}` : ''}</p>` : ''}
                        ${pub.award ? `<p class="pub-award"><strong>🏆 ${pub.award}</strong></p>` : ''}
                        ${pub.doi ? `<p class="pub-doi"><strong>DOI:</strong> <a href="${pub.url || 'https://doi.org/' + pub.doi}" target="_blank" rel="noopener noreferrer">${pub.doi}</a></p>` : ''}
                        ${pub.url ? `<a href="${pub.url}" class="pub-link" target="_blank" rel="noopener noreferrer">View Paper<span>&rarr;</span></a>` : ''}
                      </div>
                    </div>
                `
            ).join('');

            const loadMoreBtn = limit && currentLimit < totalItems ? `
                <div style="text-align: center; margin-top: 4rem;">
                    <button id="load-more-publications" class="load-more-btn">
                        Load More Publications
                    </button>
                </div>
            ` : '';
            
            container.innerHTML = pubsHTML + loadMoreBtn;
            
            // Re-attach event listener after re-render
            if (limit && currentLimit < totalItems) {
                const btn = document.getElementById('load-more-publications');
                if (btn) {
                    btn.addEventListener('click', function() {
                        currentLimit += 3;
                        renderPublications(items.slice(0, currentLimit));
                    });
                }
            }
        }

        // Initial render
        const initialItems = limit ? items.slice(0, currentLimit) : items;
        renderPublications(initialItems);

    }catch(e){
        console.log(e);
        container.innerHTML = '<p class="text-center">Failed to load Publications.</p>';
    }
  }