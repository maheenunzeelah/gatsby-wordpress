pipeline{
 agent {
     docker{
         image 'node',
         args '-p 8000:8000'
     }
 }
 stages{
     stage('Build'){
         steps{
             sh 'npm install'
         }
     }
 }
}