# ngrx-base-toolbox
A toolbox made with ngrx only to cover the basic needs of a common app

The goal is to have a package which exposes the actions, selectors, reducers, entities and adapters for common functionality of an app. It works as a layer between the backend and the frontend. With the adapter pattern it decouples the data structure which comes from the backend from the store.

For example:
- Logic for a multi-level navigation
- Notifications
- Error Handling, bases on Notification
- User management, including roles, permissions per role and specific permissions per user, which overwrite the roles permission

The packages should be available on npm, structured like this:
- @ngrx-base-toolbox/
  - notifications
  - error-handling
  - user-management
