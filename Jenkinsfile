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
       stage('Build') {
            steps {
                sh '''
                    cd package/user-management
                    npm build
                '''
            }
       }
       stage('Release') {
            steps {
                sh '''
                    cd package/user-management/dist
                    npm publish
                '''
            }
       }
    }
}