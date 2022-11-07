import Alpine from 'alpinejs';

Alpine.data('goblen', () => ({
  saves: [ '', '', '', '' ],
  width: 50,
  height: 50,
  colorList: [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
  ],
  currentColor: 'white',
  grid: [],
  openLoad: false,
  openSave: false,

  init() {
    if (localStorage.getItem('goblenSave0')) {
      this.load(0);
    } else {
      for (let h = 0; h < this.height; h++) {
        this.grid.push([]);
        for (let w = 0; w < this.width; w++) {
          this.grid[h].push('white');
        }
      }
    }

    this.$watch('width', (val) => {
      this.width = this.width * 1;

      this.reload();
    });
    this.$watch('height', (val) => {
      this.height = this.height * 1;

      this.reload();
    });
  },

  load(slot) {
    let save = localStorage.getItem(`goblenSave${slot}`);

    if (save) {
      save = save.split(',');
      this.height = save[0] * 1;
      this.width = save[1] * 1;

      this.reload();

      save = save.slice(2);

      for (let h = 0; h < this.height; h++) {
        for (let w = 0; w < this.width; w++) {
          this.grid[h][w] = save[h * this.width + w];
        }
      }
      this.openLoad = false;
    } else {
      alert(`A ${slot + 1}. helyen nincs mentés`);
    }
  },
  save(slot) {
    let saveItem = [ this.height, this.width, ...this.grid ];
    localStorage.setItem(`goblenSave${slot}`, saveItem);
    this.openSave = false;
  },
  reload() {
    this.grid = [];
    for (let h = 0; h < this.height; h++) {
      this.grid.push([]);
      for (let w = 0; w < this.width; w++) {
        this.grid[h].push('white');
      }
    }
  }
}));

Alpine.start();
