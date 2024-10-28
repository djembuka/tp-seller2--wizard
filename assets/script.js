window.addEventListener('load', () => {
  //switcher
  document.querySelectorAll('.slr2-wizard-switcher').forEach((switcher) => {
    const leftBg = switcher.querySelector('.slr2-wizard-switcher-left-bg');
    const rightBg = switcher.querySelector('.slr2-wizard-switcher-right-bg');
    const leftItem = switcher.querySelector('.slr2-wizard-switcher-item--left');
    const rightItem = switcher.querySelector(
      '.slr2-wizard-switcher-item--right'
    );
    const rightCheckbox = document.getElementById('createSiteY');
    const leftCheckbox = document.getElementById('createSiteN');

    leftBg.style.width = `${leftItem.clientWidth - 4}px`;
    rightBg.style.width = `${rightItem.clientWidth - 4}px`;

    if (leftCheckbox.getAttribute('checked') === 'checked') {
      switcher.classList.add(
        'slr2-wizard-switcher--loaded',
        'slr2-wizard-switcher--left-acitve'
      );
      document
        .getElementById('slr2WizardTab1')
        .classList.add('slr2-wizard-tab--active');
    } else if (rightCheckbox.getAttribute('checked') === 'checked') {
      switcher.classList.add(
        'slr2-wizard-switcher--loaded',
        'slr2-wizard-switcher--right-acitve'
      );
      document
        .getElementById('slr2WizardTab2')
        .classList.add('slr2-wizard-tab--active');
    }

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
        leftCheckbox.setAttribute('checked', 'checked');
        leftCheckbox.click();
        rightCheckbox.removeAttribute('checked');
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
        rightCheckbox.setAttribute('checked', 'checked');
        rightCheckbox.click();
        leftCheckbox.removeAttribute('checked');
      }
    });
  });

  //control text
  document.querySelectorAll('.twpx-form-control--text').forEach((text) => {
    const control = text.querySelector('input');

    if (control.value.trim()) {
      text.classList.add('twpx-form-control--active');
    }

    control.addEventListener('focus', () => {
      text.classList.add('twpx-form-control--active');
    });
    control.addEventListener('blur', () => {
      if (!control.value.trim()) {
        text.classList.remove('twpx-form-control--active');
      }
    });
  });

  //select
  (() => {
    const tab1 = document.getElementById('slr2WizardTab1');
    if (!tab1) return;
    const select = tab1.querySelector('select');
    const component = tab1.querySelector('.twpx-form-control--select');
    if (!select || !component) return;
    const content = component.querySelector(
      '.twpx-form-control-select__content'
    );
    const control = component.querySelector('.twpx-form-control-select');
    const hidden = component.querySelector('input[type="hidden"]');

    //create options
    select.querySelectorAll('option').forEach((o) => {
      const option = document.createElement('div');
      option.classList.add('twpx-form-control-select__dropdown-item');
      option.setAttribute('data-value', o.getAttribute('value'));
      option.innerText = o.innerText;

      option.addEventListener('click', (e) => {
        e.preventDefault();
        clickItem(option);
      });

      document
        .querySelectorAll('#slr2WizardTab1 .twpx-form-control-select__dropdown')
        .forEach((dd) => {
          dd.append(option);
        });
    });

    //content
    content.addEventListener('click', openHideDropdown);

    //document click
    document.addEventListener('click', (e) => {
      if (
        e.target.className !== 'twpx-form-control-select__dropdown-item' &&
        e.target.className !== 'twpx-form-control-select__content'
      ) {
        hideDropdown();
      }
    });

    function openHideDropdown(e) {
      e.preventDefault();
      control.classList.toggle('twpx-form-control-select--dropdown');
    }

    function hideDropdown() {
      control.classList.remove('twpx-form-control-select--dropdown');
    }

    function clickItem(option) {
      const value = option.getAttribute('data-value');

      content.innerText = option.innerText;
      hidden.value = value;

      hideDropdown();

      component.classList.add('twpx-form-control-select--selected');

      //onchange
      if (typeof customOnChange === 'function') {
        customOnChange(value);
      }
    }

    function customOnChange(value) {
      tab1.querySelector('[name="__wiz_siteID"]').value = value;
    }
  })();

  //icon play

  document.querySelectorAll('.slr2-wizard-icon-play').forEach((icon) => {
    if (icon.parentNode.querySelectorAll('input').length) {
      icon.classList.add('slr2-wizard-icon-play--show');
    }
  });
});
