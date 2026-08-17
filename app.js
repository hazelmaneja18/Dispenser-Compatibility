<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fuel Hardware Peripherals Compatibility</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .card { background: #00a86b; padding: 20px; color: white; border-radius: 8px 8px 0 0; }
    .controls { background: #f9f9f9; padding: 20px; display: flex; gap: 15px; border: 1px solid #ccc; }
    select { padding: 8px; width: 250px; }
    .display-area { margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #00ffcc; color: #000; }
    .header-black { background-color: #000; color: #fff; padding: 6px; font-weight: bold; text-align: center; }
    .note-box { background-color: #eee; padding: 10px; border-left: 4px solid #333; margin-bottom: 15px; }
  </style>
</head>
<body>

  <div class="card">
    <h2>Fuel Hardware Peripherals Compatibility</h2>
    <p>Verifone Commander Recommended Minimum Firmware/Software Lookup</p>
  </div>

  <div class="controls">
    <div>
      <label><b>BASE SOFTWARE VERSION</b></label><br>
      <select id="baseSelect" onchange="onBaseChange()">
        <option value="">-- Select Version --</option>
        <option value="55.01.01">Base 55.01.01</option>
        <!-- Future versions can be added here easily -->
      </select>
    </div>

    <div>
      <label><b>DISPENSER BRAND</b></label><br>
      <select id="brandSelect" onchange="onBrandChange()" disabled>
        <option value="">-- Select Brand --</option>
      </select>
    </div>

    <div>
      <label><b>PLATFORM / MODEL</b></label><br>
      <select id="platformSelect" onchange="renderDetails()" disabled>
        <option value="">-- Select Platform --</option>
      </select>
    </div>
  </div>

  <div id="displayArea" class="display-area"></div>

  <!-- Import base version data files -->
  <script src="data-55.01.01.js"></script>

  <script>
    // Registry holding version datasets
    const versionDataMap = {
      "55.01.01": BASE_55_01_01_DATA
      // Add future versions here: "55.02.01": BASE_55_02_01_DATA
    };

    let selectedVersionData = null;

    function onBaseChange() {
      const baseVal = document.getElementById("baseSelect").value;
      const brandSelect = document.getElementById("brandSelect");
      const platformSelect = document.getElementById("platformSelect");
      
      brandSelect.innerHTML = '<option value="">-- Select Brand --</option>';
      platformSelect.innerHTML = '<option value="">-- Select Platform --</option>';
      platformSelect.disabled = true;
      document.getElementById("displayArea").innerHTML = "";

      if (!baseVal || !versionDataMap[baseVal]) {
        brandSelect.disabled = true;
        return;
      }

      selectedVersionData = versionDataMap[baseVal];
      
      // Populate Brands Dropdown
      Object.keys(selectedVersionData.brands).forEach(brand => {
        const opt = document.createElement("option");
        opt.value = brand;
        opt.textContent = brand;
        brandSelect.appendChild(opt);
      });

      brandSelect.disabled = false;
    }

    function onBrandChange() {
      const brandVal = document.getElementById("brandSelect").value;
      const platformSelect = document.getElementById("platformSelect");

      platformSelect.innerHTML = '<option value="">-- Select Platform --</option>';
      document.getElementById("displayArea").innerHTML = "";

      if (!brandVal || !selectedVersionData.brands[brandVal]) {
        platformSelect.disabled = true;
        return;
      }

      const platforms = selectedVersionData.brands[brandVal].platforms;
      
      // Populate Platforms Dropdown
      Object.keys(platforms).forEach(platform => {
        const opt = document.createElement("option");
        opt.value = platform;
        opt.textContent = platform;
        platformSelect.appendChild(opt);
      });

      platformSelect.disabled = false;
    }

    function renderDetails() {
      const brandVal = document.getElementById("brandSelect").value;
      const platformVal = document.getElementById("platformSelect").value;
      const display = document.getElementById("displayArea");
      display.innerHTML = "";

      if (!brandVal || !platformVal) return;

      const brandData = selectedVersionData.brands[brandVal];
      const platformData = brandData.platforms[platformVal];

      let html = "";

      // Render Brand General Note if present
      if (brandData.generalNote) {
        html += `<div class="note-box"><b>NOTE:</b> ${brandData.generalNote}</div>`;
      }

      html += `<div class="header-black">${brandVal}: ${platformVal}</div>`;

      // EMV Certification
      if (platformData.emvCertification) {
        html += `
          <table>
            <tr><th colspan="2">EMV Certification</th></tr>
            <tr><td>EMV Contact</td><td>${platformData.emvCertification.contact}</td></tr>
            <tr><td>EMV Contactless</td><td>${platformData.emvCertification.contactless}</td></tr>
          </table>`;
      }

      // EMV Status
      if (platformData.emvStatus) {
        html += `
          <table>
            <thead>
              <tr>
                <th>EMV Status</th>
                <th>Firmware</th>
                <th>Contactless Reader</th>
                <th>Contactless Reader Firmware</th>
                <th>Contactless Build Revision</th>
              </tr>
            </thead>
            <tbody>`;
        platformData.emvStatus.forEach(row => {
          html += `<tr>
            <td>${row.mode}</td>
            <td>${row.firmware}</td>
            <td>${row.reader}</td>
            <td>${row.readerFirmware}</td>
            <td>${row.buildRevision}</td>
          </tr>`;
        });
        html += `</tbody></table>`;
      }

      // Supported Options
      if (platformData.supportedOptions) {
        html += `
          <table>
            <thead>
              <tr><th>Supported Options</th><th>Recommended Minimum Version</th></tr>
            </thead>
            <tbody>`;
        platformData.supportedOptions.forEach(row => {
          html += `<tr><td>${row.option}</td><td>${row.minimumVersion}</td></tr>`;
        });
        html += `</tbody></table>`;
      }

      // Debit Section
      if (platformData.debit) {
        html += `<div class="header-black">Debit</div>`;
        html += `
          <table>
            <thead>
              <tr><th>Supported Options</th><th>Recommended Minimum Version</th></tr>
            </thead>
            <tbody>`;
        platformData.debit.forEach(row => {
          html += `<tr><td>${row.option}</td><td>${row.minimumVersion}</td></tr>`;
        });
        html += `</tbody></table>`;
      }

      // Notes
      if (platformData.notes && platformData.notes.length > 0) {
        html += `<div class="header-black">Notes</div><div class="note-box"><ul>`;
        platformData.notes.forEach(note => {
          html += `<li>${note}</li>`;
        });
        html += `</ul></div>`;
      }

      display.innerHTML = html;
    }
  </script>
</body>
</html>