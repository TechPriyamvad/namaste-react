# React

- Creating a hello world program using html then javascript then react

### How to inject react code into html
- CDN
    - With the help of above links we get react and react dom object
    What are CDN links
    CDN stands for content delievery networkswhich provides servers all over the world. User can store their static data in these servers and whenever a request comes to accesss these data, CDN seraches for nearest server and serves the request

### How to create production ready react app without using create-react-app package

- `NPM`
    - We use npm to handle packages in our app
    - It's a popular package manager
    - We configure npm in our project using npm init command but before doing that we need to install npm if not present
    - There are two types of dependencies
        - Normal dependecy: Used in production phase
        - Dev dependency: Used in development phase
    - When we install a dependency, we install latest version of that dependency.If we want that our app should automatically upgrade it's version when a minor release is done we place a `caret` symbol before version number i.e ^v1.2.3 -> ^v1.2.4
    - When we install a dependency, we install latest version of that dependency.If we want that our app should automatically upgrade it's version when a major release is done we place a `tilde` symbol before version number i.e ~v1.2.3 -> ~v1.2.4
    - What is the difference between package.json and package-lock.json
        - package.json: 
            - It is a file which store approximate versions of dependencies used in our application
            - It stores which dependencies are needed in our project
        - package-lock.json: 
            - It is a file which stores actual version of dependencies used in our application
            - It also contains the information that which dependency require which other depenedency to work.
            - It is used to ensure that multiple machines in which application is executing installed the same version of dependency as intended.
    - What are node modules
        - Database | collection of dependencies which is used in our application
        - It acts as a tree of dependencies.
        - It stores the code of all the dependencies.
        - `Transitive depencdency`: It's a chain of dependency where one dependency is dependent on another dependency and so on
    - We should push package.json and package-lock.json to github because they are necesaary for installing correct version of package in our project.
    - We don't need to push node modules to github because we regenerate them using package.json and package-lock.json.
 - `npx`
    - It is used to execute a npm package.
- `Parcel`
    - It is a build tool which is used to build a project
- `browser list`
    - It is tool which is used to provide multiple browser version support in an application

### JSX
- It is html like syntax or XML like syntax

### Babel
- It is javascript compiler which converts jsx into javascript code which javascript engine understands

### What are functional components
- They are javascript functions which return jsx code i.e react elements

## Doubts
- Why we use react when we can create UI using javascript also
- Why size of package-lock.json is heavy
- What are map files in dist folder created by parcel
- How JSX prevent cross site scripting attack