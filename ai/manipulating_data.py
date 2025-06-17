import pandas as pd

db_csv = pd.read_csv('./data/db_v1.xls')


X = db_csv[['YearsExperience']]

y = db_csv['Salary']
