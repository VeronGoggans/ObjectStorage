import { PageComponentNames, NotificationComponentNames, TableComponentNames } from "./enums/Enums.js";
import { HomePage } from "./pages/HomePage.js";
import { StoragePage } from "./pages/StoragePage.js";
import { NotificationsPage } from "./pages/NotificationsPage.js";
import { SharedWithMePage } from "./pages/SharedWithMePage.js";
import { MyBucketsPage } from "./pages/MyBucketsPage.js"; 
import { UserNotification, AppNotification } from "./components/Notifications.js";
import { Sidebar } from "./components/Sidebar.js";
import { SharedItem, BucketItem } from "./components/TableItems.js";



// Pages
customElements.define(PageComponentNames.HomePage, HomePage);
customElements.define(PageComponentNames.StoragePage, StoragePage);
customElements.define(PageComponentNames.NotificationsPage, NotificationsPage);
customElements.define(PageComponentNames.SharedWithMePage, SharedWithMePage);
customElements.define(PageComponentNames.MyBucketsPage, MyBucketsPage);

// Entities
customElements.define(TableComponentNames.SharedItem, SharedItem);
customElements.define(TableComponentNames.BucketItem, BucketItem); 

// Notifications
customElements.define(NotificationComponentNames.UserNotification, UserNotification);
customElements.define(NotificationComponentNames.AppNotification, AppNotification);


// Other components
customElements.define('homecloud-sidebar', Sidebar)