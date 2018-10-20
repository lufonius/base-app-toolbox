pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh '''
                cd package
                npm install
                npm run test-headless
                '''
            }
        }
    }
}