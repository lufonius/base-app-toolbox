pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                cd package
                npm install
                npm run test-headless
            }
        }
    }
}