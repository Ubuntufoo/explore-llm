# Project Name
A recreation of the ExploreLLM project using React and Flask.

## Installation
<!---  --->

### React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Notes
package.json:
  added /api proxy "http://localhost:5000/" in vite config to clean up api calls

styling:
  BootStrap 5 along with react-bootstrap library

### Optional TODO
- refactor Cards.jsx/Button.jsx component to split out modal, options
- utilize children prop where applicable

- organize cards by user importance with numbered badges
- use numbered badges on card face to indicate # of options for subTask
- drag and drop cards to reorder
- store query history

