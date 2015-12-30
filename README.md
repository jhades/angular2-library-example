
# Learn how to build an Angular 2 Library

An example repository for learning how to build your own Angular 2 library. Learn how to setup a library namespace, how to build it, version it, publish it into npm and consume with either SystemJs or Webpack.

See further details in this blog post - [How to create an Angular 2 component library](http://blog.jhades.org/how-to-create-an-angular-2-library/)

Note: In the future probably [angular-cli](https://github.com/angular/angular-cli) will have scaffolding for building modules using multiple module systems

# Installation

Clone the repository and do:

    npm install

# Building the library

    npm run build
    
# Install the SystemJs Example 
    
    cd examples/systemjs
    npm install
    npm run build
    npm start
    
Then access [localhost://8080](localhost://8080).

# Install the SystemJs Example 
    
    cd examples/webpack
    npm install
    npm start
    
Then access [localhost://8080](localhost://8080).
