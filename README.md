#Work In Progress
# React Native Quick Starter Boilerplate

Welcome to the React Native Quick Starter Boilerplate! This repository is designed to jumpstart your React Native project with a set of essential features and integrations. With this boilerplate, you can quickly start building your React Native app with confidence.

## Features

### 1. AppCenter Integration
- AppCenter is integrated into this boilerplate, allowing you to automate builds and take advantage of the CodePush feature for seamless over-the-air updates.

### 2. React Navigation
- We've set up a robust navigation architecture using React Navigation, making it easy to navigate between screens and manage your app's routing.

### 3. React Native UI Component Wrappers
- To support utility classes and enhance code readability, we've created React Native UI component wrappers with aliases and additional parameter configurations. These wrappers simplify UI development.

### 4. React Native Reanimated Integration
- This boilerplate integrates React Native Reanimated with React Native v0.72, empowering you to create smooth and performant animations in your app.

### 5. Import Aliases with TypeScript and Babel
- We've configured import aliases in the tsconfig and Babel configuration, making it effortless to import your files using clear and concise aliases.

### 6. SVG Icon Renderer
- Included is a wrapper component for rendering SVG icons with type-supported icon names, providing a convenient way to include icons in your app.

### 7. State Management with Redux
- We've integrated state management with Redux, Redux Saga as middleware, and Redux Toolkit to simplify and enhance your app's state management capabilities.

### 8. Theming
- Customize your app's appearance with theming using a colorToken object. Additionally, we've included Lato as the default font for a clean and modern look.

### 9. Basic Services
- We've included essential services to accelerate your development process:
  - **Authentication Service**: Handle user authentication and authorization.
  - **HTTP Service**: Perform HTTP requests and manage API interactions.
  - **Keychain Service**: Store and retrieve data securely in local storage.
  - **Network Service**: Monitor and manage network connectivity.

### 10. Font and UI Scaling Fixes with PixelRatio
- This boilerplate includes font and UI scaling fixes using PixelRatio to ensure your app's user interface is consistent and responsive across various devices and screen sizes.

### 11. GitHub Workflow Pipeline Checks
- We've added a GitHub workflow pipeline with checks to automate and streamline the development and deployment process. This ensures code quality, linting, and testing before merging changes into the main branch.

## Getting Started

To get started with this React Native Quick Starter Boilerplate, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Install the project dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   # or
   yarn start
   ```

4. Run your app on a connected device or emulator:
   ```
   npm run android
   # or
   npm run ios
   ```

## Folder Structure

The project's folder structure is organized to help you maintain a clean and scalable codebase. Here's an overview:

- **src**: Contains your application's source code.
  - **components**: Custom reusable components and wrappers.
  - **navigation**: React Navigation configuration and screens.
  - **redux**: Redux state management setup.
  - **services**: Basic services like authentication, HTTP, keychain, and network.
  - **theme**: Theming configuration files.
  - **utils**: Utility functions and helper modules.

## Contribution

We welcome contributions to improve and expand this boilerplate. If you have any suggestions, bug fixes, or new features to add, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

---

Happy coding! 🚀📱
