(function () {
  const KEY = "mb_unlocked_level";

  function getUnlockedLevel() {
    return Number(localStorage.getItem(KEY) || 1);
  }

  function setUnlockedLevel(level) {
    localStorage.setItem(KEY, String(level));
  }

  // currentLevel: nivel que acabas de completar
  function unlockNextLevel(currentLevel) {
    const currentUnlocked = getUnlockedLevel();
    const nextLevel = currentLevel + 1;
    if (currentUnlocked < nextLevel) {
      setUnlockedLevel(nextLevel);
    }
  }

  // opcional: reiniciar progreso
  function resetProgress() {
    localStorage.removeItem(KEY);
  }

  // Exponer globalmente
  window.MBProgress = {
    getUnlockedLevel,
    setUnlockedLevel,
    unlockNextLevel,
    resetProgress
  };
})();