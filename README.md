# Basics of CI/CD for DevOps

To learn DevOps methodology and softwares, the goal of this project is to implement DevOps tools on whatever project. To be easier, I made up a simple Nodejs project to try implementing Continuous Integration and Delivery. This project covers the whole CI/CD process.

## Installation

Clone the repository and install the dependencies.

```
git clone
cd ece-devops-rambaud-shue
npm i -S express body-parser mocha chai 
```

## Dependencies

* express: - for handling our web server
* body-parser: - Node.js body parsing middleware.
* mocha: - test framework to run our unit test
* chai: - javascript assertion library

## GitLab CI/CD

The access to the GitLab account are:

```
login: phiram2306@gmail.com
password: HelloWorld2020
```

Select the DevOps project:

```
ece-devops-rambaud-shue
```

We amuse ourself to try project management, you can check the "Boards" section in "Issues". It is juste about trying to understand the software and how to use it.

In the "CI/CD" section you can check the different pipelines. To verify the good CI/CD of the project you may run a pipeline with the green button "Run pipeline". You will see if each jobs are well performed or not.

## Running the Unit Test

To test the app, you can do it from the bash, in the project directory:

```
npm test
```


## Deployment

Deployment are done with [Heroku](https://dashboard.heroku.com/). 

## Versioning

We used [Github](http://github.com) for versionning. This repository contains the last version available.

## Authors

* **Philippe RAMBAUD** & **Yven SHUE**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* **M.JOUET** for his DevOps course
* **Billie THOMPSON** for her README Template and her good explanations on GitHub - see [PurpleBooth](https://github.com/PurpleBooth)
* OpenClassrooms CI/CD course - see [OpenClassrooms - CI/CD](https://openclassrooms.com/fr/courses/2035736-mettez-en-place-lintegration-et-la-livraison-continues-avec-la-demarche-devops)
