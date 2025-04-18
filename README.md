SIT737 - Task 6.2C - Interacting with Kubernetes

Task Overview
In this task, I interacted with the Kubernetes cluster using kubectl, port-forwarding, and updated the Node.js application deployed in Task 5.1P. I also rebuilt the Docker image with a new version and updated the Kubernetes deployment to use the new image.

Part I: Interacting with the Cluster

Step 1: Verified Application is Running
I ran the following commands to verify that the pod and service were active:
kubectl get pods
kubectl get services

Step 2: Used Port Forwarding
Since port 8080 was busy, I forwarded port 8888 from my local machine to port 3000 in the container:
kubectl port-forward service/node-app-service 8888:3000

Then I opened the application in my browser at:
http://localhost:8888
The application loaded successfully.

Part II: Updating the Application

Step 3: Modified the Node.js App
I edited the main app file (app.js) and changed the welcome message from:
res.send('Hello World');
to:
res.send('This is the updated version');

Step 4: Rebuilt the Docker Image
I built a new Docker image with a new version tag:
docker build -t node-app:v2 .

Step 5: Updated deployment.yaml
In my deployment.yaml, I updated the image name and added the image pull policy:
image: node-app:v2
imagePullPolicy: Never

Step 6: Re-applied Deployment
I applied the updated deployment:
kubectl apply -f deployment.yaml

Step 7: Verified the Update
I verified that the new pod was running:
kubectl get pods

Then I used port-forwarding again:
kubectl port-forward service/node-app-service 8888:3000

Opened the app in the browser at:
http://localhost:8888
The updated version message appeared.

Files Included

Dockerfile

app.js (updated)

deployment.yaml

service.yaml

README.md

