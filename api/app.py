from flask import Flask, jsonify, request
from flask_cors import CORS
from predict import predict_rating

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    num1 = float(request.json['num1'])
    num2 = float(request.json['num2'])
    rating = predict_rating(num1, num2)
    response = {'rating': rating}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
