import { Router } from "./Router.js";
import { PageIds, PageUtilComponentNames } from "./enums/Enums.js";


import '../styling/app.css';
import '../styling/defualt.css';
import '../styling/pages.css';
import '../styling/sidebar.css';
import '../styling/components.css';
import '../../../brandbook/brandbook.css';
import '../styling/modals.css';



export const router = new Router(); 
export let modalWrapper;
export let pageTitle;
export let pageSubtitle;


async function startApplication()
{
    router.routeTo({ pageId: PageIds.HOME })
}


document.addEventListener('DOMContentLoaded', () => {
    pageTitle = document.querySelector('.page-title');
    pageSubtitle = document.querySelector('.page-subtitle');
    modalWrapper = document.querySelector(PageUtilComponentNames.ModalWrapper);
    startApplication()
});

