import joblib

model = joblib.load('music_recommender.joblib')

def predict_rating(num1, num2):
    X = [[num1, num2]]
    return model.predict(X)[0]
