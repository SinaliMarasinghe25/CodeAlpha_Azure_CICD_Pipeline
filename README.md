# 🚀 CodeAlpha Azure CI/CD Pipeline

A complete DevOps project demonstrating an end-to-end **Azure CI/CD pipeline** for a containerized **Node.js Task Manager Web Application** using **Azure DevOps, Docker, Azure Container Registry, and Azure App Service**.

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Azure DevOps](https://img.shields.io/badge/Azure%20DevOps-CI%2FCD-0078D7)
![Azure](https://img.shields.io/badge/Azure-App%20Service-0089D6)
![Security](https://img.shields.io/badge/Security-Trivy%20Scan-orange)

---

## 📌 Project Overview

This project implements a real-world DevOps workflow where code changes are automatically tested, containerized, scanned, pushed to a container registry, and deployed to the cloud.

The application is a simple **Task Manager web app** built with **Node.js, Express.js, HTML, CSS, and JavaScript**. It is packaged using Docker and deployed automatically through an Azure DevOps pipeline.

---

## 🛠️ Tech Stack

| Area             | Tools                         |
| ---------------- | ----------------------------- |
| Frontend         | HTML, CSS, JavaScript         |
| Backend          | Node.js, Express.js           |
| Testing          | Jest, Supertest               |
| Containerization | Docker                        |
| Source Control   | Git, GitHub                   |
| CI/CD            | Azure DevOps, Azure Pipelines |
| Registry         | Azure Container Registry      |
| Hosting          | Azure App Service             |
| Security         | Trivy                         |
| Cloud Security   | Managed Identity, AcrPull     |

---

## ⚙️ CI/CD Workflow

```text
GitHub Repository
        ↓
Azure DevOps Pipeline
        ↓
Install Dependencies
        ↓
Run Automated Tests
        ↓
Build Docker Image
        ↓
Run Trivy Security Scan
        ↓
Push Image to Azure Container Registry
        ↓
Deploy to Azure App Service
        ↓
Live Web Application
```

---

## ✨ Key Features

* Dockerized Node.js Task Manager application
* Automated CI/CD pipeline using Azure DevOps
* Automated testing before deployment
* Docker image vulnerability scanning with Trivy
* Docker image storage in Azure Container Registry
* Automated deployment to Azure App Service
* Secure ACR image pulling using Managed Identity and AcrPull role
* Health check endpoint for deployment verification
* Pipeline logs and App Service logs for monitoring
* Rollback support using previous Docker image tags

---

## 📂 Project Structure

```text
CodeAlpha_Azure_CICD_Pipeline/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── bg.jpg
│
├── tests/
│   └── app.test.js
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── azure-pipelines.yml
└── README.md
```

---

## 🧪 Testing

Automated tests were implemented using **Jest** and **Supertest**.

```bash
npm test
```

The pipeline runs tests before deployment. If tests fail, the deployment process stops automatically.

---

## 🐳 Docker Setup

Build the Docker image locally:

```bash
docker build -t codealpha-azure-cicd-pipeline .
```

Run the container:

```bash
docker run -p 3000:3000 codealpha-azure-cicd-pipeline
```

Open the app:

```text
http://localhost:3000
```

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/SinaliMarasinghe25/CodeAlpha_Azure_CICD_Pipeline.git
cd CodeAlpha_Azure_CICD_Pipeline
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open in browser:

```text
http://localhost:3000
```

Health endpoint:

```text
http://localhost:3000/health
```

---

## 🔐 Security & Deployment

The deployment uses **Managed Identity** and the **AcrPull** role so that Azure App Service can securely pull Docker images from Azure Container Registry without storing registry passwords in the source code.

The Docker image is also scanned using **Trivy** before being pushed and deployed.

---

## 🔄 Rollback Strategy

Each pipeline run pushes Docker images with:

```text
latest
Build ID tags
```

If a new deployment fails, a previous working image tag from Azure Container Registry can be redeployed to Azure App Service.

---

## 📌 Project Status

```text
Completed
```

This project successfully demonstrates a complete Azure DevOps CI/CD workflow with automated testing, Docker image build, security scanning, ACR image storage, App Service deployment, monitoring, and rollback support.

---

## 👩‍💻 Author

**Sinali Lawanya**
GitHub: [SinaliMarasinghe25](https://github.com/SinaliMarasinghe25)

---

## 🏷️ Tags

`Azure DevOps` `CI/CD` `Docker` `Node.js` `Express.js` `Azure App Service` `Azure Container Registry` `Trivy` `DevOps Project` `Cloud Deployment`
