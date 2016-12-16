

node {
    checkout scm

    stage 'Build'
    sh "npm install"
    sh "npm install bower"
    sh "gulp build"

    stage 'Deploy to Integration'
    sh "cp -Rf dist/*  /var/www/gui-therapy"


}
