let model;

async function loadModel() {
    // Load the JSON model
    const response = await fetch('catboost_model.json');
    model = await response.json();
}

function predict(inputData) {
    // Placeholder for the actual prediction logic
    // This will depend on how the model JSON is structured
    // Example logic: using float features and categorical features

    // For simplicity, assuming the model uses some basic calculations with inputData
    const prediction = model.oblivious_trees[0].leaf_values[0] * inputData; // Simplified example

    return prediction;
}

function onPredictClick() {
    const inputData = document.getElementById('inputData').value;
    const output = predict(inputData);
    document.getElementById('output').innerText = `Prediction: ${output}`;
}

// Load the model when the page loads
window.onload = loadModel;
