/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Selecting the all items with class name 'student-item'.
  const studentItems = document.querySelectorAll('.student-item');
// The number of items set to display per page.
  const displayTotal = 10;

// function separates items into pages.
  const showPage = ( page, list ) => {
    const lowNumber = (page * displayTotal) - displayTotal;
    const highNumber = (page * displayTotal) - 1;
    for (let i = 0; i < studentItems.length; i++) {
      if (i >= lowNumber && i <= highNumber) {
        studentItems[i].style.display = 'block';
      } else {
        studentItems[i].style.display = 'none';
        }
    }
  };
// Function finds the total pages and creates links for each.
  function appendPageLinks (list) {
    const totalPages = Math.ceil(studentItems.length / 10);
    const pageDiv = document.querySelector('.page');
    let div = document.createElement('div');
    div.className = "pagination";
    pageDiv.appendChild(div);
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 0; i < totalPages; i++) {
      let anchor = document.createElement('a');
      let li = document.createElement('li');
      ul.appendChild(li);
      anchor.textContent = i + 1;
      li.appendChild(anchor);
    }
  };
  appendPageLinks (studentItems);

// Defining variables here since they did not exist up to this point.
  const navUl = document.querySelector('.pagination ul');
// The class name "active" and it's associated CSS is assigned to the first page of items.
  let startA = navUl.querySelector('A');
  startA.className = "active";
  pageNumber = startA.textContent;

  showPage (pageNumber, studentItems);
// The 'active' class name is transfered to the target event and showPage() is run.
  navUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      let anchor = e.target;
      let activeA = navUl.querySelector('.active');
      pageNumber = anchor.textContent;
      showPage (pageNumber, studentItems);
      activeA.classList.remove("active");
      anchor.className = 'active';
    }
  });
