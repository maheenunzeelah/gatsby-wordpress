pipeline{
 agent none
   stages{
     stage('docker npm version'){
         agent{
             docker(image 'node')
         }
         steps{
             sh 'node -v'
             sh 'npm -v'
         }
     }
     stage('dockerfile npm version'){
         agent{
             dockerfile true
         }
         steps{
             sh 'node -v'
             sh 'npm -v'
         }
     }