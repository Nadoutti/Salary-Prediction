FROM python:3.9

# Set the working directory

WORKDIR /app


# Copy the requirements file into the container

COPY requirements.txt .


# Install the dependencies

RUN pip install --no-cache-dir -r requirements.txt


# Copy the rest of the application code into the container

COPY . .

# Expose the port the app runs on

EXPOSE 5000


CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "5000"]
