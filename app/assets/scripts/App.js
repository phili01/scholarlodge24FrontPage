import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from "./modules/StickyHeader";
import HeaderEvents from "./modules/HeaderEvents";
import Modal from "./modules/Modal";
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var headerEvents = new HeaderEvents();
var modal = new Modal();
