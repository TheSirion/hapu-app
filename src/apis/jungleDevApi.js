export const sendToJungleDev = async (data) => {
  try {
    const result = await fetch(
      'https://api.jungledevs.com/api/v1/challenge-newsletter/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )

    console.log(await result.json())
  } catch (error) {
    console.log(error)
  }
}
