import { Router } from "./Router.js";
import { PageIds } from "./enums/Enums.js";


import '../styling/app.css';
import '../styling/defualt.css';
import '../styling/pages.css';
import '../styling/sidebar.css';
import '../../../brandbook/brandbook.css';



export const router = new Router(); 

async function startApplication()
{
    router.routeTo({ pageId: PageIds.HOME })
}


startApplication();