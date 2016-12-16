

node {
    stage 'Checkout'
    // Checkout code from repository
    checkout scm

    stage 'Build'
    sh "npm install"
    sh "npm install bower"
    sh "bower install"
    sh "pwd"
    sh "gulp build"
    gulp clean
    stage 'Deploy '
    sh "cp -Rf dist/*  /var/www/gui-therapy"


}
