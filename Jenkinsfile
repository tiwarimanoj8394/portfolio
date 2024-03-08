pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'Docker-Credentials'
        DOCKER_IMAGE_NAME = 'manojtiwari000/reactapp'
        DOCKERFILE_PATH = 'Dockerfile'
        DOCKER_USERNAME = credentials('Docker-Credentials').username
        DOCKER_PASSWORD = credentials('Docker-Credentials').password
    }
    //tools {
        //Specify the nodejs installation name
        //nodejs 'Nodejs-20'
    //}    
    stages {
        stage('Checkout') {
           steps {
               // Checkout code from git repository
               checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Githubformanoj/portfolio.git']])
           }
        }

        //stage('Build') {
           //steps {
              // Install dependencies and build the application
              //sh 'npm install'
              //sh 'npm run build'

            //}

         //}
        stage('docker image') {
           steps {
               //build the docker image from dockerfile
               sh 'docker build -t portfolioimage .'
              
           }
        }
        stage('Tag and Push to Docker Hub') {
            steps {
                sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                sh "docker tag portfolioimage $DOCKER_IMAGE_NAME:v2"
                sh "docker push $DOCKER_IMAGE_NAME:v2"
            }
        }
    }

}
