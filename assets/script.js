window.addEventListener('load', () => {
  //switcher
  document.querySelectorAll('.slr2-wizard-switcher').forEach((switcher) => {
    const leftBg = switcher.querySelector('.slr2-wizard-switcher-left-bg');
    const rightBg = switcher.querySelector('.slr2-wizard-switcher-right-bg');
    const leftItem = switcher.querySelector('.slr2-wizard-switcher-item--left');
    const rightItem = switcher.querySelector(
      '.slr2-wizard-switcher-item--right'
    );

    leftBg.style.width = `${leftItem.clientWidth - 4}px`;
    rightBg.style.width = `${rightItem.clientWidth - 4}px`;

    switcher.classList.add(
      'slr2-wizard-switcher--loaded',
      'slr2-wizard-switcher--left-acitve'
    );
    document
      .getElementById('slr2WizardTab1')
      .classList.add('slr2-wizard-tab--active');

    switcher.addEventListener('click', (e) => {
      if (e.target.classList.contains('slr2-wizard-switcher-item--left')) {
        //buttons
        switcher.classList.remove('slr2-wizard-switcher--right-acitve');
        switcher.classList.add('slr2-wizard-switcher--left-acitve');
        //tabs
        document
          .getElementById('slr2WizardTab1')
          .classList.add('slr2-wizard-tab--active');
        document
          .getElementById('slr2WizardTab2')
          .classList.remove('slr2-wizard-tab--active');
        //radio
        document
          .getElementById('createSiteY')
          .setAttribute('checked', 'checked');
        document.getElementById('createSiteN').removeAttribute('checked');
      } else {
        //buttons
        switcher.classList.remove('slr2-wizard-switcher--left-acitve');
        switcher.classList.add('slr2-wizard-switcher--right-acitve');
        //tabs
        document
          .getElementById('slr2WizardTab1')
          .classList.remove('slr2-wizard-tab--active');
        document
          .getElementById('slr2WizardTab2')
          .classList.add('slr2-wizard-tab--active');
        //radio
        document
          .getElementById('createSiteN')
          .setAttribute('checked', 'checked');
        document.getElementById('createSiteY').removeAttribute('checked');
      }
    });
  });

  //install button
  document
    .querySelectorAll('.slr2-wizard-install-button')
    .forEach((installButton) => {
      installButton
        .querySelectorAll('.wizard-prev-button')[1]
        .setAttribute('value', 'Установить');
    });

  //progress bar button
  document
    .querySelectorAll('.slr2-wizard-progress-bar-button')
    .forEach((installButton) => {
      installButton
        .querySelectorAll('.wizard-prev-button')[1]
        .setAttribute('value', 'Повторить');
    });

  //confirmation button
  document
    .querySelectorAll('.slr2-wizard-confirmation-button')
    .forEach((installButton) => {
      installButton
        .querySelectorAll('.wizard-prev-button')[1]
        .setAttribute('value', 'Начать настройки');
    });

  //control text
  document.querySelectorAll('.twpx-form-control--text').forEach((text) => {
    const control = text.querySelector('input');
    control.addEventListener('focus', () => {
      text.classList.add('twpx-form-control--active');
    });
    control.addEventListener('blur', () => {
      if (!control.value.trim()) {
        text.classList.remove('twpx-form-control--active');
      }
    });
  });
});
