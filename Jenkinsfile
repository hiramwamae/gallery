pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    environment{
        SLACK_CHANNEL ='hiram_ip1'
        RENDER_URL ='https://gallery-91ye.onrender.com'
    }
    stages{
        stage('Checkout'){ //Checkout code from Git repository
            steps{
                git branch: 'master', url: 'https://github.com/hiramwamae/gallery'
            }
        }
        stage('Install Dependencies'){ //install Node.Js dependencies
            steps{
                sh 'npm install'
            }
        }
        stage('Build'){ //Run Build process
            steps{
                sh 'npm run'
            }
        }
        stage('Test'){ //run serverTest.js
            steps{
                sh 'npm test'
            }
        }
    }
    post{
        success {
                slackSend(
                    channel: env.SLACK_CHANNEL,
                    color: 'good',
                    message: "Build ${env.BUILD_NUMBER} was successfully deployed to Render.com!\n view app at: ${env.RENDER_URL}"
                )
            }
        failure{
            //send email on failure
            mail to: "hiramwamae@gmail.com",
            subject:"FAILURE: ${currentBuild.fullDisplayName}",
            body: "Test Complete Build failed."
        }
    }
}


