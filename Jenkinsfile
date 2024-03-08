pipeline {
    agent any
    tools {
        //Specify the nodejs installation name
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
              // Install dependencies and build the application
              sh 'npm install'
              sh 'npm run build'

            }

         }
    }

}
