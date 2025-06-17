from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


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
    # Here you would typically process the input data and return a prediction
    # For demonstration, we will just return the received data
    return {"received_data": data}
