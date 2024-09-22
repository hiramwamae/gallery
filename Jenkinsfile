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

    post {
    success {
      script {
        // Slack notification for successful build, push, and deployment
        //slackSend(channel: '#node_app', message: ':heavy_check_mark: successful!')
      }
    }
    failure {
      script {
        // Email notification on failed test
        echo "This will run if the job failed"
        mail to: "hiramwamae@gmail.com",
             subject: "${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} has failed",
             body: "For more info on the pipeline failure, check out the console output at ${env.BUILD_URL}"
      }
    }
  }
}


