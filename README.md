# CodeMap

This repository contains the code and data for querying and retrieving datasets using provided Colab notebooks. Additionally, a front-end (FE) project is included for interaction.

## Repository Contents

- `Model_Training_(2).ipynb`: Colab notebook for training the model and querying data.
- `DatasetRetrievel.ipynb`: Colab notebook script for retrieving and uploading data.
- `CodeMap_Chat_FE`: Front-end project folder.

## Getting Started

### Prerequisites

- Google Colab or Jupyter Notebook
- Node.js (version 20 or above)
- Angular (version 18 or above)
- Ngrok account for tunneling

### Cloning the Repository

Clone the repository using the following command:

```bash
git clone <repository_url>
cd <repository_directory>
```

## Using the Colab Notebooks

### 1. Model Training Notebook

Open the `Model_Training_(2).ipynb` notebook in Google Colab or Jupyter Notebook. This notebook contains the code for training the model and querying the data.

**Running the Notebook:** Follow the instructions within the notebook cells to execute the code.

### 2. Dataset Retrieval Notebook

Open the `DatasetRetrievel.ipynb` notebook in Google Colab or Jupyter Notebook. This notebook is used for uploading your own data and retrieving datasets.

**Running the Notebook:** Follow the instructions within the notebook cells to execute the code for data retrieval.

## Front-End Project Setup

The front-end project is located in the `CodeMap_Chat_FE` folder. To set up and run the front-end:

### 1. Configuration

Edit the `proxy.config.json` file in the `CodeMap_Chat_FE` folder. Replace the `target` value with the ngrok link provided at the end of the Colab notebook:

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

Navigate to the `CodeMap_Chat_FE` folder and install the required dependencies:

```bash
cd CodeMap_Chat_FE
npm install
```

### 3. Run the Front-End

Start the front-end project using the following command:

```bash
npm run
```

