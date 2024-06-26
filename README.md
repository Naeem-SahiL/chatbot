# CodeMap

This repository includes code and data for querying and managing datasets using Colab notebooks. Additionally, it features a front-end project for user interaction.

## Repository Contents

- **Colab Notebooks:**
  - `model_Training.ipynb`: Notebook for training models and querying data.
  - `DatasetRetrievel.ipynb`: Notebook for uploading and retrieving datasets.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Google Colab or Jupyter Notebook
- Node.js (version 20 or higher)
- Angular (version 18 or higher)
- Ngrok account for tunneling

### Cloning the Repository

Clone the repository using:

```bash
git clone <repository_url>
cd <repository_directory>
```

## Using the Colab Notebooks

### 1. Model Training Notebook (`model_Training.ipynb`)

Open this notebook in Google Colab or Jupyter Notebook to index data and execute model queries.

**Running the Notebook:**
- Use provided data or upload your own.
- Follow instructions within the notebook.

### 2. Dataset Retrieval Notebook (`DatasetRetrievel.ipynb`)

Use this notebook for uploading and retrieving custom datasets.

**Running the Notebook:**
- Follow instructions for data upload and retrieval.

## Setting Up the Front-End Project

Navigate to `CodeMap_Chat_FE` for the front-end setup:

### 1. Configuration

Edit `proxy.config.json` and replace the `target` with your Ngrok link:

```json
{
  "target": "https://<your_ngrok_link>.ngrok-free.app",
  "secure": false,
  "changeOrigin": true,
  "pathRewrite": {
    "^/api": "/promptHandling"
  },
  "headers": {
    "Content-Type": "application/json"
  }
}
```

### 2. Install Dependencies

Install dependencies for the front-end project:

```bash
cd CodeMap_Chat_FE
npm install
```

### 3. Run the Front-End

Start the front-end project:

```bash
npm start
```
