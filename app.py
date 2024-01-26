from flask import Flask, jsonify, request
# from core import decomposition, options, summarize

app = Flask(__name__)


@app.route("/decomposition", methods=["POST"])
def decomposition_endpoint():

    # mock results
    result = [
        "This is the first mock sub task",
        "This is the second mock sub task",
        "This is the third mock sub task",
        "This is the fourth mock sub task",
        "This is the fifth mock sub task",
        "This is the sixth mock sub task",
        "This is the seventh mock sub task",
        "This is the eighth mock sub task"
    ]

    return jsonify(result)

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


@app.route("/summarize", methods=["POST"])
def summarize_endpoint():

    results = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc at tincidunt lacinia, nisl nunc aliquam nunc, id tincidunt nunc nunc id nunc. Sed auctor, mauris sed ultrices tincidunt, nunc nunc aliquam nunc, id tincidunt nunc nunc id nunc. Sed auctor, mauris sed ultrices tincidunt, nunc nunc aliquam nunc, id tincidunt nunc nunc id nunc. Sed auctor, mauris sed ultrices tincidunt, nunc nunc aliquam nunc, id tincidunt nunc nunc id nunc. Sed auctor, mauris sed ultrices tincidunt, nunc nunc aliquam nunc, id tincidunt nunc nunc id nunc."

    return jsonify(results)

#     data = request.json
#     primary_goal = data.get("primary_goal")
#     history = data.get("history", [])

#     result = summarize(primary_goal, history)
#     return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
