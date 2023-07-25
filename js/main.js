import { showAlert } from './util.js';
import { renderGallery } from './gallery.js';
import { hideModal, setOnFormSumbit } from './modal.js';
import { sendData, getData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

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
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
