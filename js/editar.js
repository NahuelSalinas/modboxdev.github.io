function togglePanel(panelId) {
    var panel = document.getElementById(panelId);
    var panelContent = panel.querySelector('.panel-content');
    panelContent.style.display = panelContent.style.display === 'none' ? 'block' : 'none';
    updatePreview();
  }
  
  function updatePreview() {
    var previewContent = document.getElementById('preview-content');
    previewContent.innerHTML = '';
    
    // Obtener las opciones seleccionadas de cada panel
    var frontalOptions = document.getElementsByName('frontal-option');
    var lateralIzquierdoOptions = document.getElementsByName('lateral-izquierdo-option');
    var lateralDerechoOption = document.getElementsByName('lateral-derecho-option')[0].value;
    var panelSuperiorOption = document.getElementsByName('panel-superior-option')[0].value;
    var accesoriosOptions = document.getElementsByName('accesorios-option');
    
    // Construir la previsualización basada en las opciones seleccionadas
    var preview = document.createElement('div');
    
    var frontalPreview = document.createElement('div');
    frontalPreview.innerHTML = 'Panel frontal: ' + getSelectedOption(frontalOptions);
    preview.appendChild(frontalPreview);
    
    var lateralIzquierdoPreview = document.createElement('div');
    lateralIzquierdoPreview.innerHTML = 'Lateral izquierdo: ' + getSelectedOptions(lateralIzquierdoOptions);
    preview.appendChild(lateralIzquierdoPreview);
    
    var lateralDerechoPreview = document.createElement('div');
    lateralDerechoPreview.innerHTML = 'Lateral derecho: ' + lateralDerechoOption;
    preview.appendChild(lateralDerechoPreview);
    
    var panelSuperiorPreview = document.createElement('div');
    panelSuperiorPreview.innerHTML = 'Panel superior: ' + panelSuperiorOption;
    preview.appendChild(panelSuperiorPreview);
    
    var accesoriosPreview = document.createElement('div');
    accesoriosPreview.innerHTML = 'Accesorios: ' + getSelectedOptions(accesoriosOptions);
    preview.appendChild(accesoriosPreview);
    
    previewContent.appendChild(preview);
  }
  
  function getSelectedOption(options) {
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        return options[i].value;
      }
    }
    return 'Ninguna opción seleccionada';
  }
  
  function getSelectedOptions(options) {
    var selectedOptions = [];
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selectedOptions.push(options[i].value);
      }
    }
    if (selectedOptions.length === 0) {
      return 'Ninguna opción seleccionada';
    } else {
      return selectedOptions.join(', ');
    }
  }