const clientDataHelper = (response, successCallback, errorCallback) => {
  if (response) {
    if (response.ok == false) {
      return errorCallback();
    } else if (response.ok == true) {
      return successCallback();
    }
  } 
};

export default clientDataHelper;