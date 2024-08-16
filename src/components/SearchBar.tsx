'use client'

import { useRouter } from 'next/navigation'
import { FormikErrors, useFormik } from 'formik'
import { CloseIcon } from './ui-icons/close';
import * as yup from 'yup'

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
    router.refresh()
  }

  const validationSchema = yup.object().shape({
    currencyName: yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: actionSearch
  })

  const handlerClean = () => {
    formik.resetForm()
  }

  return (
    <div className="bg-white w-[32vw] h-[30vh] border rounded-3xl flex justify-center items-center shadow-sm">
      <form onSubmit={formik.handleSubmit} className="text-center text-black flex flex-col gap-[4vh] justify-center items-center">
        <div className={`flex justify-center items-center border border-custom_dark_gray focus-within:border-custom_purple p-[0.9vw] rounded-md ${formik.errors.currencyName && "border-red-600"}`}>
          <input
            type="text"
            value={formik.values.currencyName}
            onChange={formik.handleChange}
            name="currencyName"
            className={`w-[22vw] text-sm placeholder:text-custom_extra_dark_gray focus:placeholder:text-custom_medium_gray outline-none ${formik.errors.currencyName && "placeholder:text-red-600"}`}
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