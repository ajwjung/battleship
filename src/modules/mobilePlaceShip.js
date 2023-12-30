const MobilePlay = (() => {
  let selectedShip;

  function setSelectedShip(e) {
    [, selectedShip] = e.target.classList;
  }

  function getSelectedShip() {
    return selectedShip;
  }

  return { setSelectedShip, getSelectedShip };
})();

export default MobilePlay;
