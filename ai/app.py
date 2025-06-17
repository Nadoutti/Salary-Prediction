from mymodel import train_model, save_model
from manipulating_data import X, y


model = train_model(X, y)

save_model(model)
