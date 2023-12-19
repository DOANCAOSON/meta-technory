import './listpost.css';
import { CiCalendarDate } from "react-icons/ci";

const ListPost = () => {
    return (
        <div>
            <ul className="post-list">
                <li className="post-item">
                    <div className='post-item__content'>
                        <img className="post-item__img" src="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" alt="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" />
                        <div className="post-item__info">
                            <div className="post-item__title">
                                <span>If You Were To Start A Business From Scratch Tomorrow</span>
                            </div>
                            <div className="post-item__date">
                                <CiCalendarDate className='post-item__date--icon' />
                                June 6, 2023
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-item">
                    <div className='post-item__content'>
                        <img className="post-item__img" src="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" alt="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" />
                        <div className="post-item__info">
                            <div className="post-item__title">
                                <span>If You Were To Start A Business From Scratch Tomorrow</span>
                            </div>
                            <div className="post-item__date">
                                <CiCalendarDate className='post-item__date--icon' />
                                June 6, 2023
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-item">
                    <div className='post-item__content'>
                        <img className="post-item__img" src="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" alt="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" />
                        <div className="post-item__info">
                            <div className="post-item__title">
                                <span>If You Were To Start A Business From Scratch Tomorrow</span>
                            </div>
                            <div className="post-item__date">
                                <CiCalendarDate className='post-item__date--icon' />
                                June 6, 2023
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-item">
                    <div className='post-item__content'>
                        <img className="post-item__img" src="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" alt="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" />
                        <div className="post-item__info">
                            <div className="post-item__title">
                                <span>If You Were To Start A Business From Scratch Tomorrow</span>
                            </div>
                            <div className="post-item__date">
                                <CiCalendarDate className='post-item__date--icon' />
                                June 6, 2023
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-item">
                    <div className='post-item__content'>
                        <img className="post-item__img" src="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" alt="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" />
                        <div className="post-item__info">
                            <div className="post-item__title">
                                <span>If You Were To Start A Business From Scratch Tomorrow</span>
                            </div>
                            <div className="post-item__date">
                                <CiCalendarDate className='post-item__date--icon' />
                                June 6, 2023
                            </div>
                        </div>
                    </div>
                </li>
                <li className="post-item">
                    <div className='post-item__content'>
                        <img className="post-item__img" src="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" alt="https://gobomus.com/wp-content/uploads/2023/06/brooke-cagle-B_LjR_poGgo-unsplash-550x550.jpg" />
                        <div className="post-item__info">
                            <div className="post-item__title">
                                <span>If You Were To Start A Business From Scratch Tomorrow</span>
                            </div>
                            <div className="post-item__date">
                                <CiCalendarDate className='post-item__date--icon' />
                                June 6, 2023
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div>
                <div className="listposs_btn">
                    <button className='load-more-button'>
                        Load More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListPost