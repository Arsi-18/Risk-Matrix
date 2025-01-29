function generateRisk() {
    const promptInput = document.getElementById("prompt-input").value;

    // Basic AI-like interpretation of the prompt
    let riskName = "Unknown Risk";
    let likelihood = "Possible";
    let severity = "Minor";

    // Simple keyword-based interpretation
    if (promptInput.toLowerCase().includes("data loss")) {
        riskName = "Data Loss";
        likelihood = "Almost Certain";
        severity = "Major";
    } else if (promptInput.toLowerCase().includes("security breach")) {
        riskName = "Security Breach";
        likelihood = "Likely";
        severity = "Severe";
    } else if (promptInput.toLowerCase().includes("ui bug")) {
        riskName = "UI Bug";
        likelihood = "Likely";
        severity = "Minor";
    }

    addRiskToList(riskName, likelihood, severity);
    document.getElementById("prompt-input").value = ""; // Clear the input
}

function addRiskToList(riskName, likelihood, severity) {
    const riskList = document.getElementById("risks");
    const newRisk = document.createElement("li");
    newRisk.textContent = `${riskName} - Likelihood: ${likelihood}, Severity: ${severity}`;

    let riskClass = "";
    if (severity === "Insignificant") riskClass = "low";
    else if (severity === "Minor") riskClass = "medium";
    else if (severity === "Moderate") riskClass = "high";
    else if (severity === "Major") riskClass = "very-high";
    else if (severity === "Severe") riskClass = "critical";

    newRisk.classList.add(riskClass);
    riskList.appendChild(newRisk);
}
