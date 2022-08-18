import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { Logocontainer, NavigationContainer, NavLinkContainer ,NavLink } from './navigation.style.jsx'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { SignUserOut } from '../../utils/firebase/firebaseutils'
import CardIcon from '../../components/card-icon/card'
import CardDropdown from '../../components/card-dropdown/card'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../../redux/store/cart/cart.selector.jsx'
import { changeCartStatus } from '../../redux/store/cart/cart.actions.jsx'
const Navigation = () => {

    const { currentUser }  = []
    // const { cardStatus , setCardStatus } = useContext(CardDropdownContext)

    const cardStatus = useSelector(cartSelector.getCartStatus)

    const dispatch = useDispatch()

    const handleCardClick = () => {
        dispatch(changeCartStatus())
        // setCardStatus(!cardStatus)
    }

    return (
        <Fragment>
            <NavigationContainer>

                <Logocontainer to='/'>
                    <Logo className='logo'/>
                </Logocontainer>

                <NavLinkContainer>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser? <NavLink onClick={SignUserOut}>
                        Sign Out
                    </NavLink> : <NavLink to='/auth'>
                        Signin
                    </NavLink>}

                    <CardIcon onclick={handleCardClick}/>
                    
                </NavLinkContainer> 

                 {cardStatus&&<CardDropdown />}
                </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation