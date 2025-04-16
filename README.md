# SIT737 - Task 6.1D - Kubernetes Deployment

## Task Name: Creating a Kubernetes Cluster for a Containerized Node.js Application

In this task, I deployed my Node.js application (from Task 5.1P) onto a Kubernetes cluster using Minikube and Docker. Below are the steps I followed during this task.

### Step 1: Started on Command Prompt (CMD)

- I began the task by using the Windows Command Prompt.
- I ran the command `minikube start --driver=docker` to start the Kubernetes cluster.
- I tried running `eval $(minikube docker-env)` but got an error because the `eval` command does not work in CMD.
- Then I built the Docker image using `docker build -t node-app:v1 .`
- However, when I deployed the application using Kubernetes, I received an error: `ImagePullBackOff`. The pod was unable to pull the local image.

### Step 2: Switched to PowerShell

- I closed CMD and opened PowerShell to proceed with the task.
- I ran the following command to point Docker to Minikube’s internal Docker engine:

  `& minikube -p minikube docker-env --shell powershell | Invoke-Expression`

- Then I rebuilt the Docker image again using the same command:

  `docker build -t node-app:v1 .`

### Step 3: Created Kubernetes Files

- I created a `deployment.yaml` file to deploy the Node.js container.
- I made sure to set the imagePullPolicy to "Never" to tell Kubernetes not to try to pull the image from Docker Hub:

```yaml
image: node-app:v1
imagePullPolicy: Never
```

- I also created a `service.yaml` file to expose the application on a NodePort (30036).

### Step 4: Deployed Application to Kubernetes

- I deployed the application using:

  `kubectl apply -f deployment.yaml`  
  `kubectl apply -f service.yaml`

- I verified the pod status using:

  `kubectl get pods`

- This time, the pod was in "Running" status, which confirmed that the application was successfully deployed.

### Step 5: Accessed the Application in Browser

- I ran the command:

  `minikube service node-app-service --url`

- It returned a local URL (like `http://127.0.0.1:51503`) which I opened in the browser and saw my Node.js app running successfully.

### Step 6: Verified Application Logs

- Finally, I ran the following command to see container logs and confirm everything was working:

  `kubectl logs <pod-name>`

## Files Included in This Project

- Dockerfile  
- deployment.yaml  
- service.yaml  
- README.md

---
