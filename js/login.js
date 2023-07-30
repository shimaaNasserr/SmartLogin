var loginemail = document.querySelector(".loginName")
var loginPass = document.querySelector(".loginPass")
var loginBtn = document.querySelector(".mybttn")
var dangerAlert = document.getElementById("dangerAlert")
var successAlert = document.getElementById("successAlert")


var dataList = [];
if (localStorage.getItem("dataList") != null) {
  dataList = JSON.parse(localStorage.getItem("dataList"))
}

loginBtn?.addEventListener("click", function () {
  var res = dataList.find((el) => {
    return el.email == loginemail.value && el.password == loginPass.value
  })
  if (res == undefined) {
    dangerAlert.style.display = "block"
    successAlert.style.display = "none"
  }
  else {
    localStorage.setItem("name", JSON.stringify(res))
    successAlert.style.display = "block"
    dangerAlert.style.display = "none"
    setTimeout(() => {
      window.location = "index (3).html"
    }, 1500)
  }
})

