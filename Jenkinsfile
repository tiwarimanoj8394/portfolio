pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'Docker-Credentials'
        DOCKER_IMAGE_NAME = 'manojtiwari000/portfolioimage'
        DOCKERFILE_PATH = 'Dockerfile'
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
               sh "docker build -t portfolioimage -f ${DOCKERFILE_PATH} ."
              
           }
        }
        stage('Push to Docker Hub') {
            steps {
                // Authenticate with Docker Hub
                 withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                 }
                
                 // Push the Docker image to Docker Hub
                 sh 'docker push manojtiwari000/portfolioimage:latest'
                
            }

        }
    }

}
