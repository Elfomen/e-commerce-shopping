import './category-item.scss'


const CategoryItem = ({category: {title , imageUrl , id}}) => {
    return (
        <div key={id} className='category-container'>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <span>Shop Now</span>
          </div>

        </div>
    )
}

export default CategoryItem