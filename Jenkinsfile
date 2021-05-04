#!/usr/bin/env groovy

library identifier: 'js-jenkins-shared-library@main', retriever: modernSCM(
        [$class: 'GitSCMSource',
         remote: 'https://github.com/farru1998/js-shared-library-main.git',
         credentialsId: 'github-credentials'
        ]
)

def gv

pipeline {
    agent any
    stages {
        stage('init') {
            steps {
                script {
                    gv = load 'script.groovy'
                }
            }
        }
	stage('Run app') {
            steps {
              sh('forever start app.js')
            }
        } 
	stage('Test app') {
            steps {
               sh('./node_modules/.bin/mocha')
            }
        } 
	stage('build and push image') {
            steps {
                script {
			buildImage 'mfarhan1998/simpleapp:${BUILD_NUMBER}'
                }
            }
        } 
    }
}
