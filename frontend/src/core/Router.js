import { PageIds } from "./enums/Enums.js";
import { pageTemplates } from "./Templates.js";


export class Router {
    constructor() {
        this.page = document.querySelector('.page');
    }


    async routeTo(pageParams = {}) {
        const pageId = pageParams.pageId;        

        return new Promise((resolve) => {
            const observer = new MutationObserver(async (mutations, obs) => {
                if (this.page.children.length > 0) {
                    obs.disconnect(); 

                    switch (pageId) {
                        case PageIds.HOME:
                        
                            break;
                        case PageIds.MY_BUCKETS:
                            
                            break;
                        case PageIds.SHARED_WITH_ME:
                            
                            break;
                        case PageIds.NOTIFICATIONS:
                            
                            break;
                        case PageIds.TRASH:
                            
                            break;
                        case PageIds.STORAGE:
                            
                            break;
                    }
                    resolve();
                }
            });

            // Observe the parent view element for child mutations
            observer.observe(this.page, { childList: true });

            this.page.innerHTML = pageTemplates[pageId];
        })
    }
}