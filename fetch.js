class Fetch {
  async getCurrent(input) {
    const myKey = "e7f51c6830987327e5d0d0795b416f86";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
