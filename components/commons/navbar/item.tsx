import { useState } from 'react'
import Link from 'next/link'

interface IProps {
    data: any
}

const NavbarItem: React.FunctionComponent<IProps> = (data) => {
    const [ propdata ]: any = useState(data.data)

    return (
        <>
           {
                propdata
                ?   <Link href={propdata.link} as={propdata.as} prefetch={propdata.prefetch}>
                        <span className="headerlink">{propdata.section}</span>
                    </Link>
                :    null
           }
        </>
    )
}

export default NavbarItem