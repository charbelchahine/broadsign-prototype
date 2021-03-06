![broadsign prototype logo](https://user-images.githubusercontent.com/14867027/44469280-202a1700-a5f5-11e8-8214-2420517d07cf.png)

# Broadsign Prototype

Prototype of a [ReactJS](https://reactjs.org) version of [Broadsign.com](https://broadsign.com) running on [GatsbyJS](https://www.gatsbyjs.org) to obtain a faster & static Progressive Web App, capable of running offline.

## Table of Contents
* [Getting Started](#getting-started)
   * [Prerequisites](#prerequisites)
   * [Installing](#installing)
* [Development](#development)
* [Deployment](#deployment)
* [Demo](#demo)
* [Issues](#issues)
* [Author](#author)

## Getting Started

These instructions will get you a copy of the prototype up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure to have [Node](https://nodejs.org/) & [Yarn](https://yarnpkg.com/) installed on your local machine

Open a terminal window and install React & Gatsby's command line tool
```
yarn add react react-dom gatsby-cli
```

### Installing

Clone the repo in the directory of your choice and then move to this new directory
```
git clone https://github.com/charbelchahine/broadsign-prototype.git
cd broadsign-prototype
```

Install all dependencies for the prototype
```
yarn install
```

## Development

Start a hot-reloading development environment
```
gatsby develop
```
You will now be able to view the prototype at http://localhost:8000/. Any change you make to your React components will immediately be visible in the browser.

When making changes to the SCSS, make sure to open a new terminal window and run the following command beforehand to re-compile the CSS each time you save your SCSS files.
```
yarn sass
```

## Deployment

While developing, make sure your newly added features don't cause errors when attempting to build for production. Running the following command will produce a directory of static HTML and JavaScript files which you can later deploy to a static site hosting service
```
gatsby build
```

To test the prototype for production, you can build and deploy it to [Surge](https://surge.sh) or [Netlify](https://www.netlify.com)
* [Deploy Gatsby project to Surge](https://www.gatsbyjs.org/tutorial/part-one/#deploying-gatsbyjs-websites)
* [Deploy Gatsby project to Netlify](https://app.netlify.com/start)
* More deploy options [here](https://www.gatsbyjs.org/docs/deploy-gatsby/)

## Demo

Prototype is currently hosted on https://broadsign.netlify.com/

## Issues
- [ ] TODO: Clean code into reusable components
- [ ] TODO: Clean SCSS
- [ ] TODO: Paginate `/blog`
- [ ] FIXME: Nav logo & strings don't function properly in the `/blog` path 

## Built With

* [GatsbyJS](https://www.gatsbyjs.org) - to obtain static/offline Progressive Web App  
* [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/?=wordpress) - pulling data with GraphQL from WordPress sites using the WordPress REST API.
* [react-i18next](https://react.i18next.com/) - Internationalization to obtain multilingual site
* [Sass](https://sass-lang.com) - for styling
* [react-md](https://react-md.mlaursen.com/) - Material UI components customizable in Sass instead of inline styles

## Author

**Charbel Chahine** - [LinkedIn](https://www.linkedin.com/in/charbelchahine/)
