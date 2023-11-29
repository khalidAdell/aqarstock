import { useRouter } from 'next/router';
import React from 'react'

const CountrySlg = () => {
    const router = useRouter();
    const {countryName} = router.query;
    console.log(countryName);
  return (
    <div>{countryName}</div>
  )
}

export default CountrySlg