const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMsDTiUtJTrrvAjqDIlzR5hldMcEG5wC_VRIvwNcurbw7SC1XBKZM3Wpy7-ADKVzS6TQ/exec"
const form = document.forms["submit-to-google-sheet"]
const success = document.querySelector(".success")
const failed = document.querySelector(".failed")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((res) => {
      success.innerHTML = "Success! Thanks For Subscribing."
      setTimeout(function () {
        success.innerHTML = ""
        form.reset()
      }, 6000)
    })
    .catch((err) => {
      failed.innerHTML = "Failed! Please Try Again Later."
      setTimeout(function () {
        failed.innerHTML = ""
        form.reset()
      }, 6000)
    })
})
