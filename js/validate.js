function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  let lat = document.querySelector("#observation-latitude").value;
  let lon = document.querySelector("#observation-longitude").value;
  let lat_err = document.querySelector("#lat-div .required");
  let lon_err = document.querySelector("#lon-div .required");
  if (lat_err.innerHTML != null) {
    lat_err.innerHTML = "* ";
  }
  if (lon_err.innerHTML != null) {
    lon_err.innerHTML = "* ";
  }
  if (isNaN(lat) || lat < -90 || lat > 90) {
    let text = document.createTextNode(
      "must be a valid number between -90 and 90"
    );
    lat_err.appendChild(text);
    return false;
  } else if (isNaN(lon) || lon < -180 || lon > 180) {
    let text = document.createTextNode(
      "must be a valid number between -180 and 180"
    );
    lon_err.appendChild(text);
    return false;
  } else if (!isNaN(lat) && lat >= -90 && lat <= 90) {
    if (!isNaN(lon) && lon >= -180 && lon <= 180) {
      return true;
    } else {
      let text = document.createTextNode(
        "must be a valid number between -180 and 180"
      );
      lon_err.appendChild(text);
      return false;
    }
  } else if (!isNaN(lon) && lon >= -180 && lon <= 180) {
    if (!isNaN(lat) && lat >= -90 && lat <= 90) {
      return true;
    } else {
      let txt = document.createTextNode(
        "must be a valid number between -90 and 90"
      );
      lat_err.appendChild(text);
      return false;
    }
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
