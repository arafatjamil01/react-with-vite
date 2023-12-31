# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Learning Outcomes

- Starting a project with vite and nodejs
- Using React with TypeScript
- Importing css and other components in React
- Integrating third party libraries with the application using npm, e.g - Bootstrap 5
- Writing event handling functions, inline and using event handler functions, use of MouseEvent
- Using hooks, e.g - state hook
- Making components reusable using props, instead of hard coding
- Creating props using typescript interface
- Passing function via props, and fetching data from the child to parent component
- Learned the differences between props and state
- Passing children to a component
- React Developer Tools browser extension
- Making prop optional
- Strict rules for props input
- Default value for props
- Creating a click action to show alert
- Clicking close button to hide alert