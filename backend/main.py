from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from joblib import load



app = FastAPI()


# CORS middleware to allow requests from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)


#route for predicting with the model
@app.post("/predict")
async def predict(data: dict):
    
    loaded_model = load("../ai/linear_regression_model.joblib")
    

    # Assuming the input data is a dictionary with the necessary features
    features = np.array([data[key] for key in sorted(data.keys())]).reshape(1, -1)

    # Predicting using the loaded model
    
    prediction = loaded_model.predict(features)


    return prediction.item(0)  # Return the prediction as a single value
