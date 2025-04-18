# SIT737 - Task 6.2C - Interacting with Kubernetes

## Task Overview
In this task, I interacted with the Kubernetes cluster by using `kubectl`, port-forwarding, and updating the Node.js application deployed in Task 5.1P. I also rebuilt the Docker image with a new version and updated the deployment to reflect the change.

---

## Part I: Interacting with the Cluster

### Step 1: Verified Application is Running
I ran the following commands to verify that the pod and service were active:

```bash
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

javascript

res.send('Hello World');
to:

javascript
res.send('This is the updated version');
Step 4: Rebuilt the Docker Image
I built a new Docker image with a new tag:

docker build -t node-app:v2 .
Step 5: Updated deployment.yaml
In my deployment.yaml, I changed:

image: node-app:v1
to:

image: node-app:v2
imagePullPolicy: Never
Step 6: Re-applied Deployment
I applied the updated deployment:

kubectl apply -f deployment.yaml
Step 7: Verified the Update
I verified the new pod was running:


kubectl get pods
Then I ran port-forward again:

kubectl port-forward service/node-app-service 8888:3000
Opened http://localhost:8888 and confirmed the new version message appeared.

Files Included
Dockerfile

app.js (updated)

deployment.yaml

service.yaml

README.md

yaml
Copy
Edit

---

Let me know if you'd like it saved as a `.md` file for upload or need screenshots added too.

