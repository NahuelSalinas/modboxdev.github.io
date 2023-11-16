const labelsLineas = ["GTX 1080 Ti", "RX Vega 64", "RTX 2080 Ti", "RX 5700 XT", "RTX 3080", "RTX 3090"]            
        const dataset1 = {
            label: "Largo en cm",
            data: [26.7, 27.2, 27.9, 30.5, 31.3, 34.2],
            borderColor: 'rgba(69, 248, 84, 0.8)',
            fill: false,
            tension: 0.1
        };
        
        const graphLineas = document.querySelector("#graficoLineas");
        
        const dataLineas = {
            labels: labelsLineas,
            datasets: [dataset1]
        };
        
        const configLineas = {
            type: 'line',
            data: dataLineas,
        };
        
        new Chart(graphLineas, configLineas);