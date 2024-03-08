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
        stage ('docker image') {
           steps {
               //build the docker image from dockerfile
               sh "docker build -t portfolioimage -f ${DOCKERFILE_PATH} ."
              
           }
        }
        stage('Push to Docker Hub') {
            steps {
                // Authenticate with Docker Hub
                withCredentials([string(credentialsId: DOCKER_CREDENTIALS_ID, variable: 'DOCKER_PASSWORD')]) {
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
            }

                // Push the Docker image to Docker Hub
                sh "docker push ${DOCKER_IMAGE_NAME}"
        }
    }

}
