import { PageComponentNames, NotificationComponentNames } from "./enums/Enums.js";
import { HomePage } from "./pages/HomePage.js";
import { StoragePage } from "./pages/StoragePage.js";
import { NotificationsPage } from "./pages/NotificationsPage.js";
import { UserNotification, AppNotification } from "./components/Notifications.js";
import { Sidebar } from "./components/Sidebar.js";


// Pages
customElements.define(PageComponentNames.HomePage, HomePage);
customElements.define(PageComponentNames.StoragePage, StoragePage);
customElements.define(PageComponentNames.NotificationsPage, NotificationsPage);

// Entities


// Notifications
customElements.define(NotificationComponentNames.UserNotification, UserNotification);
customElements.define(NotificationComponentNames.AppNotification, AppNotification);


// Other components
customElements.define('homecloud-sidebar', Sidebar)