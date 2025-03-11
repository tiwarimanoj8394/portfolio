pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'manojtiwari000/reactapp:v2'
    }
    tools {
        Specify the nodejs installation name
        nodejs 'Nodejs-20'
    }    
    stages {
        stage('Checkout') {
           steps {
               // Checkout code from git repository
               checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Githubformanoj/portfolio.git']])
           }
        }

        stage('Build') {
           steps {
              Install dependencies and build the application
              sh 'npm install'
              sh 'npm run build'

            }

         }
        stage('docker image') {
           steps {
               build the docker image from dockerfile
               sh 'docker build -t portfolioimage .'
              
           }
        }
        stage('Tag and Push to Docker Hub') {
            steps {
                 withCredentials([usernamePassword(credentialsId: 'Docker-Credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                    sh "docker tag portfolioimage $DOCKER_IMAGE_NAME"
                    sh "docker push $DOCKER_IMAGE_NAME"
                }
            }
        }

        stage('Deploy the image to minikube cluster') {
            steps {
                withCredentials([
            string(credentialsId: 'secret', variable: 'api_token')
            ]) {
             sh 'kubectl --token $api_token --server https://192.168.49.2:8443  --insecure-skip-tls-verify=true apply -f deployment.yaml --namespace=jenkins '
             sh 'kubectl --token $api_token --server https://192.168.49.2:8443  --insecure-skip-tls-verify=true apply -f service.yaml --namespace=jenkins '
             
               }
            }
        }
    }
}
