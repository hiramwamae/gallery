pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('cloning code'){
            steps{
                git branch: 'master', url: 'https://github.com/hiramwamae/gallery'
            }
        }
        stage('Check Version'){
            steps{
                sh 'node --version'
            }
        }
        stage('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Render'){
            steps{
                sh 'node server'
            }
        }
    }
}