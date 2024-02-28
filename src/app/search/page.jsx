/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function page() {
  const SearchParams = useSearchParams()

  const query = SearchParams.get('search')
  console.log(query)
  return (
    <div>
      <h1>result of {query}</h1>
    </div>
  )
}
