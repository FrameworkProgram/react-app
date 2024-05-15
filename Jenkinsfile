pipeline {
    agent {
        docker {
            image 'node:16'
            args '-u root -p 3000:3000'
        }
    }
    stages {
        stage('Build') {  
            steps {
                sh 'npm i --unsafe-perm --registry=https://registry.npmmirror.com'
                sh 'npm run build'
                sh 'cd build/'
                sh 'ls'
            }
        }
        stage('Test') {
            steps {
                echo 'hollow'
            }
        }
        stage('Deploy') { 
            steps {
                echo 'upload to sever'
            }
        }
    }
}