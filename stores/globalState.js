const MainState = reactive({
  sliderImageID: 0,
  isImageChanging: false,
  isInTransition: false,
  locomotiveScroll: null,
});

const MainGetters = {};

const MainStore = {
  state: MainState,
  getters: MainGetters,
};

export default MainStore;
