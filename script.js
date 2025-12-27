const sheetID = "https://docs.google.com/spreadsheets/d/10AKTBh0YJ2S0jtM3UNEljvJr0PX1g2SNHOd3j2xtbJ0";
const sheetName = "Sheet1";

const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("price-table");

    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.Item}</td>
        <td>${item.Description}</td>
        <td>$${item.Price}</td>
      `;
      table.appendChild(row);
    });
  })
  .catch(err => console.error("Error loading prices:", err));
