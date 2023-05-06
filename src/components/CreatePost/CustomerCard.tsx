import React from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CustomerCard = (props: any) => {
    const { request } = useTypedSelector(state => state.requestUsers)

    return (
        <section className="articles">
            {
                request.map((customer: any, index: number) => {
                    return <article key={`customer-${index}`}>
                        <div className="article-wrapper">
                            <figure>
                                {customer.customer.userImage ? <img className="photo-card-img" src={require(`../../post_content/pictures/${customer.customer.userImage}`)} alt="" /> : ''}
                            </figure>
                            <div className="article-body">
                                <div>
                                    <h2>{customer.request.topic}</h2>
                                    <p>{customer.request.task}</p>
                                    <a href="#" className="read-more">
                                        Read more <span className="sr-only">about {customer.request.topic}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <input name="requestId" onChange={(e: any) => { props.assignPostCustomerId(e) }} value={customer.request.requestId} type="radio" />
                                </div>
                            </div>
                        </div>
                    </article>
                })
            }
        </section>
    )
};

export default CustomerCard;
