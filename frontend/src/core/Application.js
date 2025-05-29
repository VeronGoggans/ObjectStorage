import { Router } from "./Router.js";
import { PageIds } from "./enums/Enums.js";


import '../styling/app.css';
import '../styling/defualt.css';
import '../styling/pages.css';
import '../styling/sidebar.css';
import '../styling/components.css';
import '../../../brandbook/brandbook.css';



export const router = new Router(); 
export let pageTitle = null;


async function startApplication()
{
    router.routeTo({ pageId: PageIds.HOME })
}


document.addEventListener('DOMContentLoaded', () => {
    pageTitle = document.querySelector('.page-title');
    startApplication()
});

