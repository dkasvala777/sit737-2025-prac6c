# SIT737 - Task 6.1D - Kubernetes Deployment

## Task Name: Creating a Kubernetes Cluster for a Containerized Node.js Application

In this task, I deployed the Node.js application (from Task 5.1P) onto a Kubernetes cluster using Minikube and Docker. Below are the steps I followed:

### Step 1: Started on CMD

- First, I ran `minikube start --driver=docker` to start Kubernetes.
- Tried `eval $(minikube docker-env)` but got an error because it doesn't work in CMD.
- I built the Docker image with `docker build -t node-app:v1 .`, but Kubernetes gave `ImagePullBackOff`.

### Step 2: Switched to PowerShell

- Closed CMD and opened PowerShell.
- Ran the command to point Docker to Minikube:

& minikube -p minikube docker-env --shell powershell | Invoke-Expression

arduino
Copy
Edit

- Rebuilt the image:

docker build -t node-app:v1 .

yaml
Copy
Edit

### Step 3: Created Deployment and Service YAML

- Created `deployment.yaml` and added:

```yaml
image: node-app:v1
imagePullPolicy: Never
Also created service.yaml to expose the app on port 30036.

Step 4: Applied Kubernetes Configuration
Applied using:

nginx
Copy
Edit
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
Checked pod status with:

arduino
Copy
Edit
kubectl get pods
Step 5: Accessed the App
Ran:

css
Copy
Edit
minikube service node-app-service --url
Opened the local URL in browser and verified the app is running.

Step 6: Checked Logs
Used:

php-template
Copy
Edit
kubectl logs <pod-name>
Files Included
Dockerfile

deployment.yaml

service.yaml

README.md

yaml
Copy
Edit

---

Now commit and push it to GitHub:

```bash
git add README.md
git commit -m "Added README.md with deployment steps"
git push
