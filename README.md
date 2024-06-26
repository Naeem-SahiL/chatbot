# CodeMap

This repository contains the code and data for querying and retrieving datasets using provided Colab notebooks. Additionally, a front-end (FE) project is included for interaction.

## Repository Contents
FE with aditional folder of Colab Resources which contains

- `model_Training_(2).ipynb`: Colab notebook for training the model and querying data.
- `DatasetRetrievel.ipynb`: Colab notebook script for retrieving and uploading data.
- `feature_dataset(1).json`: Front-end project folder.

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

Open the `Model_Training_(2).ipynb` notebook in Google Colab or Jupyter Notebook. This notebook contains the code for indexing data and using the model to query this data.

**Running the Notebook:** Follow the instructions within the notebook cells to execute the code.

- **Using Provided Data:** If you want to use the data provided in the repository, follow the instructions as-is.
- **Using Custom Data:** If you want to use your own data, upload your dataset and adjust the code accordingly to point to your data files.

### 2. Dataset Retrieval Notebook (only for custom data)

Open the `DatasetRetrievel.ipynb` notebook in Google Colab or Jupyter Notebook. This notebook is used for uploading your own data and retrieving datasets.

**Running the Notebook:** Follow the instructions within the notebook cells to execute the code for data retrieval.
- **Using Custom Data:** If you want to upload and use your own data, follow the instructions in the notebook to upload your dataset and adjust the code accordingly.

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

