
let weightResult = document.getElementById('formula-weight'),
    heightResult = document.getElementById('formula-height'),
    formulaResult = document.getElementById('formula-result'),
    weightUnit = document.getElementById('weight-unit'),
    heightUnit = document.getElementById('height-unit');


function changeUnit () {

    if (this.value === 'imperial') {

        weightUnit.textContent = 'Lb';
        heightUnit.textContent = 'In';
        formulaResult.textContent = 'A';
        document.getElementById('formula-703').style.display = 'block';
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        document.getElementById('formula-weight').textContent = 'weight (lb)';
        document.getElementById('formula-height').innerHTML = '[height (in)] <sup>2</sup>';
        document.getElementById('formula-unit').textContent = 'Imperial';
        
    } else if (this.value === 'metric') {

        weightUnit.textContent = 'Kg';
        heightUnit.textContent = 'Cm';
        formulaResult.textContent = 'A';
        document.getElementById('formula-703').style.display = 'none';
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        document.getElementById('formula-weight').textContent = 'weight (kg)';
        document.getElementById('formula-height').innerHTML = '[height (cm)] <sup>2</sup>';
        document.getElementById('formula-unit').textContent = 'Metric';
    }
}


function calculateMetric () {

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const meter = height / 100;
    const metricBmi = weight / (meter * meter);
    const bmi = metricBmi.toFixed(2);

    weightResult.textContent = weight;
    heightResult.textContent = `(${meter} x ${meter})`;
    formulaResult.textContent = bmi;

    console.log(bmi);
}

function calculateImperial () {
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imperialBmi = 703 * (weight / (height * height));
    const bmi = imperialBmi.toFixed(2);

    weightResult.textContent = weight;
    heightResult.textContent = `(${height} x ${height})`;
    formulaResult.textContent = bmi;
}

function calculateBmi (e) {

    e.preventDefault();

    const onChange = document.getElementById('bmi-units').value;

    if (onChange === 'metric') {
        calculateMetric();
    } else if (onChange === 'imperial') {
        calculateImperial();
    }

}


document.getElementById('bmi-form').addEventListener('submit', calculateBmi);
document.getElementById('bmi-units').addEventListener('change', changeUnit);
