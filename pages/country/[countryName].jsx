import { useRouter } from 'next/router'
import React from 'react'

const CountryPage = () => {
    const router = useRouter();
    const {countryName} = router.query;
    console.log(countryName);
    return (
    <div>CountryPage</div>
  )
}

export default CountryPage