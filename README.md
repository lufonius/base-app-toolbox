# base-app-toolbox

For each feature a separate dev branch.

A toolbox made with ngrx and angular only to cover the basic needs of a common app

The goal is to have multiple packages. The core package defines entities (might be moved to the common package ... lets see), the layout package which includes UI components, the common package which include often used UI components or directives used among the other packages and the store package, which includes actions and reducer functions.

- Reusable logic for modifying the viewmodel for navigations
- Store for modifying the viewmodel for navigations
- Webapp Navigation as a UI component, highly customizeable and responsive
- Notifications
- Error Handling, bases on Notification
- Saving Page Scroll State
- History for visited pages (ex. when used for swiping)
- User management, including roles, permissions per role and specific permissions per user, which overwrite the roles permission

The packages should be available on npm, structured like this:
- @ngrx-base-toolbox/
  - core
  - common
  - layout
  - store
  
Structured this way, a developer doesn't have to include the ngrx dependency if he decides to use the ui components without a store.
