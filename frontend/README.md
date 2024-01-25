# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Notes
package.json
  added /api proxy "http://localhost:5000/" in vite config to clean up api calls

styling
  BootStrap styling added with npm install react-bootstrap bootstrap

### Discussion
- how to configure api calls in deployment with proxy
- will api calls in deployment be made to the same domain as the frontend?
- will api calls in deployment be slower, and require a loading action or spinner?
- 



