import React from 'react'


const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const pageNumners=[]
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumners.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumners.map(number=>(
                    <li key={number} className='page-item '>
                        <a onClick={()=>paginate(number)}  className='page-link active' style={{cursor: 'pointer'}}>
                            {number}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination
