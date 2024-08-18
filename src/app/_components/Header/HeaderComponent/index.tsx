import React from 'react'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav>
      <Gutter>
        <Link href="/">
          <img src="/logo-black.svg" alt="logo"></img>
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
