import vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./css/reset.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

import userPanelHeader from "./components/userpanel/template/userPanelHeeader/userPanelHeader.vue";
import sideMenu from "./components/userpanel/template/sideMenu/sideMenu.vue";
import userPanelWrapper from "./components/userpanel/userPanelWrapper.vue";
import installPrompt from "./components/user/template/installPrompt/installPrompt.vue";
import stickMenu from "./components/userpanel/template/stickMenu/stickMenu.vue";
import MiniOrder from "./components/userpanel/miniorder/Index2.vue"
vue.use(BootstrapVue)
vue.use(IconsPlugin)
vue.component('stickMenu', stickMenu);
vue.use(Vuex)
import {store} from "./userPanelStore"
import {toggleWrapper} from "./components/userpanel/mixIns/toggleCreateProductWrapper"
vue.mixin(toggleWrapper)
vue.mixin({
	data: function() {
		return {
			// csrf:csrf,
			userInfo:userInfo,
			install:null
		}
	}
})
const eventBus=new vue()
const app=new vue({
	el:"#userPanel",
	components:{
		// accept,
		stickMenu,
		installPrompt,
		userPanelHeader,
		sideMenu,
		userPanelWrapper,
		MiniOrder,
		'index':()=>import("./components/userpanel/index/index.vue"),
		'createProduct':()=>import("./components/userpanel/createPRoduct/createProduct.vue"),
		'editProduct':()=>import("./components/userpanel/editProducts/editProduct.vue"),
		'createBlogPost':()=>import('./components/userpanel/createBlogPost/createBlogPost.vue'),
		'addCategory':()=>import('./components/userpanel/addCategory/addCategory.vue'),
		'editVariations':()=>import("./components/userpanel/editCategoryVariations/editVariations.vue"),
		'ticket':()=>import("./components/userpanel/ticket/ticket.vue"),
		'ticketReps':()=>import("./components/userpanel/ticketReps/ticketReps.vue"),
		'myProducts':()=>import('./components/userpanel/myProducts/myProducts.vue'),
		'profile':()=>import('./components/userpanel/profile/producer/producer.vue'),
		'miniOrders':()=>import('./components/userpanel/miniOrders/miniOrders.vue'),
		'finishedPrice':()=>import('./components/userpanel/finishedPrice/finishedPrice.vue'),
		'catalogOrder':()=>import('./components/userpanel/catalogOrder/catalogOrder.vue'),
		'makeCatalog':()=>import("./components/userpanel/makeCatalog/makeCatalog.vue"),
		'wareHouse':()=>import("./components/userpanel/wareHouse/wareHouse.vue"),
		'customerOrganize':()=>import("./components/userpanel/customerOrganization/customerOrganization.vue"),
		'factor':()=>import("./components/userpanel/factor/factor.vue"),
		'mobileFactor':()=>import("./components/userpanel/factor/mobileFactor/mobileFactor.vue")

	},
	store
	// Router
})
import "vue-select/dist/vue-select.css";
import './css/userPanelCss/shared.css'
import "./css/reset.css";
import "./css/buttons.css";
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import './css/userPanelCss/profile.css'
// import {imageOverlay} from "leaflet/dist/leaflet-src.esm";
import './css/userPanelCss/tinyStyles.css'
