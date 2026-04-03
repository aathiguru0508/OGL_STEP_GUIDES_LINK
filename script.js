document.getElementById('generateBtn').addEventListener('click', () => {
  const appIdsInput = document.getElementById('appIds').value;
  const apiNamesInput = document.getElementById('apiNames').value;

  const selectedRegion = document.querySelector('input[name="region"]:checked');

  if (!appIdsInput || !apiNamesInput || !selectedRegion) {
    alert('Please enter App IDs, API Names and select a Region!');
    return;
  }

  const region = selectedRegion.value;

  // 🔥 Base URL mapping
  let baseUrl = '';

  if (region === 'NAMER') {
    baseUrl = 'https://guidedlearning.oracle.com';
  } else if (region === 'EMEA') {
    baseUrl = 'https://guidedlearning-emea.oracle.com';
  } else if (region === 'JAPAC') {
    baseUrl = 'https://guidedlearning-japac.oracle.com';
  }

  const appIds = appIdsInput.split(' ').map(a => a.trim());
  const apiNames = apiNamesInput.split(' ').map(a => a.trim());

  const tbody = document.querySelector('#outputTable tbody');
  tbody.innerHTML = '';

  appIds.forEach(appId => {
    apiNames.forEach(apiName => {

      const guideUrl = `${baseUrl}/player/latest/api/scenario/export/v2/${appId}/${apiName}/lang/--/?draft=dev&windowMode=unpin`;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${appId}</td>
        <td>${apiName}</td>
        <td><a href="${guideUrl}" target="_blank">Download PDF</a></td>
      `;
      tbody.appendChild(tr);
    });
  });
});
