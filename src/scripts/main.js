'use strict';

const workerListItems = document.querySelectorAll('li');

function getEmployees(listItems) {
  const workers = [];

  for (const listItem of listItems) {
    workers.push({
      name: listItem.textContent,
      position: listItem.dataset.position,
      salary: listItem.dataset.salary,
      age: listItem.dataset.age,
    });
  }

  return workers;
}

const workersObjects = getEmployees(workerListItems);

function sortList(workersList) {
  workersList.sort((a, b) => {
    const workerSalaryFirst = Number(a.salary.replace(/[$,]/g, ''));
    const workerSalarySecond = Number(b.salary.replace(/[$,]/g, ''));

    if (workerSalaryFirst > workerSalarySecond) {
      return -1;
    }

    if (workerSalaryFirst < workerSalarySecond) {
      return 1;
    }

    return 0;
  });

  const documentList = document.querySelector('ul');

  documentList.innerHTML = '';

  workersList.forEach((worker) => {
    const li = document.createElement('li');

    li.textContent = worker.name;
    li.dataset.position = worker.position;
    li.dataset.salary = worker.salary;
    li.dataset.age = worker.age;
    documentList.appendChild(li);
  });

  return workersList;
}

sortList(workersObjects);
