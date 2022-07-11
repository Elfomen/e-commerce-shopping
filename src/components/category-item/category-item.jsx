import { Link, useNavigate } from 'react-router-dom'
import './category-item.scss'


const CategoryItem = ({ category: { name, imageUrl, id } }) => {
  const navigate = useNavigate()
  const onNavigateHandler = (route) => navigate(route)
  return (
    <div key={id} className='category-container' onClick={() => onNavigateHandler(`shop/${name}`)}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='category-body-container'>
        <h2>{name}</h2>
        <span>Shop Now</span>
      </div>

    </div>

  )
}

export default CategoryItem