# Chive Mobile Application - Backend

This project is a hybrid mobile application for both iOS and Android devices developed with Ionic 3 and the MEAN Stack. The app is a recipe book which allows users to store their recipes safely on their devices.

## Introduction
**Chive** is the end of year project developed by myself and [Keith Daly](https://github.com/dalykeith) for our third year of Software Development in GMIT. The app itself is a recipe collection app. The aim of this project was to use knowledge collected over our last three years in college and apply it to learning a suite of new technologies. Primarly the *MEAN stack*, comprised of **MongoDB, Express.js, Angular.js** and **Node.js**. There are two parts to **Chive**, the frontend mobile application developed in *Ionic* and the Node and Express backend with a common *RESTful API*.


## Installation Guide

**No Setup Required**

The entire backend is currently being hosted on Heroku.

For the installation guide for the front-end continue to https://github.com/dalykeith/chive-mobile-application


## Planning

When deciding which technologies to use for the backend we were set on learning the MEAN stack. We were both highly inexperienced with NodeJS and the Javascript Frameworks and were determined to learn what goes into designing a fullstack application. 

We set about initially with the plan to develop an application with CRUD functionality and a RESTful API. The final result of this was an app that adheres to the primary principles of REST. We worked to ensure the client always holds the session state and the backend effectively implements the HTTP methods of GET, POST and DELETE.


## Technologies Used


* **NodeJS**: A Javascript runtime environment that allows you to implement your application back-end in Javascript. NodeJS is everywhere these days. It is based on Google's V8 JavaScript engine which is used in the Chrome browsers. The main benefit of using it for this project was it's easy to use modules for implementing the HTTP network protocols.

* **MongoDB**: MongoDB is a document database. Instead of storing data in rows and columns as one would with a relational database, MongoDB stores JSON documents in collections with dynamic schemas. 
  * **Mongoose**: Mongoose is an object data modeling (ODM) library. In simple terms this just means that Mongoose allows you to define objects with a strongly-typed schema that is mapped to a MongoDB document. Mongoose is built upon the MongoDB driver to provide programmers with a way to model their data. Although not included in this project it also has support for validation. 
 
