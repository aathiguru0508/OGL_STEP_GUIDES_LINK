document.getElementById('generateBtn').addEventListener('click', () => {
  const appIdsInput = document.getElementById('appIds').value;
  const apiNamesInput = document.getElementById('apiNames').value;

  if (!appIdsInput || !apiNamesInput) {
    alert('Please enter both App IDs and API Names!');
    return;
  }

  const appIds = appIdsInput.split(' ').map(a => a.trim());
  const apiNames = apiNamesInput.split(' ').map(a => a.trim());

  const tbody = document.querySelector('#outputTable tbody');
  tbody.innerHTML = '';

  appIds.forEach(appId => {
    apiNames.forEach(apiName => {
      const guideUrl = `https://guidedlearning.oracle.com/player/latest/api/scenario/export/v2/${appId}/${apiName}/lang/--/?draft=dev&windowMode=unpin`;

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
