class HeaderEvents {
    constructor() {
        this.siteHeaderInput = $(".site-header__input");
        this.siteHeaderInputDescription = $(".form-control__input-description--is-visible");
        this.events();
    }
    
    events() {
          this.siteHeaderInput.click(this.hideItems.bind(this));
        
    }
    
    hideItems() {
        this.siteHeaderInputDescription.addClass("form-control__input-description--is-hidden");
    }

    
    
}

export default HeaderEvents;