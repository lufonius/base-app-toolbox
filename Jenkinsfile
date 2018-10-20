pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'cd package'
                sh 'npm install'
                sh 'npm run test-headless'
            }
        }
    }
}