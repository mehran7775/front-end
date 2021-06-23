import Vue from 'vue'
import Vuex from 'vuex'
import EventService from './services/EventService.js';
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        regularExpression: {
            regName: /^[ ضصثقفغعهخحجچپشسیبلاتنمکگظطزرذدئوآژ]{3,25}$/,
            regLastName: /^[ ضصثقفغعهخحژجآچپشسیبلاتنمکژگظطزرذدئو]{3,35}$/,
            regFullName: /^[ ضصثقفغعهخحژجآچپشسیبلاتنمکگظطزرذدئو]{3,50}$/,
            regUsername: /^[a-zA_Zضصثقفغعهخحژجچپشسیآبلاتنمکگظطزرذدئو0-9]{3,20}$/gi,
            regPassword: /^[\u06F0-\u06F90-9a-zA-Z0-9ضصآثقفغعهخحجچپشسیبلاژتنمکگظطزرذدئو ]{4,20}$/g,
            regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            reg_phoneNumber: /^[0-9\u06F0-\u06F90-9]{11}$/gi,
            regNameCompany: /^[ًٌٍ،؛َُِّۀآـ«»,:"ةيژؤإأء<> -؟ضصثقفغعهژخحجچپشسیبلاتنمکگظطزرذدئو./a-zA-Z0-9\u06F0-\u06F90-9]{3,100}$/
        },
        sideMenuOpen: false,
        vars: [],
        taxOptions: {
            affect: false,
            mount: 0,
            title: "تخفیف"
        },
        installEvent: false,
        showInstallAppBanner: false,
        factoreItems: {
            title: "پیش فاکتور",
            logo: "",
            from: {
                name: "",
                componyName: "",
                phone: "",
                adress: ""
            },
            to: {
                name: "",
                componyName: "",
                phone: ""
            },
            factoreDetails: {
                productName: "",
                factoreNumber: ""
            },
            tableItems: null,
            off: {
                affect: false,
                mount: "0",
                title: "تخفیف"
            },
            tax: {
                affect: false,
                mount: "0",
                title: "مالیات"
            },
            wholePrice: 0,
            realPrice: 0,
            persianPrice: "",
            factorDescs: ""
        },
        getPhoneId: {
            id: null,
            el: null
        },
        toggle_notification_df_msg: false
    },
    getters: {
        isSubMenuOpen: state => {
            return state.sideMenuOpen
        },
        getCatsFromCreaeProduct: state => {
            return state.vars
        }
    },
    mutations: {
        toggleSideMenu: state => {
            state.sideMenuOpen = !state.sideMenuOpen
        },
        fillCatsFromCreaeProduct: (state, payload) => {
            state.vars = payload
        },
        TOGGLE_NOTIFICATION_DF_MSG: (state, payload) => {
            state.toggle_notification_df_msg = payload
        }
    },
    actions: {
        toggleSubMenu: ({
            commit
        }) => {
            commit("toggleSideMenu")
        },
        fillCatsFromCreaeProduct: ({
            commit
        }, payload) => {
            commit("fillCatsFromCreaeProduct", payload)
        },
        select_default_msg({
            commit
        }, payload) {
            EventService.select_default_msg(payload)
                .then(response => {
                    if (response.status == 200) {
                        commit('TOGGLE_NOTIFICATION_DF_MSG', true)
                    }
                })
                .catch(error => [
                    console.log('e', error.response)
                ])
        }

    }
})