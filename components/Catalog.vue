<template>
  <section class="catalog container">
    <div class="catalog__tabs-wrapper">
      <ul class="catalog__tabs-list">
        <li
          v-for="tab in tabs"
          :id="tab.id"
          :key="tab.id"
          tabindex="0"
          class="catalog__tab"
          :class="{ 'catalog__tab--active': tab.id === activeTab }"
          @click="tabsHandler($event, tab)"
          @keypress.enter="tabsHandler($event, tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </div>
    <div class="catalog__inner">
      <button
        v-if="isMobile"
        class="catalog__filter-toggle-btn"
        @click="filtersOpened = !filtersOpened"
      >
        Фильтры
        <span>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.286 8.004H.478A.476.476 0 000 8.482c0 .266.212.478.478.478h7.808a2.43 2.43 0 002.378 1.947 2.43 2.43 0 002.379-1.947h3.476a.476.476 0 00.478-.478.476.476 0 00-.478-.478h-3.476a2.43 2.43 0 00-2.379-1.946 2.43 2.43 0 00-2.378 1.946zm3.847.478a1.47 1.47 0 01-2.938 0 1.47 1.47 0 012.938 0zM4.28 13.855H.477a.476.476 0 00-.478.478c0 .265.212.478.478.478h3.801a2.43 2.43 0 002.379 1.947 2.43 2.43 0 002.378-1.947h7.483a.476.476 0 00.478-.478.476.476 0 00-.478-.478H9.033a2.43 2.43 0 00-2.379-1.947 2.426 2.426 0 00-2.375 1.947zm3.847.478a1.47 1.47 0 11-2.94-.002 1.47 1.47 0 012.94.002zM4.28 2.19H.477A.476.476 0 000 2.666c0 .265.212.478.478.478h3.801A2.43 2.43 0 006.658 5.09a2.43 2.43 0 002.378-1.946h7.486A.476.476 0 0017 2.667a.476.476 0 00-.478-.478h-7.49A2.43 2.43 0 006.655.242 2.423 2.423 0 004.28 2.19zm3.847.477a1.47 1.47 0 01-2.938 0 1.47 1.47 0 012.938 0z"
              fill="#4B4B4B"
            />
          </svg>
        </span>
      </button>

      <div v-if="filtersOpened" class="catalog__filters filters">
        <FilterBlock
          v-model="works.selectedTypes"
          class="filters__block filters__block--work"
          :data="works"
          @inputChange="inputChangeHandler"
        />

        <FilterBlock
          v-model="plots.selectedTypes"
          class="filters__block"
          :data="plots"
          @inputChange="inputChangeHandler"
          @inputSearchChange="inputSearchChangeHandler"
        />

        <FilterBlock
          v-model="styles.selectedTypes"
          class="filters__block"
          :data="styles"
          @inputChange="inputChangeHandler"
        />

        <FilterBlock
          v-model="technics.selectedTypes"
          class="filters__block"
          :data="technics"
          @inputChange="inputChangeHandler"
          @inputSearchChange="inputSearchChangeHandler"
        />

        <FilterBlockPeriod
          v-model="periods.selectedTypes"
          class="filters__block filters__block--periods"
          :data="periods"
          @inputChange="inputChangeHandler"
          @fromYearInputChange="fromYearInputChangeHandler"
          @toYearInputChange="toYearInputChangeHandler"
        />
      </div>

      <div class="catalog__filtered-wrapper">
        <div
          class="catalog__pictures"
          :class="{
            'catalog__pictures--big': bigPictures,
            'catalog__pictures--small': smallPictures,
          }"
        >
          <div v-if="!isMobile" class="catalog__controls">
            <ul class="catalog__tags">
              <li
                v-for="(item, index) in selectedTags"
                :id="item.value"
                :key="index"
                class="catalog__tag"
                @click="tagClickHandler($event, index)"
              >
                <p>{{ item.name }}</p>
                <span>+</span>
              </li>
            </ul>

            <div class="catalog__gallery-view-btns">
              <button
                id="big"
                class="catalog__gallery-view-btn"
                :class="{ 'catalog__gallery-view-btn--active': bigPictures }"
                type="button"
                aria-label="изменить вид галереи - большие изображения"
                @click="galleryViewHandler($event)"
                @keypress.enter="galleryViewHandler($event)"
              >
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 0h6v6H0zM9 0h6v6H9zM0 9h6v6H0zM9 9h6v6H9z"
                    fill="#bfbfbf"
                  />
                </svg>
              </button>
              <button
                id="small"
                class="catalog__gallery-view-btn"
                :class="{ 'catalog__gallery-view-btn--active': smallPictures }"
                type="button"
                aria-label="изменить вид галереи - маленькие изображения"
                @click="galleryViewHandler($event)"
                @keypress.enter="galleryViewHandler($event)"
              >
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 0h2.647v2.647H0V0zm0 6.1765h2.647v2.647H0v-2.647zm0 6.1764h2.647V15H0v-2.6471zM6.1765 0h2.647v2.647h-2.647V0zm0 6.1765h2.647v2.647h-2.647v-2.647zm0 6.1764h2.647V15h-2.647v-2.6471zM12.3529 0H15v2.647h-2.6471V0zm0 6.1765H15v2.647h-2.6471v-2.647zm0 6.1764H15V15h-2.6471v-2.6471z"
                    fill="#bfbfbf"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p v-if="!picturesPaginated.length" class="catalog__empty-message">
            Нет картин, соответствующих выбранным параметрам
          </p>

          <div
            v-for="(item, index) in picturesPaginated"
            :key="index"
            class="catalog__picture-wrapper"
          >
            <div
              class="catalog__picture"
              :style="{
                backgroundImage:
                  'url(' +
                  require(`~/static/pictures/filters/${item.img}`) +
                  ')',
              }"
            ></div>
            <p class="catalog__picture-text">{{ item.name }}</p>
            <p class="catalog__picture-text">{{ item.year }}</p>
          </div>
        </div>
        <Pagination
          :data="filteredPictures"
          :per-page="perPage"
          :current-page="currentPage"
          @paginationChange="changePageHandler"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FilterBlock from '@/components/FilterBlock'
import FilterBlockPeriod from '@/components/FilterBlockPeriod'
import Pagination from '@/components/Pagination'

export default {
  components: {
    FilterBlock,
    FilterBlockPeriod,
    Pagination,
  },
  data() {
    return {
      windowWidth: 1024,
      bigPictures: true,
      smallPictures: false,
      filtersOpened: true,
      currentPage: 0,
      perPage: 10,
      picturesPaginated: [],
      selectedTags: [
        {
          name: 'Живопись',
          value: 'painting',
          filterName: 'works',
        },
      ],
      tabPictures: {
        rarity: [],
        new: [],
        antiquity: [],
        philately: [],
      },
      activeTab: 'rarity',
      tabs: [
        {
          name: 'Раритет',
          id: 'rarity',
          isActive: true,
          url: 'https://api.npoint.io/8aa151bcd85bbd9429af',
        },
        {
          name: 'Новые',
          id: 'new',
          isActive: false,
          url: 'https://api.npoint.io/01fed44566f6c2c9dc8d',
        },
        {
          name: 'Антиквариат',
          id: 'antiquity',
          isActive: false,
          url: 'https://api.npoint.io/e5f6f6329822da9df327',
        },
        {
          name: 'Филателия',
          id: 'philately',
          isActive: false,
          url: 'https://api.npoint.io/3e69213a512443aae373',
        },
      ],
      works: {
        title: 'Работы',
        value: 'works',
        selectedTypes: ['painting'],
        unfoldBtn: 'работы',
        types: [
          {
            name: 'Живопись',
            value: 'painting',
            workAmount: 0,
            isChecked: true,
          },
          {
            name: 'Рисунки и иллюстрации',
            value: 'illustration',
            workAmount: 0,
            isChecked: false,
          },
          {
            name: 'Театрально-декорационное',
            value: 'theatrical-decorative',
            workAmount: 0,
            isChecked: false,
          },
          {
            name: 'Графика',
            value: 'drawing',
            workAmount: 0,
            isChecked: false,
          },
          {
            name: 'Гравюра',
            value: 'engraving',
            workAmount: 0,
            isChecked: false,
          },
          {
            name: 'Плакат',
            value: 'placard',
            workAmount: 0,
            isChecked: false,
          },
          {
            name: 'Скульптура',
            value: 'sculpture',
            workAmount: 0,
            isChecked: false,
          },
          {
            name: 'Декоративно-прикладное',
            value: 'decorative-applied',
            workAmount: 0,
            isChecked: false,
          },
        ],
      },
      plots: {
        title: 'Сюжет',
        value: 'plots',
        inputSearch: '',
        inputSearchShown: true,
        selectedTypes: [],
        unfoldBtn: 'сюжеты',
        types: [
          {
            name: 'Портрет',
            value: 'portrait',
            isChecked: false,
          },
          {
            name: 'Жанровая сцена',
            value: 'genre-painting',
            isChecked: false,
          },
          {
            name: 'Пейзаж',
            value: 'landscape',
            isChecked: false,
          },
          {
            name: 'Литературная сцена',
            value: 'literary',
            isChecked: false,
          },
          {
            name: 'Городской пейзаж',
            value: 'urban',
            isChecked: false,
          },
          {
            name: 'Ню',
            value: 'nu',
            isChecked: false,
          },
          {
            name: 'Интерьер',
            value: 'interior',
            isChecked: false,
          },
          {
            name: 'Натюрморт',
            value: 'still-life',
            isChecked: false,
          },
          {
            name: 'Аллегорическая сцена',
            value: 'allegorical',
            isChecked: false,
          },
          {
            name: 'Историческая сцена',
            value: 'historical',
            isChecked: false,
          },
          {
            name: 'Архитектура',
            value: 'architecture',
            isChecked: false,
          },
          {
            name: 'Анимализм',
            value: 'animalism',
            isChecked: false,
          },
          {
            name: 'Религиозная сцена',
            value: 'religious',
            isChecked: false,
          },
        ],
        typesRus: {
          portrait: 'Портрет',
          'genre-painting': 'Жанровая сцена',
          landscape: 'Пейзаж',
          literary: 'Литературная сцена',
          urban: 'Городской пейзаж',
          nu: 'Ню',
          interior: 'Интерьер',
          'still-life': 'Натюрморт',
          allegorical: 'Аллегорическая сцена',
          historical: 'Историческая сцена',
          architecture: 'Архитектура',
          animalism: 'Анимализм',
          religious: 'Религиозная сцена',
        },
      },
      styles: {
        title: 'Стили',
        value: 'styles',
        // folded: true,
        unfoldBtn: 'стили',
        selectedTypes: [],
        types: [
          {
            name: 'Реализм',
            value: 'realism',
            isChecked: false,
          },
          {
            name: 'Модерн',
            value: 'modernism',
            isChecked: false,
          },
          {
            name: 'Импрессионизм',
            value: 'impressionism',
            isChecked: false,
          },
          {
            name: 'Соцреализм',
            value: 'social-realism',
            isChecked: false,
          },
          {
            name: 'Примитивизм',
            value: 'primitivism',
            isChecked: false,
          },
          {
            name: 'Ар Нуво',
            value: 'art-nouveau',
            isChecked: false,
          },
          {
            name: 'Сюрреализм',
            value: 'surrealism',
            isChecked: false,
          },
        ],
      },
      technics: {
        title: 'Техника',
        value: 'technics',
        inputSearch: '',
        inputSearchShown: true,
        selectedTypes: [],
        unfoldBtn: 'техники',
        types: [
          {
            name: 'Масло',
            value: 'oil',
            isChecked: false,
          },
          {
            name: 'Акварель',
            value: 'watercolor',
            isChecked: false,
          },
          {
            name: 'Графитный карандаш',
            value: 'graphite-pen',
            isChecked: false,
          },
          {
            name: 'Гуашь',
            value: 'gouache',
            isChecked: false,
          },
          {
            name: 'Пастель',
            value: 'pastel',
            isChecked: false,
          },
          {
            name: 'Тушь',
            value: 'ink',
            isChecked: false,
          },
          {
            name: 'Графит',
            value: 'graphite',
            isChecked: false,
          },
          {
            name: 'Цветной карандаш',
            value: 'color-pencil',
            isChecked: false,
          },
          {
            name: 'Уголь',
            value: 'charcoal',
            isChecked: false,
          },
          {
            name: 'Мел',
            value: 'chalk',
            isChecked: false,
          },
          {
            name: 'Гравюра',
            value: 'etching',
            isChecked: false,
          },
          {
            name: 'Перо',
            value: 'pen',
            isChecked: false,
          },
        ],
        typesRus: {
          oil: 'Масло',
          watercolor: 'Акварель',
          'graphite-pen': 'Графитный карандаш',
          gouache: 'Гуашь',
          pastel: 'Пастель',
          ink: 'Тушь',
          graphite: 'Графит',
          'color-pencil': 'Цветной карандаш',
          charcoal: 'Уголь',
          chalk: 'Мел',
          etching: 'Гравюра',
          pen: 'Перо',
        },
      },
      periods: {
        title: 'Период',
        value: 'periods',
        minYear: null,
        maxYear: null,
        selectedTypes: [],
        unfoldBtn: 'периоды',
        range: [
          {
            name: 'до 1900',
            value: { min: 0, max: 1900 },
            isChecked: false,
            id: 'before-1900',
          },
          {
            name: '1901-1916',
            value: { min: 1901, max: 1916 },
            isChecked: false,
            id: 'from-1901-to-1916',
          },
          {
            name: '1917 и позже',
            value: { min: 1917, max: 1927 },
            isChecked: false,
            id: 'after-1917',
          },
        ],
      },
    }
  },
  computed: {
    filteredPictures() {
      return (
        this.pictures
          // фильтр по работам
          .filter((item) => {
            if (this.works.selectedTypes.length >= 0) {
              return this.works.selectedTypes.includes(item.work)
            } else {
              return true
            }
          })
          // фильтр по сюжету
          .filter((item) => {
            if (this.plots.selectedTypes.length) {
              return this.plots.selectedTypes.includes(item.plot)
            } else {
              return true
            }
          })
          // фильтр по полю поиска сюжета
          .filter((item) => {
            return (
              this.plots.inputSearch === '' ||
              this.plots.typesRus[item.plot]
                .toLowerCase()
                .includes(this.plots.inputSearch.toLowerCase())
            )
          })
          // фильтр по стилю
          .filter((item) => {
            if (this.styles.selectedTypes.length) {
              return this.styles.selectedTypes.includes(item.style)
            } else {
              return true
            }
          })
          // фильтр по технике
          .filter((item) => {
            if (this.technics.selectedTypes.length) {
              return this.technics.selectedTypes.includes(item.technics)
            } else {
              return true
            }
          })
          // фильтр по полю поиска техники
          .filter((item) => {
            return (
              this.technics.inputSearch === '' ||
              this.technics.typesRus[item.technics]
                .toLowerCase()
                .includes(this.technics.inputSearch.toLowerCase())
            )
          })
          // фильтр по полю ввода года
          .filter((item) => {
            if (!this.periods.maxYear) {
              return Number(item.year) >= this.periods.minYear
            } else if (!this.periods.minYear) {
              return Number(item.year) <= this.periods.maxYear
            } else if (this.periods.minYear && this.periods.maxYear) {
              return (
                Number(item.year) >= this.periods.minYear &&
                Number(item.year) <= this.periods.maxYear
              )
            } else {
              return true
            }
          })
          // фильтр по годам
          .filter((item) => {
            if (this.periods.selectedTypes.length) {
              return this.periods.selectedTypes.every((el) => {
                return item.year >= el.min && item.year <= el.max
              })
            } else {
              return true
            }
          })
      )
    },
    pictures() {
      return this.tabPictures[this.activeTab]
    },
    isMobile() {
      return this.windowWidth < 1023
    },
  },
  mounted() {
    fetch('https://api.npoint.io/8aa151bcd85bbd9429af')
      .then((response) => response.json())
      .then((json) => {
        const data = json
        this.tabPictures.rarity = data.pictures

        this.countWorkTypes()
        this.changePageHandler()
      })
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', (evt) => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    inputChangeHandler(item, obj) {
      const tag = { name: item.name, value: item.value, filterName: obj.value }
      item.isChecked = !item.isChecked

      if (item.isChecked === true && !obj.selectedTypes.includes(item.value)) {
        obj.selectedTypes.push(item.value)
        this.selectedTags.push(tag)
      } else {
        const itemIndex = obj.selectedTypes.indexOf(item.value)
        const tagIndex = this.selectedTags.findIndex(
          (el) => el.value === item.value
        )

        obj.selectedTypes.splice(itemIndex, 1)
        if (tagIndex !== -1) {
          this.selectedTags.splice(tagIndex, 1)
        }
      }
      this.changePageHandler()
    },
    fromYearInputChangeHandler(value) {
      this.periods.minYear = value
    },
    toYearInputChangeHandler(value) {
      this.periods.maxYear = value
    },
    inputSearchChangeHandler(data, value) {
      data.inputSearch = value.trim()
    },
    countWorkTypes() {
      this.works.types.forEach((item) => {
        item.workAmount = this.tabPictures[this.activeTab].filter(
          (picture) => picture.work === item.value
        ).length
      })
    },
    tabsHandler(evt, tab) {
      this.activeTab = evt.target.id

      fetch(tab.url)
        .then((response) => response.json())
        .then((json) => {
          const data = json
          this.tabPictures[this.activeTab] = data.pictures
          this.countWorkTypes()
          this.changePageHandler()
        })
    },
    tagClickHandler(evt, index) {
      const filterSelectedTypes = this[this.selectedTags[index].filterName]
        .selectedTypes
      const filterTypes = this[this.selectedTags[index].filterName].types
      const itemIndex = filterSelectedTypes.indexOf(evt.target.id)

      const typeIndex = filterTypes.findIndex(
        (el) => el.value === evt.target.id
      )
      const tagIndex = this.selectedTags.findIndex(
        (el) => el.value === evt.target.id
      )

      // снимаем галочку с чекбокса фильтра
      filterTypes[typeIndex].isChecked = false

      // удаляем значение фильтра из массива выбранных
      filterSelectedTypes.splice(itemIndex, 1)

      // удаляем тег из массива выбранных
      if (tagIndex !== -1) {
        this.selectedTags.splice(tagIndex, 1)
      }
      this.changePageHandler()
    },
    galleryViewHandler(evt) {
      const id = evt.target.id

      if (id === 'big') {
        this.bigPictures = true
        this.smallPictures = false
        this.perPage = 10
      } else if (id === 'small') {
        this.bigPictures = false
        this.smallPictures = true
        this.perPage = 15
      }
      this.changePageHandler()
    },
    changePageHandler(id = 1) {
      this.picturesPaginated = this.filteredPictures.slice(
        id * this.perPage - this.perPage,
        id * this.perPage
      )

      this.currentPage = Number(id)
    },
  },
}
</script>
