import './detailBaner.css';
import { Link } from 'react-router-dom'

const DetailBaner = () => {
    return (
        <div>
            <div className="detail-banner">
                <div className="detail-banner__hero">
                    <div className="detail-banner-layout-4">
                        <div className="detail-banner__container">
                            <div className="detail-banner__align-items-center">
                                <div className="detail-banner__align-items-center__list">
                                    <div className="detail-banner__content-container">
                                        <div className="detail-banner__title">
                                            <nav className="detail-banner__rivax-breadcrumb">
                                                <Link href="#">Home</Link>
                                                <em className="delimiter">/</em>
                                                <Link href="#">Technology</Link>
                                                <em className="delimiter">/</em>
                                                <div className="detail-banner__current">Style Is A Way To Say Who You Are, Without Having To Speak</div>
                                            </nav>
                                            <div className="detail-banner_category">
                                                <Link className="term-id-22" href="https://gobomus.com/category/technology/" title="Technology"><span>Technology</span></Link>
                                            </div>

                                            <h1 className="detail-banner__title-heading">Style Is A Way To Say Who You Are, Without Having To Speak</h1>

                                            <div className="detail-banner__meta">
                                                <div className="author-avatar">
                                                    {/* <Link target="_blank" href="https://gobomus.com/author/rbslcbmy/"> <Link /> */}
                                                    <img alt="" src="https://secure.gravatar.com/avatar/215c060a92aa45b20151daae6bc51f81?s=55&amp;d=mm&amp;r=g" />
                                                </div>

                                                <div className="meta-details">
                                                    <div className="author-name">
                                                        <Link target="_blank" href="https://gobomus.com/author/rbslcbmy/">Rbslcbmy</Link>
                                                    </div>

                                                    <div className='meta-details__date--list'>
                                                        <div className="meta-item date meta-details__date--list__item">
                                                            <span>June 6, 2023    /</span>
                                                        </div>

                                                        <div className="meta-item reading-time meta-details__date--list__item">
                                                            <span>5 Mins Read   /</span>
                                                        </div>

                                                        <div className="meta-item views meta-details__date--list__item">
                                                            <span>99 Views /</span>
                                                        </div>

                                                        <div className="meta-item comments  meta-details__date--list__item">
                                                            <Link to="#comments">
                                                                <span>0 Comments</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-banner__align-items-center_img">
                                    <div className="detail-banner__image-container">
                                        <img src="https://gobomus.com/wp-content/uploads/2023/06/constantin-panagopoulos-Z1TaQKGo6Gw-unsplash-1000x600.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailBaner