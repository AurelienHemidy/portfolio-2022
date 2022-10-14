const MainState = reactive({
  sliderImageID: 0,
  isImageChanging: false,
});

const MainGetters = {};

const MainStore = {
  state: MainState,
  getters: MainGetters,
};

export default MainStore;
