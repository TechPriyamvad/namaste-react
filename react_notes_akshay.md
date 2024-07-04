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
        - package.json: It is a file which store approximate versions of dependencies used in our application
        - package-lock.json: It is a file which stores actual version of dependencies used in our application
    - What are node modules
        - Database | collection of dependencies which is used in our application
        - It acts as a tree of dependencies.
        - `Transitive depencdency`: It's a chain of dependency where one dependency is dependent on another dependency and so on
    - We should push package.json and package-lock.json to github because they are necesaary for installing correct version of package in our project.
    - We don't need to push node modules to github because we regenerate them using package.json and package-lock.json.
- `Parcel`
    - It is a bundler which is used to bundle a project

