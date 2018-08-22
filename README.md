![broadsign prototype logo](https://user-images.githubusercontent.com/14867027/44469280-202a1700-a5f5-11e8-8214-2420517d07cf.png)

# Broadsign Prototype

Prototype of a [ReactJS](https://reactjs.org) version of [Broadsign.com](https://broadsign.com) running on [GatsbyJS](https://www.gatsbyjs.org) to obtain a faster & static Progressive Web App, capable of running offline.

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

## Deployment

While developing, make sure your newly added features don't cause errors when attempting to build for production. Running the following command will produce a directory of static HTML and JavaScript files which you can later deploy to a static site hosting service
```
gatsby build
```

## Built With

* [GatsbyJS](https://www.gatsbyjs.org) - to obtain static/offline Progressive Web App  
* [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/?=wordpress) - pulling data with GraphQL from WordPress sites using the WordPress REST API.
* [react-i18next](https://react.i18next.com/) - Internationalization to obtain multilingual site
* [Sass](https://sass-lang.com) - for styling
* [react-md](https://react-md.mlaursen.com/) - Material UI components customizable in Sass instead of inline styles

## Authors

**Charbel Chahine** - [LinkedIn](https://www.linkedin.com/in/charbelchahine/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

