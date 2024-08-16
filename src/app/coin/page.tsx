async function getCoinData() {

  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`)
    return await res.json()
  } catch (error) {
    return error
  }
}


export default async function Home() {
  const data = await getCoinData()

  return (
    <>
      <p className="text-custom_medium_gray">Symbol</p>
      <p className="custom_extra_dark_gray font-semibold">{data.symbol}</p>
      <p>{Date.now()}</p>
    </>
  )
}