// this return full element // Global variables ///
var bookmarkName = document.getElementById("bookmarkName");

var bookmarkURL = document.getElementById("bookmarkURL");

/////////////////////////////////////////

// Array of objects //
var urlList = [];

/////////////////// storae ///////////////

if (localStorage.getItem("BookMarks") != null) {
  urlList = JSON.parse(localStorage.getItem("BookMarks"));
  displayData();
}

/////////////////// //////////////

function addBookMark() {
  if (urlLocate()) {
    // to add the values in one array //
    var bookmark = {
      name: bookmarkName.value,
      url: bookmarkURL.value,
    };

    urlList.push(bookmark);
    localStorage.setItem("BookMarks", JSON.stringify(urlList));
    ////// End Add ///////

    // to call clear function //
    clearForm();
    displayData();
    console.log(urlList);
  }
}
function clearForm() {
  // to clear inputs when user clicks the button //

  bookmarkName.value = "";
  bookmarkURL.value = "";

  //////////// End Clear /////////////////////
}

/// Create tr td in table with loop //

function displayData() {
  // to store value in a var //
  var table = "";

  for (var i = 0; i < urlList.length; i++) {
    table += `<tr>
  <td>${i + 1}</td>
  <td>${urlList[i].name}</td>
  <td>
  <button class="btn btn-success ">
  <a href="${
    urlList[i].url
  }" class="text-white  link-underline link-underline-opacity-0" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a>
  </button>
  </td>
  <td>
  <button onclick="deleteItem(${i})" class="btn btn-danger">
  <i class="fa-solid fa-trash-can"></i>
  Delete
</button>
  </td>
</tr>`;
  }

  // to enter the values in table //
  document.getElementById("tableBody").innerHTML = table;
}

// index - index of each bookmark //
function deleteItem(index) {
  urlList.splice(index, 1);
  localStorage.setItem("BookMarks", JSON.stringify(urlList));
  // to show update after delete//
  displayData();
  console.log(urlList);
}

function urlLocate() {
  var url = document.getElementById("bookmarkURL").value;
  var regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (url != "") {
  }

  if (regexp.test(url)) {
    bookmarkURL.classList.add("is-valid");
    bookmarkURL.classList.remove("is-invalid");
    return true;
  } else {
    bookmarkURL.classList.add("is-invalid");
    bookmarkURL.classList.remove("is-valid");
    alert("Please Enter A vaild URL");
  }
}
