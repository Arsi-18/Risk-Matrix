function addRisk() {
    const riskName = document.getElementById("risk-name").value;
    const likelihood = document.getElementById("likelihood").value;
    const severity = document.getElementById("severity").value;

    if (!riskName) {
        alert("Please enter a risk name.");
        return;
    }

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

    document.getElementById("risk-name").value = "";
}

   
