<h1 align="center" id="top"> Meli busca rápida </h1>

<p align="center">
  A website to search for products on Meli catalog and see their details 
  <br>
  ⚡ To access click <a href="https://meli-busca-rapida.vercel.app/result">here</a>! ⚡  
</p>

## 💻 Development decisions
### ⚙️ Technologies
I have chosen to use ReactJS, because it is the lib that I work with and have familiarity. If I need to use Vanilla JS, probably I had spend a lot of time developing.

For documentation, I worked with Storybook, that is also helpful for unit tests, with Jest and Testing Libreary, because I used them as a mock component.

### 📋 State management
For state management I did not use any lib, since useState from ReactJS it covered all my app demand. But, since I had to save the refresh token given by the API, I created an app using Firebase Database, to save the information but not leave it exposed on the browser. 

I could have created a BFF (BackEnd for FrontEnd) application, but Firebase gave me what I needed with a much faster development.

### 🧩 Modularization
This project is structured based on Atomic Design patterns, since it is useful for components modularization. 

In Atomic Design, we separate components in atoms, molecules, organisms, pages and templates. The atoms part it is the part that is not divisible, molecules it is atoms grouped, organisms it is molecules grouped but with more complexity and logic and pages, well, that are pages. To know more about it you can [click here](https://atomicdesign.bradfrost.com/chapter-2/).

To separate the API requests and render logic from the view layer, I have created custom hooks to attend the specifities of each page. This way, the code it is more readable and it is easier to test. 

## 📂 Folders structures

```text
.
├── src
|  ├── pages
|  |  └── ComponentName
|  |  |  └── index.js
|  |  |  └── ComponentName.js
|  |  |  └── ComponentName.stories.js
|  |  |  └── ComponentName.test.js
|  |  |  └── ComponentName.styles.css
|  ├── organisms
|  |  └── [...ComponentName structure]
|  ├── molecules
|  |  └── [...ComponentName structure]
|  ├── atoms
|  |  └── [...ComponentName structure]
|  ├── templates
|  |  └── [...ComponentName structure]
|  ├── hooks
|  |  └── useMyHook.js
|  |  └── useMyHook.test.js
|  ├── utils
|  |  └── constants.js
|  |  └── helpers.js
|  |  └── helpers.test.js
|  ├── api/
|  |  └── index.js
|  |  └── api.js
|  |  └── api.test.js
|  |  └── firebase/
|  |  |  └── index.js
|  |  |  └── firebase.js
|  |  |  └── firebase.test.js
|  |  |  └── firebaseConfig.js
|  |  └── service
|  |  |  └── index.js
|  |  |  └── service.js
|  |  |  └── service.test.js
|  |  |  └── fixtures.js
|  |  |  |  └── mockResponse.js
|  |  └── utils
|  |  |  |  └── helpers.js
|  |  |  |  └── helpers.test.js
|  ├── assets
|  |  └── myAsset.js
|  ├── index.js
|  ├── routes.js
|  └── style.css
└──

```
## 🚀 Getting Started

### 🦸 Running the app

Before running the app, install on your computer: Git and NodeJS.

```bash

# Fork the repository

# To clone this repository on your computer run:
$ git clone https://github.com/beatrizpenalva/teste-tecnico-meli.git

# To install the dependencies in your project's directory run:
$ npm install

# To execute the app on development mode run:
$ npm run start

# The app will be open on port:3000 - access http://localhost:3000

# To execute the storybook run:
$ npm run storybook

# To execute tests run:
$ npm run test 

```
### 👊 To contribute

```bash

# After installing the repository on your computer, create a new branch with your updates:
$ git checkout -b my-feature

# Save your changes
$ git add .

# Create a commit message telling what you did: 
$ git commit -m "feature: My new feature"

# Send your contribution to this repository
$ git push origin my-feature

```
