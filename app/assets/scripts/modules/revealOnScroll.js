import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReavel = $(els);
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    
    hideInitially() {
        this.itemsToReavel.addClass("reveal-item");
    }
    
    createWaypoints() {
        var that = this;
        this.itemsToReavel.each(function() {
          var currrentItem = this;
          new Waypoint({
             element: currrentItem,
              handler: function() {
               $(currrentItem).addClass("reveal-item--is-visible");
              },
              offset: that.offsetPercentage
          });
        });
    }
    
}

export default RevealOnScroll;