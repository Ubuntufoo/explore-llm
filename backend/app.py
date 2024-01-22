from flask import Flask, jsonify, request
# from core import decomposition, options, summarize

app = Flask(__name__)


@app.route("/decomposition", methods=["POST"])
def decomposition_endpoint():

    # mock result
    result = {
        "id": "unique_id",
        "object": "response",
        "created": 1677649420,
        "model": "text-davinci-003",
        "choices": [
            {
                "message": "This is a sample response from the OpenAI API.",
                "confidence": 0.95,
                "index": 0
            }
        ]
    }
    return jsonify(result), 200, {'Content-Type': 'application/json'}

# def decomposition_endpoint():
#     data = request.json
#     primary_goal = data.get("primary_goal")
#     personalization = data.get("personalization")
#     history = data.get("history", [])

#     result = decomposition(primary_goal, personalization, history)
#     return jsonify(result)


# @app.route("/options", methods=["POST"])
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
