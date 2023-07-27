import { showAlert, debounce } from './util.js';
import { renderGallery } from './gallery.js';
import { hideModal, setOnFormSumbit } from './modal.js';
import { sendData, getData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { init as initFilter, getFilteredPictures } from './filter.js';

setOnFormSumbit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  initFilter(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
