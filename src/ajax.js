export const loadXHR = (url, callback) => {

    // set up the connection
    const xhr = new XMLHttpRequest();
  
    // retrieve the data
    xhr.open("GET", url);
    xhr.send();
  
    // set up a handler for the response
    xhr.onload = () => {
      callback(xhr);
    };
  };