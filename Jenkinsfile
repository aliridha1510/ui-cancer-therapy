

node {
    checkout scm

    stage 'Build'
    sh "npm install"
    sh "npm install bower"
    sh "bower install"
    sh "pwd"
    sh "gulp build"

    stage 'Deploy to Integration'
    sh "cp -Rf dist/*  /var/www/gui-therapy"


}
