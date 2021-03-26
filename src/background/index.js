// OnInstall handler
chrome.runtime.onInstalled.addListener((details) => {
  console.log(details)
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'load-todos') {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => sendResponse(json))
  }

  return true
})
