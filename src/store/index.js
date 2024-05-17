import { createStore } from "vuex";
import axiosInstance from "../config.js";

export default createStore({
  state: {
    isNavFixed: false,
    isDarkMode: false,
    isSidebarMini: false,
    hideConfigButton: false,
    isTransparent: true,
    isPinned: true,
    isRTL: false,
    showConfig: false,
    sidebarColor: "success",
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    isLargeScreen: true,
    token: localStorage.getItem("token") || null,
    authStatus: "",
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    SET_SHOW_CONFIGURATOR(state, payload) {
      state.showConfig = !!payload;
    },
    SET_IS_RTL(state, payload) {
      state.isRTL = payload;
    },
    SET_DARK_MODE(state, payload) {
      state.isDarkMode = !!payload;
    },
    SET_NAVBAR_FIXED(state, payload) {
      state.isNavFixed = !!payload;
    },
    SET_SHOW_SIDEBAR(state, payload) {
      state.showSidenav = !!payload;
    },
    SET_SIDEBAR_PINNED(state, payload) {
      state.isPinned = !!payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.sidebarColor = payload;
    },
    SET_IS_LARGE_SCREEN(state, payload) {
      state.isLargeScreen = !!payload;
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
    setAuthStatus(state, status) {
      state.authStatus = status;
    },
  },
  actions: {
    setNavbarFixed({ state }, payload) {
      state.isNavFixed = !!payload;
    },
    setDarkMode({ commit }, payload) {
      commit("SET_DARK_MODE", !!payload);
    },
    setShowSidebar({ commit }, payload) {
      commit("SET_SHOW_SIDEBAR", !!payload);
    },
    setSidebarPinned({ commit }, payload) {
      commit("SET_SIDEBAR_PINNED", !!payload);
    },
    toggleSidebarPinned({ commit, state }) {
      commit("SET_SIDEBAR_PINNED", !state.isPinned);
    },
    showConfigurator({ commit }) {
      commit("SET_SHOW_CONFIGURATOR", true);
    },
    closeConfigurator({ commit }) {
      commit("SET_SHOW_CONFIGURATOR", false);
    },
    setShowConfigurator({ commit }, payload) {
      commit("SET_SHOW_CONFIGURATOR", !!payload);
    },
    setSidebarTransparent({ commit }, payload) {
      commit("sidebarType", !!payload);
    },
    setSidebarColor({ commit }, payload) {
      commit("SET_SIDEBAR_COLOR", payload);
    },
    enableRTL({ commit }) {
      commit("SET_IS_RTL", true);
    },
    disableRTL({ commit }) {
      commit("SET_IS_RTL", false);
    },
    setIsLargeScreen({ commit }, payload) {
      commit("SET_IS_LARGE_SCREEN", !!payload);
    },
    async signIn({ commit }, credentials) {
      try {
        const response = await axiosInstance.post(
          "www.api.example.com/auth/sign-in",
          credentials
        );
        commit("setToken", response.data.token);
        commit("setAuthStatus", "success");
        this.$router.push("/");
      } catch (error) {
        commit("clearToken"); // Clear token if authentication fails
        commit("setAuthStatus", "error");
        // Optionally handle error, like showing a message to the user
        console.error("Sign In Error:", error);
        throw error; // Re-throw if you want calling components to handle it further
      }
    },
    async signUp({ commit }, credentials) {
      try {
        const response = await axiosInstance.post(
          "www.api.example.com/auth/sign-up",
          credentials
        );
        commit("setToken", response.data.token);
        commit("setAuthStatus", "success");
        this.$router.push("/");
      } catch (error) {
        commit("clearToken");
        commit("setAuthStatus", "error");
        console.error("Sign Up Error:", error);
        throw error;
      }
    },
    signOut({ commit }) {
      commit("clearToken");
      this.$router.push("/authentication/signin/basic");
    },
  },
  getters: {
    isRTL(state) {
      return state.isRTL;
    },
    sidebarTransparent(state) {
      return state.isTransparent;
    },
    darkMode(state) {
      return state.isDarkMode;
    },
    navbarFixed(state) {
      return state.isNavFixed;
    },
    showSideBar(state) {
      return state.showSidenav;
    },
    showNavBar(state) {
      return state.showNavbar;
    },
    sidebarPinned(state) {
      return state.isPinned;
    },
    showConfigurator(state) {
      return state.showConfig;
    },
    sidebarColor(state) {
      return state.sidebarColor;
    },
    cardBackgroundMaskColor(state) {
      return `card-background-mask-${state.sidebarColor}`;
    },
    isLargeScreen(state) {
      return state.isLargeScreen;
    },
  },
});
