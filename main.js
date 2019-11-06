let textarea;

function generateInput() {
  textarea = document.createElement('textarea');
  textarea.classList.add('text-field');
  textarea.setAttribute('cols', '100');
  textarea.setAttribute('rows', '10');
  document.body.appendChild(textarea);
}

const switchKey = {
  ShiftLeft: false,
  ControlLeft: false,
};

const keysLayout = [
  [
    {
      value1: '`',
      value2: 'ё',
      alt1: '~',
      alt2: null,
      code: 'Backquote',
    },
    {
      value1: '1',
      value2: '1',
      alt1: '!',
      alt2: '!',
      code: 'Digit1',
    },
    {
      value1: '2',
      value2: '2',
      alt1: '@',
      alt2: '"',
      code: 'Digit2',
    },
    {
      value1: '3',
      value2: '3',
      alt1: '#',
      alt2: '№',
      code: 'Digit3',
    },
    {
      value1: '4',
      value2: '4',
      alt1: '$',
      alt2: ';',
      code: 'Digit4',
    },
    {
      value1: '5',
      value2: '5',
      alt1: '%',
      alt2: '%',
      code: 'Digit5',
    },
    {
      value1: '6',
      value2: '6',
      alt1: '^',
      alt2: ':',
      code: 'Digit6',
    },
    {
      value1: '7',
      value2: '7',
      alt1: '&',
      alt2: '?',
      code: 'Digit7',
    },
    {
      value1: '8',
      value2: '8',
      alt1: '*',
      alt2: '*',
      code: 'Digit8',
    },
    {
      value1: '9',
      value2: '9',
      alt1: '(',
      alt2: '(',
      code: 'Digit9',
    },
    {
      value1: '0',
      value2: '0',
      alt1: ')',
      alt2: ')',
      code: 'Digit0',
    },
    {
      value1: '-',
      value2: '-',
      alt1: '_',
      alt2: '_',
      code: 'Minus',
    },
    {
      value1: '=',
      value2: '=',
      alt1: '+',
      alt2: '+',
      code: 'Equal',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'Backspace',
    },
  ],
  [
    {
      value1: '   ',
      value2: '   ',
      alt1: null,
      alt2: null,
      code: 'Tab',
    },
    {
      value1: 'q',
      value2: 'й',
      alt1: null,
      alt2: null,
      code: 'KeyQ',
    },
    {
      value1: 'w',
      value2: 'ц',
      alt1: null,
      alt2: null,
      code: 'KeyW',
    },
    {
      value1: 'e',
      value2: 'у',
      alt1: null,
      alt2: null,
      code: 'KeyE',
    },
    {
      value1: 'r',
      value2: 'к',
      alt1: null,
      alt2: null,
      code: 'KeyR',
    },
    {
      value1: 't',
      value2: 'е',
      alt1: null,
      alt2: null,
      code: 'KeyT',
    },
    {
      value1: 'y',
      value2: 'н',
      alt1: null,
      alt2: null,
      code: 'KeyY',
    },
    {
      value1: 'u',
      value2: 'г',
      alt1: null,
      alt2: null,
      code: 'KeyU',
    },
    {
      value1: 'i',
      value2: 'ш',
      alt1: null,
      alt2: null,
      code: 'KeyI',
    },
    {
      value1: 'o',
      value2: 'щ',
      alt1: null,
      alt2: null,
      code: 'KeyO',
    },
    {
      value1: 'p',
      value2: 'з',
      alt1: null,
      alt2: null,
      code: 'KeyP',
    },
    {
      value1: '[',
      value2: 'х',
      alt1: '{',
      alt2: null,
      code: 'BracketLeft',
    },
    {
      value1: ']',
      value2: 'ъ',
      alt1: '}',
      alt2: null,
      code: 'BracketRight',
    },
    {
      value1: '\\',
      value2: '\\',
      alt1: '|',
      alt2: '/',
      code: 'Backslash',
    },
  ],
  [
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'CapsLock',
    },
    {
      value1: 'a',
      value2: 'ф',
      alt1: null,
      alt2: null,
      code: 'KeyA',
    },
    {
      value1: 's',
      value2: 'ы',
      alt1: null,
      alt2: null,
      code: 'KeyS',
    },
    {
      value1: 'd',
      value2: 'в',
      alt1: null,
      alt2: null,
      code: 'KeyD',
    },
    {
      value1: 'f',
      value2: 'а',
      alt1: null,
      alt2: null,
      code: 'KeyF',
    },
    {
      value1: 'g',
      value2: 'п',
      alt1: null,
      alt2: null,
      code: 'KeyG',
    },
    {
      value1: 'h',
      value2: 'р',
      alt1: null,
      alt2: null,
      code: 'KeyH',
    },
    {
      value1: 'j',
      value2: 'о',
      alt1: null,
      alt2: null,
      code: 'KeyJ',
    },
    {
      value1: 'k',
      value2: 'л',
      alt1: null,
      alt2: null,
      code: 'KeyK',
    },
    {
      value1: 'l',
      value2: 'д',
      alt1: null,
      alt2: null,
      code: 'KeyL',
    },
    {
      value1: ';',
      value2: 'ж',
      alt1: ':',
      alt2: null,
      code: 'Semicolon',
    },
    {
      value1: "'",
      value2: 'э',
      alt1: '"',
      alt2: null,
      code: 'Quote',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'Enter',
    },
  ],
  [
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ShiftLeft',
    },
    {
      value1: 'z',
      value2: 'я',
      alt1: null,
      alt2: null,
      code: 'KeyZ',
    },
    {
      value1: 'x',
      value2: 'ч',
      alt1: null,
      alt2: null,
      code: 'KeyX',
    },
    {
      value1: 'c',
      value2: 'с',
      alt1: null,
      alt2: null,
      code: 'KeyC',
    },
    {
      value1: 'v',
      value2: 'м',
      alt1: null,
      alt2: null,
      code: 'KeyV',
    },
    {
      value1: 'b',
      value2: 'и',
      alt1: null,
      alt2: null,
      code: 'KeyB',
    },
    {
      value1: 'n',
      value2: 'т',
      alt1: null,
      alt2: null,
      code: 'KeyN',
    },
    {
      value1: 'm',
      value2: 'ь',
      alt1: null,
      alt2: null,
      code: 'KeyM',
    },
    {
      value1: ',',
      value2: 'б',
      alt1: '<',
      alt2: null,
      code: 'Comma',
    },
    {
      value1: '.',
      value2: 'ю',
      alt1: '>',
      alt2: null,
      code: 'Period',
    },
    {
      value1: '/',
      value2: '.',
      alt1: '?',
      alt2: ',',
      code: 'Slash',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ArrowUp',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ShiftRight',
    },
  ],
  [
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ControlLeft',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'MetaLeft',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'AltLeft',
    },
    {
      value1: ' ',
      value2: ' ',
      alt1: null,
      alt2: null,
      code: 'Space',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'AltRight',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ControlRight',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ArrowLeft',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ArrowDown',
    },
    {
      value1: '',
      value2: '',
      alt1: null,
      alt2: null,
      code: 'ArrowRight',
    },
  ],
];

const keyboard = {
  elements: {
    main: null,
    keys: [],
  },

  properties: {
    value: '',
    capslock: false,
    shift: false,
    lang: localStorage.getItem('lang') || 'eng',
    lastCaretPos: 0,
  },

  initilize() {
    localStorage.setItem('isRus', this.properties.isRus);
    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    this.elements.main.appendChild(this.createKeys());

    this.elements.keys = this.elements.main.querySelectorAll('.key');
    document.body.appendChild(this.elements.main);
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    keysLayout.forEach((line) => {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');

      line.forEach((key) => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute('type', 'button');
        keyElement.setAttribute('data-key', `${key.code}`);
        keyElement.classList.add('key');

        switch (key.code) {
          case 'Backspace':
            keyElement.classList.add('backspace', 'dark');
            keyElement.innerHTML = '<i class="fas fa-backspace"></i>';
            keyElement.addEventListener('click', () => {
              textarea.value = textarea.value.substring(0, textarea.value.length - 1);
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
            });
            break;

          case 'ShiftLeft':
            keyElement.classList.add('double', 'dark');
            keyElement.innerHTML = '<i class="fas fa-angle-up"></i>';
            keyElement.addEventListener('click', () => {
              textarea.focus();
              this.properties.shift = !this.properties.shift;
              this.toggleShift();
            });
            break;

          case 'ShiftRight':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<i class="fas fa-angle-up"></i>';
            keyElement.addEventListener('click', () => {
              this.properties.shift = !this.properties.shift;
              this.toggleShift();
            });
            break;

          case 'Enter':
            keyElement.classList.add('double', 'dark');
            keyElement.innerHTML = '<i class="fas fa-level-down-alt"></i>';
            keyElement.addEventListener('click', () => {
              const idx = this.getCaretPosition();
              this.properties.lastCaretPos = idx + 1;
              textarea.value = `${textarea.value.slice(0, idx)}\n${textarea.value.slice(idx)}`;
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              this.setCaretPosition(this.properties.lastCaretPos);
            });
            break;

          case 'Tab':
            keyElement.classList.add('tab', 'dark');
            keyElement.innerHTML = '<span>TAB</span>';
            keyElement.addEventListener('click', () => {
              const idx = this.getCaretPosition();
              this.properties.lastCaretPos = idx + 4;
              textarea.value = `${textarea.value.slice(0, idx)}    ${textarea.value.slice(idx)}`;
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              this.setCaretPosition(this.properties.lastCaretPos);
            });
            break;

          case 'ControlLeft':
          case 'ControlRight':
            keyElement.classList.add('ctrl', 'dark');
            keyElement.innerHTML = '<span>Ctrl</span>';
            keyElement.addEventListener('click', () => {
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
            });
            break;

          case 'AltLeft':
          case 'AltRight':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<span>Alt</span>';
            keyElement.addEventListener('click', (e) => {
              e.preventDefault();
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
            });
            break;

          case 'Space':
            keyElement.classList.add('long');
            keyElement.addEventListener('click', () => {
              const idx = this.getCaretPosition();
              this.properties.lastCaretPos = idx + 1;
              textarea.value = `${textarea.value.slice(0, idx)} ${textarea.value.slice(idx)}`;
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              this.setCaretPosition(this.properties.lastCaretPos);
            });
            break;

          case 'MetaLeft':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<i class="fab fa-windows"></i>';
            keyElement.addEventListener('click', () => {
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
            });
            break;

          case 'ArrowUp':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<i class="fas fa-arrow-up"></i>';
            keyElement.addEventListener('click', () => {
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              const lineBreakIdx = textarea.value.indexOf('\n', -this.getCaretPosition());
              const caretIndex = lineBreakIdx - Math.abs(lineBreakIdx - this.getCaretPosition());
              this.setCaretPosition(caretIndex);
            });
            break;

          case 'ArrowLeft':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<i class="fas fa-arrow-left"></i>';
            keyElement.addEventListener('click', () => {
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              this.setCaretPosition(this.getCaretPosition() - 1);
            });
            break;

          case 'ArrowDown':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<i class="fas fa-arrow-down"></i>';
            keyElement.addEventListener('click', () => {
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              const lineBreakIdx = textarea.value.indexOf('\n', this.getCaretPosition());
              const caretIndex = lineBreakIdx + Math.abs(lineBreakIdx - this.getCaretPosition());
              this.setCaretPosition(caretIndex);
            });
            break;

          case 'ArrowRight':
            keyElement.classList.add('dark');
            keyElement.innerHTML = '<i class="fas fa-arrow-right"></i>';
            keyElement.addEventListener('click', () => {
              textarea.focus();
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              this.setCaretPosition(this.getCaretPosition() + 1);
            });
            break;

          case 'CapsLock':
            keyElement.classList.add('double', 'dark');
            keyElement.innerHTML = '<span>CapsLock</span>';
            keyElement.addEventListener('click', () => {
              textarea.focus();
              this.toggleCapsLock();
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
            });
            break;

          default:
            const keyValue = this.properties.lang === 'rus' ? key.value2.toLowerCase() : key.value1.toLowerCase();
            keyElement.textContent = keyValue;
            keyElement.addEventListener('click', () => {
              const idx = this.getCaretPosition();
              this.properties.lastCaretPos = idx + 1;
              if (this.properties.capslock || this.properties.shift) {
                textarea.value = textarea.value.slice(0, idx) + keyElement.textContent.toUpperCase() + textarea.value.slice(idx);
              } else {
                textarea.value = textarea.value.slice(0, idx) + keyElement.textContent.toLowerCase() + textarea.value.slice(idx);
              }
              if (this.properties.shift) {
                this.properties.shift = false;
                this.toggleShift();
              }
              this.setCaretPosition(this.properties.lastCaretPos);
            });
            break;
        }

        row.appendChild(keyElement);
      });

      fragment.appendChild(row);
    });

    return fragment;
  },

  toggleCapsLock() {
    this.properties.capslock = !this.properties.capslock;

    this.elements.keys.forEach((key) => {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    });
  },

  toggleShift() {
    const flatKeys = keysLayout.reduce((acc, val) => acc.concat(val), []);
    this.elements.keys.forEach((key) => {
      if (key.childElementCount === 0) {
        const idx = flatKeys.findIndex((el) => el.code === key.dataset.key);
        if (this.properties.lang === 'rus') {
          if (this.properties.shift) {
            key.textContent = flatKeys[idx].alt2 ? flatKeys[idx].alt2 : key.textContent.toUpperCase();
          } else {
            key.textContent = flatKeys[idx].value2.toLowerCase();
          }
        } else if (this.properties.shift) {
          key.textContent = flatKeys[idx].alt1 ? flatKeys[idx].alt1 : key.textContent.toUpperCase();
        } else {
          key.textContent = flatKeys[idx].value1.toLowerCase();
        }
        key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    });
  },

  languageChange() {
    this.properties.isRus = !this.properties.isRus;
    if (this.properties.lang === 'rus') this.properties.lang = 'eng';
    else this.properties.lang = 'rus';
    localStorage.removeItem('isRus');
    localStorage.setItem('isRus', this.properties.isRus);
    localStorage.setItem('lang', this.properties.lang);
    const flatKeys = keysLayout.reduce((acc, val) => acc.concat(val), []);
    this.elements.keys.forEach((key) => {
      if (key.childElementCount === 0) {
        const idx = flatKeys.findIndex((el) => el.code === key.dataset.key);
        key.textContent = this.properties.lang === 'rus' ? flatKeys[idx].value2.toLowerCase() : flatKeys[idx].value1.toLowerCase();
      }
    });
  },

  getCaretPosition() {
    return textarea.selectionStart;
  },

  setCaretPosition(position) {
    textarea.focus();
    textarea.setSelectionRange(position, position);
  },
};

window.addEventListener('DOMContentLoaded', () => {
  generateInput();
  keyboard.initilize();
});

window.addEventListener('keydown', (e) => {
  const keyobj = document.querySelector(`[data-key="${e.code}"]`);
  if (keyobj) {
    keyobj.classList.add('highlighted');
  }

  if (e.code === 'ShiftLeft' || e.code === 'ControlLeft') {
    switchKey[e.code] = true;
  }

  if (Object.values(switchKey).every((x) => x === true)) {
    keyboard.languageChange();
  }
});

window.addEventListener('keyup', (e) => {
  const keyobj = document.querySelector(`[data-key="${e.code}"]`);
  if (keyobj) {
    keyobj.classList.remove('highlighted');
  }
  if (e.code === 'ShiftLeft' || e.code === 'ControlLeft') {
    switchKey[e.code] = false;
  }
  if (e.code === 'CapsLock') {
    keyboard.toggleCapsLock();
  }
});
