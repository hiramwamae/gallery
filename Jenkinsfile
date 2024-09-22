pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('Install Dependencies'){ //express,body-parser,mongoose
            steps{
                sh 'npm install'
            }
        }
    }
}