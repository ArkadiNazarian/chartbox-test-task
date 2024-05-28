import { notFound } from "next/navigation"
import Image from "next/image"

interface ICoinParams {
  params: {
    coinId: string
  }

}

async function getCoinData(coinId: string) {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
      cache: "no-store"
    })
    return await res.json()
  } catch (error) {
    return error
  }
}


export default async function Home(props: ICoinParams) {
  const data = await getCoinData(props.params.coinId)

  if (data.error === "coin not found") {
    notFound()
  }

  return (
    <div className="bg-white w-[32vw] h-[40vh] border rounded-3xl flex flex-col justify-center items-center shadow-sm p-[3vw]">
      <Image
        src={`/icons/${data.symbol}.svg`}
        alt={`${data.symbol} Icon`}
        width={100}
        height={100}
        className="w-[3.5vw]"
      />
      <div className="w-full text-sm">
        <div className="flex items-center justify-between w-full border-b border-custom_extra_light_gray py-[2vh]">
          <p className="text-custom_medium_gray">Name</p>
          <p className="custom_extra_dark_gray font-semibold">{data.name}</p>
        </div>
        <div className="flex items-center justify-between w-full border-b border-custom_extra_light_gray py-[2vh]">
          <p className="text-custom_medium_gray">Symbol</p>
          <p className="custom_extra_dark_gray font-semibold">{data.symbol}</p>
        </div>
        <div className="flex items-center justify-between w-full py-[2vh]">
          <p className="text-custom_medium_gray">ID</p>
          <p className="custom_extra_dark_gray font-semibold">{data.id}</p>
        </div>
      </div>
    </div>
  )
}