import { PageComponentNames, NotificationComponentNames, TableComponentNames, PageUtilComponentNames } from "./enums/Enums.js";
import { HomePage } from "./pages/HomePage.js";
import { StoragePage } from "./pages/StoragePage.js";
import { NotificationsPage } from "./pages/NotificationsPage.js";
import { SharedWithMePage } from "./pages/SharedWithMePage.js";
import { MyBucketsPage } from "./pages/MyBucketsPage.js";
import { ObjectsPage } from "./pages/ObjectsPage.js"; 
import { PropertiesPage } from "./pages/PropertiesPage.js";
import { UserNotification, AppNotification } from "./components/Notifications.js";
import { Sidebar } from "./components/Sidebar.js";
import { SharedItem, BucketItem, ObjectItem } from "./components/TableItems.js";
import { BucketNavigation } from "./components/PageUtilComponents.js";



// Pages
customElements.define(PageComponentNames.HomePage, HomePage);
customElements.define(PageComponentNames.StoragePage, StoragePage);
customElements.define(PageComponentNames.NotificationsPage, NotificationsPage);
customElements.define(PageComponentNames.SharedWithMePage, SharedWithMePage);
customElements.define(PageComponentNames.MyBucketsPage, MyBucketsPage);
customElements.define(PageComponentNames.ObjectsPage, ObjectsPage);
customElements.define(PageComponentNames.PropertiesPage, PropertiesPage);

// Entities
customElements.define(TableComponentNames.SharedItem, SharedItem);
customElements.define(TableComponentNames.BucketItem, BucketItem); 
customElements.define(TableComponentNames.ObjectItem, ObjectItem);

// Notifications
customElements.define(NotificationComponentNames.UserNotification, UserNotification);
customElements.define(NotificationComponentNames.AppNotification, AppNotification);


// Other components
customElements.define('homecloud-sidebar', Sidebar)
customElements.define(PageUtilComponentNames.BucketNavigation, BucketNavigation);