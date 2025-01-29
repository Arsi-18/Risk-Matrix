function generateRisk() {
    const promptInput = document.getElementById("prompt-input").value;

    // Input validation
    if (!promptInput.trim()) {
        alert("Please enter a valid prompt.");
        return; // Exit the function if input is empty
    }

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

    addRiskToMatrix(riskName, likelihood, severity);
    document.getElementById("prompt-input").value = ""; // Clear the input
}

function addRiskToMatrix(riskName, likelihood, severity) {
    const matrix = document.getElementById("risk-matrix").getElementsByTagName("tbody")[0];
    let likelihoodIndex = ["Rare", "Unlikely", "Possible", "Likely", "Almost Certain"].indexOf(likelihood);
    let severityIndex = ["Insignificant", "Minor", "Moderate", "Major", "Severe"].indexOf(severity);

    if (likelihoodIndex !== -1 && severityIndex !== -1) {
        const cell = matrix.rows[severityIndex].cells[likelihoodIndex + 1]; // +1 to skip the header
        cell.textContent += `${riskName}; `;
        cell.classList.add(getRiskClass(severity));
    }
}

function getRiskClass(severity) {
    if (severity === "Insignificant") return "low";
    else if (severity === "Minor") return "medium";
    else if (severity === "Moderate") return "high";
    else if (severity === "Major") return "very-high";
    else if (severity === "Severe") return "critical";
    return "";
}

function downloadCSV() {
    const matrix = document.getElementById("risk-matrix");
    let csv = [];
    for (let row of matrix.rows) {
        let rowData = [];
        for (let cell of row.cells) {
            rowData.push(cell.textContent.trim());
        }
        csv.push(rowData.join(","));
    }
    const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(csvFile);
    downloadLink.download = "risk_matrix.csv";
    downloadLink.click();
}
