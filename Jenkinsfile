

node {
    checkout scm

    stage 'Build'
    sh "npm install"
    sh "npm install brower"
    sh "gulp build"

    stage 'Deploy to Integration'
    sh "cp -Rf dist/*  /var/www/gui-therapy"


}
