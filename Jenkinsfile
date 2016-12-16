

node {
    stage 'Checkout'
    // Checkout code from repository
    checkout scm

    stage 'Build'
    sh "npm install"
    sh "npm install bower"
    sh "bower install"
    sh "pwd"
    sh "gulp clean"
    sh "gulp build"

    stage 'Deploy '
    sh "cp -Rf dist/*  /var/www/gui-therapy"


}
