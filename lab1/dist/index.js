"use strict";
function loadData(url, callback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = xhr.response;
            callback(data);
        }
        else {
            errorCallback(new Error(`Ошибка загрузки: ${xhr.statusText}`));
        }
    };
    xhr.onerror = function () {
        errorCallback(new Error('Ошибка сети'));
    };
    xhr.send();
}
function displayData(data) {
    const output = document.getElementById('output');
    if (!output)
        return;
    output.innerHTML = '<h2>Список автомобилей:</h2>';
    data.cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.style.margin = '20px';
        carDiv.style.padding = '10px';
        carDiv.style.border = '1px solid #ccc';
        let carInfo = `
            <h3>${car.brand} ${car.model} (${car.year})</h3>
            <p>Цена: $${car.price}</p>
            <p>Электрический: ${car.isElectric ? 'Да' : 'Нет'}</p>
            <p>Особенности: ${car.features.join(', ')}</p>
        `;
        if (car.engine) {
            carInfo += `
                <p>Двигатель: ${car.engine.type}, ${car.engine.horsepower} л.с.
                ${car.engine.turbocharged ? '(с турбонаддувом)' : ''}</p>
            `;
        }
        if (car.battery) {
            carInfo += `
                <p>Батарея: ${car.battery.capacity} кВт·ч, запас хода ${car.battery.range} км</p>
            `;
        }
        carDiv.innerHTML = carInfo;
        output.appendChild(carDiv);
    });
    console.log('Данные успешно загружены:', data);
}
function displayError(error) {
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
    }
    console.error('Произошла ошибка:', error);
}
document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('loadData');
    const errorButton = document.getElementById('simulateError');
    if (loadButton) {
        loadButton.addEventListener('click', () => {
            loadData('data.json', displayData, displayError);
        });
    }
    if (errorButton) {
        errorButton.addEventListener('click', () => {
            // Симулируем ошибку, запрашивая несуществующий файл
            loadData('non_existent_file.json', displayData, displayError);
        });
    }
});
