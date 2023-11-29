import { useRouter } from 'next/router'
import React from 'react'

const GovermentPage = () => {
    const router = useRouter();
    const {slug} = router.query;
    console.log(slug);
    return (
    <div>GovermentPage</div>
  )
}

export default GovermentPage