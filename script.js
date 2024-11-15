async function fetchIPInfo() {
    const url = "https://ipinfo.io/27.145.21.252/json?token=17064f8531fdb3";
    const dataDiv = document.getElementById("data");

    try {
        dataDiv.textContent = "Loading...";
        const response = await fetch(url);
        const data = await response.json();

        // ฟิลด์ที่ต้องการแสดง
        const fields = [
            { key: "ip", label: "IP Address" },
            { key: "hostname", label: "Hostname" },
            { key: "city", label: "City" },
            { key: "region", label: "Region" },
            { key: "country", label: "Country" },
            { key: "loc", label: "Location" },
            { key: "org", label: "Organization" },
            { key: "timezone", label: "Timezone" }
        ];

        let table = "<table><tr><th>Field</th><th>Value</th></tr>";
        fields.forEach(field => {
            table += `<tr><td>${field.label}</td><td>${data[field.key] || "N/A"}</td></tr>`;
        });
        table += "</table>";

        dataDiv.innerHTML = table;
    } catch (error) {
        dataDiv.textContent = "Error fetching data. Please try again.";
        console.error(error);
    }
}
