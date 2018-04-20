import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.siteHeaderLogo = $(".site-header__logo--sticky");
        this.siteHeaderSearch = $(".primary-nav__search");
        this.siteHeaderNavItemHide = $(".primary-nav__hide-on-form-expanded__false");
        this.siteHeaderSearchForm = $(".primary-nav__form");
        this.siteHeaderFormClose = $(".primary-nav__form--close");
        this.headerTriggerElement = $(".tab");
        this.createHeaderWayPoint();
        this.events();
    }
    
    
     events() {
       this.siteHeaderSearch.click(this.toggleSearchIcon.bind(this)); 
         
       this.siteHeaderFormClose.click(this.closeForm.bind(this));
    }
    
    
    toggleSearchIcon() {
        this.siteHeaderSearchForm.addClass("primary-nav__form--is-expanded");
        this.siteHeaderNavItemHide.addClass("primary-nav__hide-on-form-expanded__true");
        this.siteHeaderFormClose.addClass("primary-nav__form--close--is-visible");
        this.siteHeaderSearch.removeClass("primary-nav__search--is-visible");
    }
    
    
    closeForm() {
        this.siteHeaderSearchForm.removeClass("primary-nav__form--is-expanded");
        this.siteHeaderNavItemHide.removeClass("primary-nav__hide-on-form-expanded__true");
        this.siteHeaderFormClose.removeClass("primary-nav__form--close--is-visible");
        this.siteHeaderSearch.addClass("primary-nav__search--is-visible");
        
    }
    
  
    
    createHeaderWayPoint() {
        var that = this;
        new Waypoint({
           element: this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == "down") {
                    that.siteHeader.addClass("site-header--shrink");
                    that.siteHeaderLogo.addClass("site-header__logo--sticky--is-visible");
                   that.siteHeaderSearch.addClass("primary-nav__search--is-visible");
                    
                    
                } else {
                    that.siteHeader.removeClass("site-header--shrink");
                    that.siteHeaderLogo.removeClass("site-header__logo--sticky--is-visible");
                    that.siteHeaderSearch.removeClass("primary-nav__search--is-visible");
                    that.siteHeaderFormClose.removeClass("primary-nav__form--close--is-visible");
                    that.siteHeaderNavItemHide.removeClass("primary-nav__hide-on-form-expanded__true");
                    
                    that.siteHeaderSearchForm.removeClass("primary-nav__form--is-expanded");
                    
                }
            },
            offset: "23%"
        });
    }
    
}

export default StickyHeader;