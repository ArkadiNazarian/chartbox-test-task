'use client'

import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { CloseIcon } from './ui-icons/close';

interface ICurrencyNameModel {
  currencyName: string;
}

export const SearchBarComponent = () => {
  const router = useRouter()

  const initialValues: ICurrencyNameModel = {
    currencyName: "",
  }

  const actionSearch = (value: ICurrencyNameModel) => {
    router.replace(`/coin/${value.currencyName.toLowerCase()}`)
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: actionSearch
  })

  const handlerClean = () => {
    formik.setFieldValue("currencyName", "")
  }

  return (
    <div className="bg-white w-[32vw] h-[30vh] border rounded-3xl flex justify-center items-center shadow-sm">
      <form onSubmit={formik.handleSubmit} className="text-center text-black flex flex-col gap-[4vh] justify-center items-center">
        <div className='flex justify-center items-center border border-custom_dark_gray focus-within:border-custom_purple p-[0.9vw] rounded-md'>
          <input
            type="text"
            value={formik.values.currencyName}
            onChange={formik.handleChange}
            name="currencyName"
            className="w-[22vw] text-sm placeholder:text-custom_extra_dark_gray focus:placeholder:text-custom_medium_gray outline-none "
            placeholder="Currency name"
          >
          </input>
          <CloseIcon onClick={handlerClean} className={`${formik.values.currencyName === "" ? "invisible" : "visible"} hover:cursor-pointer`} />
        </div>
        <button type="submit" className="w-[25.5vw] bg-custom_purple text-white h-[7.5vh] rounded-lg text-base">
          Search
        </button>
      </form>
    </div>
  )
}