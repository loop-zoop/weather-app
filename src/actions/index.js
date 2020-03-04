export function fetchData(data) {
  return {
    type: "FETCH_DATA",
    payload: data
  }
}

export function fetchDataAsync() {
  return {
    type: "FETCH_REQUESTED"
  }
}