import './category.css';
const Category = () => {
    return (
        <div className="home-category__conatainer">
            <div className="home-category__list">
                Latest Posts
            </div>
            <div>
                <div className="home-category">
                    <ul>
                        <li>Health</li>
                        <li>Lifestyle</li>
                        <li>Music</li>
                        <li>
                            Technology</li>
                        <li>Travel</li>
                        <li>Uncategorized</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category