import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/main-carrot-logo.svg'
import hamburger from '../../images/hamburger.svg'
import close from '../../images/close.svg'
import Dropdown from "react-simple-dropdown";
import {
    StickyNav,
    NavLinks,
    LangLinks,
    DropdownListLink,
    DropdownList,
    NavWrapper,
    DropdownMenuLink,
    Button,
    DropdownLink,
    WunderLogo,
    MobileBackground,
    MobileSticky,
    ModalOpen,
    BrandWrapper,
    MenuToggler,
    TogglerIcon,
    ArrowDown,
    DropToggle
} from './NavStyle'
import posed from 'react-pose';

//Animation for sidebar
const Sidebar = posed(ModalOpen)({
    open: {
        x: '0%',
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: { x: '100%', delay: 300 }
});
const Item = posed(Link)({
    open: { y: 0, opacity: 1 },
    closed: { y: 10, opacity: 0 }
});
const DropdownItem = posed(DropdownLink)({
    open: { y: 0, opacity: 1 },
    closed: { y: 10, opacity: 0 }
});
const LanguageItem = posed(Link)({
    open: { y: 0, opacity: 1 },
    closed: { y: 10, opacity: 0 }
});
//Animations for dropdown
const DropItem = posed(DropdownListLink)({
    op: { y: 0, opacity: 1 },
    clo: { y: 10, opacity: 0 }
});
const DropGroup = posed.ul({
    op: { x: '0%',
        delayChildren: 200,
        staggerChildren: 50 },
    clo: { x: '100%', delay: 300 }
});

class MobileMenu extends Component {
    constructor (props) {
        super(props)
        this.toggleList = this.toggleList.bind(this)
        this.state = {
            dropdownOpen: false,
            listsOpen: [],
            isOpen: false,
            dropOpen: false,
        }
    }

    toggleList = item => {
        let tempArray = this.state.listsOpen
        tempArray[item.index] = tempArray[item.index] ? false : true;
        this.setState(state => ({
            listsOpen: tempArray
        }))
    }
    toggle = () => this.setState({ isOpen: !this.state.isOpen });
    toggleDrop = () => this.setState({ dropOpen: !this.state.dropOpen });

    render () {
        const { isOpen } = this.state;
        const { dropOpen } = this.state;
        return (
            <MobileSticky>
                <StickyNav
                    header={
                        <NavWrapper>
                            <BrandWrapper isOpen={isOpen}>
                                <div />
                                <MenuToggler
                                    onClick={this.toggle}
                                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                                >
                                    <TogglerIcon
                                        src={isOpen ? close : hamburger}
                                        alt={isOpen ? 'Close Menu' : 'Open Menu'}
                                    />
                                </MenuToggler>
                                <Link to="/">
                                    <WunderLogo src={logo} alt="Home" />
                                </Link>
                            </BrandWrapper>
                            <MobileBackground isOpen={isOpen}>
                                <Sidebar pose={isOpen ? 'open' : 'closed'}>
                                    <NavLinks>
                                        {navLinks.map(item =>
                                            !item.children ? (
                                                <li key={item.index}>
                                                    <Item activeClassName="active" to={item.link} key={item.index}>
                                                        {item.text}
                                                    </Item>
                                                </li>
                                            ) : (
                                                <Dropdown
                                                    key={item.link}
                                                    className={
                                                        this.state.listsOpen[item.index] === true ? 'is-active' : ' '
                                                    }
                                                >
                                                    <DropdownMenuLink>
                                                        <DropdownItem
                                                            activeClassName="active"
                                                            to={item.link}
                                                            key={item.index}
                                                            className={'link'}
                                                        >
                                                            {item.text}
                                                        </DropdownItem>
                                                        <Button
                                                            onClick={() => this.toggleList(item)}
                                                            aria-label={'Open Sub-menu'}
                                                        >
                                                            <DropToggle onClick={this.toggleDrop}
                                                                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}/>
                                                            <ArrowDown />
                                                        </Button>
                                                    </DropdownMenuLink>
                                                    <DropdownList>
                                                        <DropGroup pose={dropOpen ? 'op' : 'clo'}>
                                                            {item.children.map(child => (
                                                                <li key={child.index}>
                                                                    <DropItem
                                                                        pose={dropOpen ? 'op' : 'clo'}
                                                                        to={child.link}
                                                                        key={child.index}
                                                                        activeClassName="dropdown-active"
                                                                    >
                                                                        {child.text}
                                                                    </DropItem>
                                                                </li>
                                                            ))}
                                                        </DropGroup>
                                                    </DropdownList>
                                                </Dropdown>
                                            )
                                        )}
                                    </NavLinks>
                                    <LangLinks>
                                        <ul>
                                            {Object.keys(langLinks).map(key => (
                                                <li key={key}>
                                                    <LanguageItem
                                                        // Hardcode current language for now
                                                        className={
                                                            'language' +
                                                            (langLinks[key].text === 'EN' ? '--current' : '')
                                                        }
                                                        to={langLinks[key].link}
                                                        key={key}
                                                    >
                                                        {langLinks[key].text}
                                                    </LanguageItem>
                                                </li>
                                            ))}
                                        </ul>
                                    </LangLinks>
                                </Sidebar>
                            </MobileBackground>
                        </NavWrapper>
                    }
                />
            </MobileSticky>
        )
    }
}

export default MobileMenu