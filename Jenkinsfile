pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('Checkout'){ //Checkout code from Git repository
            steps{
                git branch: 'master', url: 'https://github.com/hiramwamae/gallery'
            }
        }
    }
    stages{
        stage('Install Dependencies'){ //install Node.Js dependencies
            steps{
                sh 'npm install'
            }
        }
    }
    stages{
        stage('Test'){ //run serverTest.js
            steps{
                sh 'npm test'
            }
        }
    }
    post{
        failure{
            //send email on failure
            mail to: "hiramwamae@gmail.com",
            subject:"FAILURE: ${currentBuild.fullDisplayName}",
            body: "Test Complete Build failed."
        }
    }
}


