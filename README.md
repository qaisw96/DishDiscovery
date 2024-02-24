> # DishDiscovery App

Is a platform that brings the world of delectable recipes to your fingertips

> ## File Structure explanation

1. ### src
   The root of your source code. It contains all the code that is part of the application.
2. ### components
   Holds all the React components used in the application
   > [!NOTE]
   > ui subdirectory under components likely contains reusable UI components that are more abstract and can be used across different parts of the application
3. ### hooks
   The hooks directory is likely where custom React hooks stored
4. ### routes
   Define the routes of the application
5. ### util
   Used for utility functions or helper modules

---

> ## Used Approaches

### Mapping Approach

By using RegularList component to render a list of items

This approach is beneficial for several reasons

1. **Reusability**
   Reuse this component throughout the application for different lists, reducing code duplication

2. **Customization**
   Flexibility to pass in a custom ItemComponent allows to customize the appearance and behavior of each list item without modifying the core logic of the list component

3. **Separation**
   The RegularList component focuses on the structure and layout of the list, while the rendering of individual items is delegated to the ItemComponent

4. **Scalability**
   Can handle various types of lists and items by extending or creating new components without major modifications to existing code

### Search Approach

Using URL parameters for search offers several advantages

1. **Bookmarking and Sharing**
   URL parameters make it easy for users to bookmark or share specific search results by Link

2. **History Navigation**
   Using URL parameters allows users to navigate through their search history using the browser's back and forward buttons

3. **State Persistence**
   Storing search parameters in the URL ensures that users don't lose their search context when they refresh

---

> ## How to run the application

1. Clone the application on your machine by
   `git clone <webUrl>`
2. Navigate to the Project Directory
   cd recipes
3. Install Dependencies by
   `npm install`
4. Create **.env** file in the root of project and add the **environment variables** to it
   > [!NOTE]
   > environment variables will be provided by email
5. Finally run the application by
   `npm start`
