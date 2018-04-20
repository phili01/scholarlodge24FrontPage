import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
       this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.filter = $(".site-header__filter");
        this.filterContent = $(".site-header__filter--content");
        this.events();
    }
    
     events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.filter.click(this.hide.bind(this));
    }

    toggleTheMenu() {
       this.menuContent.toggleClass("site-header--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
        
    }
    
    
    hide() {
        this.filterContent.toggleClass("site-header__filter--content--is-visible");
        
    }
}                                                       

export default MobileMenu;