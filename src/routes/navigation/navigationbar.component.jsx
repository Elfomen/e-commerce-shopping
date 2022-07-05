import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import './navigation.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../Context/user-context'
import { SignUserOut } from '../../utils/firebase/firebaseutils'
import CardIcon from '../../components/card-icon/card'
import CardDropdown from '../../components/card-dropdown/card'
import { CardDropdownContext } from '../../Context/card-dropdown-contex'
const Navigation = () => {

    const { currentUser }  = useContext(UserContext)
    const { cardStatus , setCardStatus } = useContext(CardDropdownContext)
    // console.log(currentUser)


    const handleCardClick = () => {
        setCardStatus(!cardStatus)
    }

    return (
        <Fragment>
            <div className='navigation'>

                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser? <a className='nav-link signoutbtn' onClick={SignUserOut}>
                        Sign Out
                    </a> : <Link className='nav-link' to='/auth'>
                        Signin
                    </Link>}

                    <CardIcon onclick={handleCardClick}/>
                    
                </div>

                {cardStatus&&<CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation