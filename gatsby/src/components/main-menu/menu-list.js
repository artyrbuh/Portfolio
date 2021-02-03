import React, {useContext, useEffect, useState, useRef} from 'react';
import {ActiveMenu, ThemeDataContext} from '../layout';
import {Link} from 'gatsby';
import {TweenLite} from 'gsap';
import { textAsSpans } from '../../core/util/helpers';
import { staggerItemsSkewUpDown } from '../../core/animation';


const MenuList = ({props}) => {
    const {toggleContactMenu} = useContext(ActiveMenu);
    const menu = props.allWordpressWpApiMenusMenusItems.edges[0].node.items;

    let menuItems = useRef(null);
    
    let [delay, setDelay] = useState(.15);

    const {activeMenu, contactMenuActive} = useContext(ActiveMenu);
    
    const getChildrenToAnimate = () => {
        let els = [];
        
        for(var i = 0; i < menuItems.children.length; i++) {
            els.push(menuItems.children[i].firstElementChild)
        }

        return els;
    }

    const openContactMenu = (e) => {
        e.preventDefault();
        toggleContactMenu();
    }

    useEffect(() => {
        if(activeMenu === "main") {
            if(contactMenuActive === true) {
                setDelay(2.2);
            }

            staggerItemsSkewUpDown(getChildrenToAnimate(), 0);
        }
    }, [activeMenu]);


    return (
        <>
            {menu.length ? (
                <ul className="menu menu--main" ref={el => menuItems = el}>
                    {menu.map((el, i) => (
                        <li key={i} className="menu-item">
                            {el.object_slug !== "contact" ? (
                                <Link 
                                    to={`${el.object_slug === 'home' ? '/' : `/${el.object_slug}`}`}
                                    className="flourish-hover"
                                >
                                    {el.title}
                                    <span className="flourish-one aa-red--text">{el.title}</span>
                                </Link>
                            ) : 
                            (
                                <a 
                                    onClick={(e) => openContactMenu(e)}
                                    className="flourish-hover"
                                >
                                    {el.title}
                                    <span className="flourish-one aa-red--text">{el.title}</span>
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>add menu items</div>
            )}
        </>
    )
}

export default MenuList;