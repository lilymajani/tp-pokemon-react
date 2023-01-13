import React from 'react'

export const PaginationPreviousNext = ({nextUrl,previousUrl,handle}) => {

    return(
        <div className={"d-flex justify-content-evenly"}>
            <nav aria-label={"previous next"}>
                <ul className={"pagination"}>
                    {previousUrl == null
                        ? <li className={"page-item disabled"}><button className={"page-link"} href="#" aria-disabled={"true"}>Previous</button></li>
                        :<li className={"page-item"}><button className={"page-link"} href="#" onClick={() => handle(previousUrl)}>Previous</button></li>
                    }
                    {nextUrl == null
                        ? <li className={"page-item disabled"}><button className={"page-link"} href="#">Next</button></li>
                        : <li className={"page-item"}><button className={"page-link"} href="#" onClick={() => handle(nextUrl)}>Next</button></li>
                    }
                </ul>
            </nav>
        </div>
    )
};
