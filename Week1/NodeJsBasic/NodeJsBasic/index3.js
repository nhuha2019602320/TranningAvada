function getData() {
    return new Promise((resolve, reject) => {
      const data = [
        {id: 1, name: "Developer A"},
        {id: 2, name: "Devloper B"}
      ];
  
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
  
  /**
   * Fake like we are submitting the data to an API elsewhere
   *
   * @param inputData
   */
  function submitData (inputData) {
    console.log('starting to submit');
  
    return new Promise((resolve, reject) => {
      // Act like we submit the inputData to the server and takes 1s
      const status = randomStatus();
  
      setTimeout(() => {
        resolve({
          success: status
        });
      }, 1000);
    });
  }
  
  /**
   * Just a helper random the result of the submit: success or failed
   *
   * @returns {boolean}
   */
  const randomStatus = () => [true, false][Math.floor(Math.random() * 2)];
  
  // Main body of the example
  (async () => {
    const data =  await getData();
    console.log("data",data)
    const names = data.map(data => data.name);
    console.log(names);
    const {success} = await submitData(names);
    if (success === true) {
      console.log("This is a successful form")
    } else {
      console.log("This is a failed form")
    }
  })();