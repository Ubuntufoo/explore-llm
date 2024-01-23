from flask import Flask, jsonify, request
# from core import decomposition, options, summarize

app = Flask(__name__)


@app.route("/decomposition", methods=["POST"])
def decomposition_endpoint():

    # mock results
    results = [
        {
            "id": "unique_id1",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the first sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id2",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the second sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id3",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the third sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id4",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the fourth sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id5",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the fifth sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id6",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the sixth sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id7",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the seventh sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
        {
            "id": "unique_id8",
            "object": "response",
            "created": 1677649420,
            "model": "text-davinci-003",
            "choices": [
                {
                    "message": "This is the eighth sample response from the API",
                    "confidence": 0.95,
                    "index": 0
                }
            ]
        },
    ]

    return jsonify(results)

# def decomposition_endpoint():
#     data = request.json
#     primary_goal = data.get("primary_goal")
#     personalization = data.get("personalization")
#     history = data.get("history", [])

#     result = decomposition(primary_goal, personalization, history)
#     return jsonify(result)


@app.route("/options", methods=["POST"])
def options_endpoint():
    data = request.json
    # mock results
    results = [
        "This is option 1",
        "This is option 2",
        "This is option 3",
        "This is option 4",
        "This is option 5",
        "This is option 6",
        "This is option 7",
        "This is option 8"
    ]

    return jsonify(results)

# def options_endpoint():
#     data = request.json
#     primary_goal = data.get("primary_goal")
#     task = data.get("task")
#     personalization = data.get("personalization")
#     history = data.get("history", [])

#     result = options(primary_goal, task, personalization, history)
#     return jsonify(result)


# @app.route("/summarize", methods=["POST"])
# def summarize_endpoint():
#     data = request.json
#     primary_goal = data.get("primary_goal")
#     history = data.get("history", [])

#     result = summarize(primary_goal, history)
#     return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
