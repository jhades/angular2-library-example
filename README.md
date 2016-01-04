
# Learn how to create an Angular 2 Library

An example repository for learning how to build your own Angular 2 library. Learn how to:

- setup the library public API
- build the library
- version it
- publish it to npm
- package the CSS
- consume the library with SystemJs or Webpack

See further details in this blog post: 
[How to create an Angular 2 component library, and how to consume it using SystemJs or Webpack ](http://blog.jhades.org/how-to-create-an-angular-2-library-and-how-to-consume-it-jspm-vs-webpack/)

# Installation

Clone the repository and do:

    npm install

# Building the library

    npm run build
    
## Install the SystemJs Example 
    
    cd examples/systemjs
    npm install
    npm run build
    npm start
    
Then access [http://localhost:8080](http://localhost:8080)

## Install the Webpack Example 
    
    cd examples/webpack
    npm install
    npm start
    
Then access [http://localhost:8080](http://localhost:8080)
