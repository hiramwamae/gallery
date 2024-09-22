pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('Clone repo'){
           steps{
               git(
                   git branch: 'master', url: 'https://github.com/hiramwamae/gallery'
               )
           }
       }
        stage('Check Version'){
            steps{
                sh 'node --version'
            }
        }
        stage('Install Required Softwares'){
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