import { PageComponentNames, NotificationComponentNames, TableComponentNames, PageUtilComponentNames, ModalComponentNames } from "./enums/Enums.js";
import { HomePage } from "./pages/HomePage.js";
import { StoragePage } from "./pages/StoragePage.js";
import { NotificationsPage } from "./pages/NotificationsPage.js";
import { SharedWithMePage } from "./pages/SharedWithMePage.js";
import { MyBucketsPage } from "./pages/MyBucketsPage.js";
import { ObjectsPage } from "./pages/ObjectsPage.js"; 
import { PropertiesPage } from "./pages/PropertiesPage.js";
import { PermissionsPage } from "./pages/PermissionsPage.js";
import { AccessPage } from "./pages/AccessPage.js";
import { UserNotification, AppNotification } from "./components/Notifications.js";
import { Sidebar } from "./components/Sidebar.js";
import { SharedItem, BucketItem, ObjectItem, AccountPermission, APITokenItem } from "./components/TableItems.js";
import { BucketNavigation } from "./components/PageUtilComponents.js";
import { ModalWrapper, BucketModal, APITokenModal } from "./components/ModalWrapper.js";


// Pages
customElements.define(PageComponentNames.HomePage, HomePage);
customElements.define(PageComponentNames.StoragePage, StoragePage);
customElements.define(PageComponentNames.NotificationsPage, NotificationsPage);
customElements.define(PageComponentNames.SharedWithMePage, SharedWithMePage);
customElements.define(PageComponentNames.MyBucketsPage, MyBucketsPage);
customElements.define(PageComponentNames.ObjectsPage, ObjectsPage);
customElements.define(PageComponentNames.PropertiesPage, PropertiesPage);
customElements.define(PageComponentNames.PermissionsPage, PermissionsPage);
customElements.define(PageComponentNames.AccessPage, AccessPage);

// Entities
customElements.define(TableComponentNames.SharedItem, SharedItem);
customElements.define(TableComponentNames.BucketItem, BucketItem); 
customElements.define(TableComponentNames.ObjectItem, ObjectItem);
customElements.define(TableComponentNames.AccountPermissionItem, AccountPermission);
customElements.define(TableComponentNames.ApiTokenItem, APITokenItem);

// Notifications
customElements.define(NotificationComponentNames.UserNotification, UserNotification);
customElements.define(NotificationComponentNames.AppNotification, AppNotification);

// Modals
customElements.define(ModalComponentNames.BucketModal, BucketModal);
customElements.define(ModalComponentNames.ApiTokenModal, APITokenModal);

// Other components
customElements.define('homecloud-sidebar', Sidebar)
customElements.define(PageUtilComponentNames.ModalWrapper, ModalWrapper);
customElements.define(PageUtilComponentNames.BucketNavigation, BucketNavigation);