// Задание
// Написать программу на JavaScript, которая позволяет запросить у пользователя
// размер таблицы умножения (сколько строк и столбцов используя функцию prompt)
// и выводит таблицу в браузер (используйте теги table, tr, td и т.д.)

let row = prompt("How rows are in table?");
let col = prompt("How columns are in table?");

document.write(`<div class="data">
<h2>Initial Data</h2>
<p class = "initial-data">There are ${row} rows in table</p>
<p class = "initial-data">There are ${col} columns in table</p>
</div>`);


let body = document.getElementsByTagName("body")[0];

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
for (let i = 0; i < +row + 1; i++) {
    if (i === 0) {
        let trh = document.createElement("tr");
        for (let j = 0; j < +col + 1; j++) {
            let th = document.createElement("th");
            let t
            if (j === 0) {
                t = document.createTextNode(`rows /
                 columns`);
            } else {
                t = document.createTextNode(`${j}`);
            }
            th.appendChild(t);
            trh.appendChild(th);
        }
        thead.appendChild(trh);
    } else {
        let trb = document.createElement("tr");
        for (let j = 0; j < +col + 1; j++) {
            let td = document.createElement("td");
            let rezult = i * j;
            let t
            if (j === 0) {
                t = document.createTextNode(`${i}`);
            } else {
                t = document.createTextNode(`${i}x${j} = ${rezult}`);
            }
            td.appendChild(t);
            trb.appendChild(td);
        }
        tbody.appendChild(trb);
    }
}
table.appendChild(thead);
body.appendChild(table);
table.appendChild(tbody);
body.appendChild(table);

