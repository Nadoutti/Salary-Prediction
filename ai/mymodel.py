from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from joblib import dump


def train_model(X, y):
    """
    Train a linear regression model using the provided features and target variable.

    Parameters:
    X (array-like): Feature matrix.
    y (array-like): Target variable.

    Returns:
    model: Trained linear regression model.
    """
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create a linear regression model
    model = LinearRegression()

    # Fit the model to the training data
    model.fit(X_train, y_train)

    # Predict on the test set
    predictions = model.predict(X_test)

    # Calculate and print the mean squared error
    mse = mean_squared_error(y_test, predictions)
    print(f"Mean Squared Error: {mse}")

    return model

def save_model(model):

    dump(model, "linear_regression_model.joblib")
    print(f"Model saved")



