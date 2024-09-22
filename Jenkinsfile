pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Deploy Local'){
            steps{
                sh 'node server'
            }
        }
    }
}