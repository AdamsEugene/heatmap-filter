<template>
  <div class="heat_custom_filter_absolute">
    <div class="heat_custom_filter">
      <FilterModal
        v-if="showSelectModal"
        :closeSelectModal="closeSelectModal"
        :data="modalData"
        :savedFilters="savedFilters"
        @item-selected="onItemSelected"
      />
      <div
        class="heat_custom_filter_body"
        :class="{
          blur_me:
            modalData?.name === 'Create Custom Filter' && showSelectModal,
        }"
      >
        <header class="heat_custom_filter_header">
          <p class="heat_custom_filter_header_text">
            {{ readyToCompare ? "Compare" : "All Filters" }}
          </p>
          <template
            v-for="(filter, index) in selectIndicators.pendingList.slice(0, 2)"
            :key="filter.nameForCompare || filter.name"
          >
            <div class="right_button not_clickable new_color insideCompare">
              <p class="right_button_text">
                {{ filter.nameForCompare || filter.name }}
              </p>
            </div>
            <p v-if="index < 1" class="heat_custom_filter_header_text">to</p>
            <div
              v-if="
                index === selectIndicators.pendingList.length - 1 && index < 1
              "
              class="right_button not_clickable awaiting"
            >
              <p class="right_button_text">Select a filter</p>
            </div>
          </template>
        </header>
        <div class="filter_body">
          <div class="filter_body_column">
            <header class="filter_body_column_head">
              <p class="filter_body_column_head_text">Session Data</p>
            </header>
            <ul class="filter_body_filters">
              <li
                v-for="data in sessionData"
                :key="data.name"
                :data-idsegment="data.idsegment"
                :data-definition="data.definition"
                :data-title="data.title"
                @click="disableButton(data.name) ? undefined : setActive(data)"
                class="filter_body_filter"
                :class="{
                  pendingClass: filterExist(data.name),
                  activeClass: addActiveClass(data.name),
                  disabled_me: disableButton(data.name),
                }"
              >
                <img
                  class="filter_image"
                  :src="getImagePath(data.iconSrc)"
                  alt=""
                />
                <p class="filter_body_filter_text">{{ data.name }}</p>
              </li>
            </ul>
          </div>
          <div class="filter_body_column">
            <header class="filter_body_column_head">
              <p class="filter_body_column_head_text">Ecommerce Data</p>
            </header>
            <ul class="filter_body_filters">
              <li
                v-for="data in eCommerceData"
                :key="data.name"
                :data-idsegment="data.idsegment"
                :data-definition="data.definition"
                :data-title="data.title"
                @click="disableButton(data.name) ? undefined : setActive(data)"
                class="filter_body_filter"
                :class="{
                  pendingClass: filterExist(data.name),
                  activeClass: addActiveClass(data.name),
                  disabled_me: disableButton(data.name),
                }"
              >
                <img
                  class="filter_image"
                  :src="getImagePath(data.iconSrc)"
                  alt=""
                />
                <p class="filter_body_filter_text">{{ data.name }}</p>
              </li>
            </ul>
          </div>
          <div class="filter_body_column">
            <header class="filter_body_column_head">
              <p class="filter_body_column_head_text">Custom Filters</p>
            </header>
            <ul class="filter_body_filters">
              <div v-if="loading" class="loader_wrapper main_page">
                <LoadingSpinner />
              </div>
              <template v-if="!loading && customData.length > 0">
                <li
                  v-for="data in customData"
                  :key="data.name"
                  :data-idsegment="data.idsegment"
                  :data-definition="data.definition"
                  :data-title="data.title"
                  @click="
                    disableButton(data.name) ? undefined : setActive(data)
                  "
                  class="filter_body_filter"
                  :class="{
                    pendingClass: filterExist(data.name),
                    activeClass: addActiveClass(data.name),
                    disabled_me: disableButton(data.name),
                  }"
                >
                  <img
                    class="filter_image"
                    :src="getImagePath(data.iconSrc)"
                    alt=""
                  />
                  <p class="filter_body_filter_text">{{ data.title }}</p>
                  <div
                    title="edit"
                    class="edit_icon_wrapper"
                    @click.stop="editCustomFilter(data)"
                  >
                    <img
                      class="filter_image edit_icon"
                      :src="getImagePath(editIcon)"
                      alt=""
                    />
                  </div>
                </li>
              </template>
              <div class="add_custom_filter" @click="onAddCustomFilter()">
                <p class="add_custom_filter_text">Add Custom</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="heat_custom_filter_footer">
        <div class="left_button">
          <p class="left_button_text" @click="resetAllFilters(false, true)">
            Clear Filters
          </p>
        </div>
        <div class="right_buttons">
          <template v-if="!disabledComparison">
            <div
              v-if="selectIndicators.pendingList.length < 2"
              class="right_button"
              :class="{ disabled_me: !selectIndicators.active }"
              @click="!selectIndicators.active ? undefined : onCompareWith()"
            >
              <p class="right_button_text">Compare to...</p>
            </div>
          </template>
          <div
            class="right_button new_color"
            :class="{ disabled_me: !disableCompareButton && !resetClicked }"
          >
            <p class="right_button_text" @click="onCompare">
              {{ !canApply ? "Apply" : "Compare" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineEmits, onMounted } from "vue";
import task from "../assets/images/task.svg";
import editIcon from "../assets/images/edit-icon.svg";
import LoadingSpinner from "./LoadingSpinner.vue";
import FilterModal from "./FilterModal.vue";
import { CombinedFilter, SessionDataItem } from "./@types";
import { eCommerceData, sessionData } from "./data";

type SelectIndicators = {
  active?: CombinedFilter;
  pendingList: CombinedFilter[];
};

type Item = { name: string; definition: string; rawValues: any; id?: string };

export type ReturnData = { definition: string; name: string; rest?: any };

const props = defineProps<{
  onToggleShowFilterMenu: () => void;
  defaultValues?: ReturnData[];
}>();

const emit = defineEmits<{
  (e: "filter-values", returnData: ReturnData[]): void;
  (e: "reset-all-filters"): void;
}>();

const customData = ref<SessionDataItem[]>([]);

const selectIndicators = ref<SelectIndicators>({
  active: undefined,
  pendingList: [],
});

const currentUrl = ref(window.location.href);
const showSelectModal = ref(false);
const modalData = ref<CombinedFilter>();
const resetClicked = ref(false);
const disabledComparison = ref(false);
const defaultSelections = ref<ReturnData[]>();
const pendingName = ref("");
const loading = ref<boolean>(false);
const savedFilters = ref<string[]>();

function getImagePath(filename: string) {
  return filename;
}

const canApply = computed(
  () => selectIndicators.value.pendingList.length === 2
);

function setActive(filter: CombinedFilter) {
  const selectedAlready = selectIndicators.value.pendingList
    .map((item) => item.name)
    .includes(filter.name);
  const hasNoSubStuff = selectIndicators.value.pendingList.find(
    (item) => item.name === filter.name
  )?.isDefinitionValueSet;
  if (selectedAlready && hasNoSubStuff) return;
  // console.log(filter, selectIndicators.value);

  defaultSelections.value = [];
  if (!filter.isDefinitionValueSet) {
    showSelectModal.value = true;
    if (!filter?.showSign) filter.showSign = false;
    modalData.value = { ...modalData.value, ...filter, edit: false };
  } else {
    pendingName.value = "";
    selectIndicators.value.active = filter;
    if (selectIndicators.value.pendingList.length === 1) {
      onCompareWith();
    }
  }
}

function addActiveClass(filter: string) {
  return (
    defaultSelections.value?.map((d) => d.name)?.includes(filter) ||
    selectIndicators.value.active?.name === filter
  );
}

function onAddCustomFilter() {
  modalData.value = {
    name: "Create Custom Filter",
    definition: "",
    iconSrc: "",
    idsegment: 0,
    title: "",
    showSign: true,
  };
  showSelectModal.value = true;
}

function onCompareWith(fromModal?: boolean) {
  if (selectIndicators.value.active) {
    const filter = fromModal
      ? modalData.value!
      : selectIndicators.value.active!;
    selectIndicators.value.pendingList = [
      ...selectIndicators.value.pendingList,
      { ...filter, nameForCompare: pendingName.value },
    ];
    selectIndicators.value.active = undefined;
  }
  if (modalData.value) {
    modalData.value = { ...modalData.value, nameForCompare: pendingName.value };
  }
  updateNames(selectIndicators.value.pendingList);
}

const updateNames = (entries: CombinedFilter[]): CombinedFilter[] => {
  const updatedEntries = [...entries];
  for (let i = 0; i < updatedEntries.length; i++) {
    for (let j = i + 1; j < updatedEntries.length; j++) {
      if (updatedEntries[i].name === updatedEntries[j].name) {
        updatedEntries[i].name = updatedEntries[i].nameForCompare!;
        updatedEntries[j].name = updatedEntries[j].nameForCompare!;
      }
    }
  }
  return updatedEntries;
};

function resetAllFilters(click?: boolean, enable?: boolean) {
  selectIndicators.value.pendingList = [];
  selectIndicators.value.active = undefined;
  selectIndicators.value.pendingList = [];
  defaultSelections.value = [];
  pendingName.value = "";
  modalData.value = undefined;
  if (enable) {
    resetClicked.value = true;
    emit("filter-values", []);
    props.onToggleShowFilterMenu();
  }
  if (click) emit("reset-all-filters");
}

function disableButton(button: string) {
  const index = selectIndicators.value.pendingList
    .map((f) => f.name)
    .indexOf(button);
  const hasNoSubStuff = selectIndicators.value.pendingList.find(
    (item) => item.name === button
  )?.isDefinitionValueSet;
  const notEnough = selectIndicators.value.pendingList.length === 2;
  return Boolean((index >= 0 && !!hasNoSubStuff) || notEnough);
}

const readyToCompare = computed(
  () => selectIndicators.value.pendingList.length > 0
);

function filterExist(filter: string) {
  return selectIndicators.value.pendingList.map((f) => f.name).includes(filter);
}

function closeSelectModal() {
  showSelectModal.value = false;
}

const disableCompareButton = computed(() => {
  return (
    selectIndicators.value.pendingList.length > 0 ||
    Boolean(selectIndicators.value.active?.name)
  );
});

function onItemSelected(item: Item | any, custom: boolean) {
  if (!item.name && !custom) {
    customData.value = customData.value.filter(
      (filter) => filter.id !== item.id
    );
    return;
  }

  if (typeof item.id === "number" && custom) {
    customData.value = customData.value.filter(
      (filter) => filter.id !== item.id
    );
    return;
  }

  if (custom) {
    customData.value = item.map((filter: any) => ({
      ...filter,
      name: filter.title,
      rawValues: filter.data,
      iconSrc: task,
      idsegment: 2,
      isDefinitionValueSet: true,
    }));
  }

  if (modalData.value) {
    pendingName.value = item.name;
    modalData.value = { ...modalData.value, definition: `${item.definition}` };
    if (item.rawValues) {
      modalData.value = { ...modalData.value, rawValues: item.rawValues };
    }
    selectIndicators.value.active = modalData.value;
    if (selectIndicators.value.pendingList.length === 1 && !custom) {
      selectIndicators.value.active = {
        ...modalData.value,
        nameForCompare: pendingName.value,
      };
      onCompareWith(true);
    }
  }
}

function onCompare() {
  if (!disableCompareButton.value && !resetClicked.value) return;
  if (
    selectIndicators.value.pendingList.length === 0 &&
    selectIndicators.value.active?.name
  ) {
    selectIndicators.value.pendingList = [selectIndicators.value.active];
  }
  let returnData = selectIndicators.value.pendingList.map((d) => ({
    definition: d.definition,
    name: d.nameForCompare || d.name,
    rest: d.rawValues,
  }));
  if (returnData.length === 1 && pendingName.value)
    returnData = returnData.map((data) => ({
      ...data,
      name: pendingName.value,
    }));
  emit("filter-values", returnData);
  resetAllFilters();
  props.onToggleShowFilterMenu();
}

const editCustomFilter = (filter: SessionDataItem) => {
  filter.showSign = true;
  modalData.value = {
    ...filter,
    name: "Create Custom Filter",
    edit: true,
    iconSrc: editIcon,
  };
  showSelectModal.value = true;
};

watch(
  () => props.defaultValues,
  (newVal) => {
    defaultSelections.value = newVal;
  },
  { immediate: true }
);

const getItemFromUrl = (item: string) => {
  const parsedUrl = new URL(currentUrl.value);
  const searchParams = new URLSearchParams(parsedUrl.search);
  const hashParams = new URLSearchParams(parsedUrl.hash.slice(1));

  return searchParams.get(item) || hashParams.get(item) || "";
};

const fetchCustomFilters = async () => {
  loading.value = true;
  const body = JSON.stringify({
    idSite: getItemFromUrl("idSite"),
    deviceType: getItemFromUrl("deviceType"),
    idSiteHsr: getItemFromUrl("subcategory"),
  });

  const requestOptions = { method: "POST", body };

  const url =
    "/index.php?module=API&format=json&method=API.processCustomFilters";

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (!result) {
        loading.value = false;
        return;
      }
      if (result.message) {
        customData.value = result.message.map((data: any) => ({
          definition: data.definition,
          iconSrc: task,
          idsegment: 2,
          name: data.title,
          title: data.title,
          isDefinitionValueSet: true,
          rawValues: data.data,
          ...data,
        }));
        savedFilters.value = result.message.map((filter: any) => filter.title);
      }
      loading.value = false;
    })
    .catch((error) => {
      console.log({ error });
      loading.value = false;
    });
};

onMounted(() => {
  resetAllFilters();
  fetchCustomFilters();
  document.addEventListener("reset-all-filters-event", () => {
    resetAllFilters(true);
  });
  document.addEventListener("disable-comparison-event", (event: any) => {
    // console.log(event.detail.disabled);
    disabledComparison.value = event.detail.disabled;
  });
});
</script>

<style scoped>
* {
  font-family: Montserrat;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heat_custom_filter_absolute {
  position: absolute;
  top: 58px;
  left: 0;
  z-index: 9;
}

.heat_custom_filter {
  position: relative;
  display: flex;
  min-width: 612px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--horizontal-padding-lg, 12px);
  border: 1px solid var(--Grey-200, #e6e7e8);
  background-color: var(--Grey-White, #fff);
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  .heat_custom_filter_body {
    display: flex;
    padding: var(--vertical-padding-lg, 24px) var(--vertical-padding-med, 20px)
      16px var(--vertical-padding-med, 20px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--vertical-padding-lg, 24px);
    align-self: stretch;

    &.blur_me {
      opacity: 0.2;
    }

    .heat_custom_filter_header {
      display: flex;
      padding: 0px 6px;
      align-items: center;
      gap: var(--corner-med, 8px);
      align-self: stretch;
      border-radius: 4px;

      .heat_custom_filter_header_text {
        color: var(--Grey-800, #34404b);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        padding: 8px 0px;
      }
    }

    .filter_body {
      display: flex;
      align-items: flex-start;
      gap: var(--vertical-padding-lg, 24px);
      align-self: stretch;

      .filter_body_column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--corner-med, 8px);
        flex: 1 0 0;

        .filter_body_column_head {
          display: flex;
          padding: 0px 6px;
          align-items: center;
          gap: var(--corner-med, 8px);
          align-self: stretch;
          border-radius: 4px;

          .filter_body_column_head_text {
            flex: 1 0 0;
            color: var(--Primary-04-Dark, #016f52);
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px; /* 128.571% */
          }
        }

        .filter_body_filters {
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: flex-start;
          align-self: stretch;

          .filter_body_filter {
            position: relative;
            display: flex;
            padding: 10px 6px;
            align-items: center;
            gap: 8px;
            align-self: stretch;
            border-radius: 4px;
            list-style: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            .filter_image {
              transition: all 0.3s ease-in-out;
              height: 18px;
              width: 18px;
            }
            .edit_icon_wrapper {
              /* position: absolute; */
              right: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              visibility: hidden;
              opacity: 0;
              padding: 4px;
              height: 18px;
              width: 24px;
              /* background-color: rgba(100, 99, 99, 0.705); */
              border-radius: 50%;
              z-index: 9;
              cursor: pointer;
              transition: all 0.3 ease-in-out;
              .edit_icon {
                height: 12px !important;
                transition: all 0.3 ease-in-out;
              }
            }

            &:hover {
              .edit_icon_wrapper {
                visibility: visible;
                opacity: 1;
                .edit_icon {
                  border-radius: 20px;
                }
              }
              background-color: #e6e7e8;
              /* .filter_body_filter_text {
                color: #fff;
              } */

              /* .filter_image {
                filter: invert(100%);
              } */
            }

            .filter_body_filter_text {
              flex: 1 0 0;
              color: var(--Grey-800, #34404b);
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 12px; /* 100% */
              transition: all 0.3s ease-in-out;
              text-overflow: ellipsis;
              overflow: hidden;
              min-width: 138px;
              width: max-content;
              /* white-space: break-spaces; */
            }

            &.pendingClass {
              background-color: #ffffff;
              .filter_body_filter_text {
                color: #34404b;
              }
              .filter_image {
                /* filter: invert(100%); */
                height: 18px;
                width: 18px;
              }

              &:hover {
                background-color: #e6e7e8;
              }
            }
            &.activeClass {
              background-color: #03c191 !important;
              .filter_body_filter_text {
                color: #fff !important;
              }
              .filter_image {
                filter: invert(100%);
                height: 18px;
                width: 18px;
              }
            }

            &.disabled_me {
              background-color: transparent;
              cursor: not-allowed !important;
              .filter_body_filter_text {
                color: var(--Grey-500, #999fa5);
              }
            }
          }

          .add_custom_filter {
            display: flex;
            padding: 7px 6px;
            align-items: center;
            gap: 8px;
            height: 38px;
            align-self: stretch;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
              background-color: #e6e7e8;
              /* .add_custom_filter_text {
                color: #fff;
              } */
            }

            .add_custom_filter_text {
              color: var(--Grey-800, #34404b);
              font-size: 13px;
              font-style: normal;
              font-weight: 600;
              line-height: 18px; /* 138.462% */
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }

  .heat_custom_filter_footer {
    display: flex;
    padding: 12px 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px 0px 12px 12px;
    border: 1px solid var(--Grey-200, #e6e7e8);
    background-color: var(--Grey-White, #fff);

    .left_button {
      display: flex;
      padding: var(--Padding-Horizontal-padding, 6px)
        var(--Padding-Vertical-padding, 16px);
      align-items: flex-start;
      gap: 10px;
      border-radius: var(--Padding-Corner, 6px);
      background-color: var(--Grey-100, #f6f6f6);
      box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
      cursor: pointer;

      .left_button_text {
        color: var(--Grey-600, #677078);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 200% */
      }
    }

    .right_buttons {
      display: flex;
      align-items: center;
      gap: var(--horizontal-padding-lg, 12px);
    }
  }

  .right_button {
    display: flex;
    padding: var(--Padding-Horizontal-padding, 6px)
      var(--Padding-Vertical-padding, 16px);
    align-items: flex-start;
    gap: 10px;
    border-radius: var(--Padding-Corner, 6px);
    border: 1.5px solid var(--Primary-03-Main, #00936f);
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    cursor: pointer;

    &.not_clickable {
      cursor: auto !important;
    }

    &.new_color {
      background-color: var(--Primary-03-Main, #00936f);
      .right_button_text {
        color: var(--Grey-White, #fff);
      }
    }

    &.awaiting {
      background-color: var(--Grey-100, #f6f6f6);
      border: 1.5px solid var(--Primary-03-Main, #f6f6f6);
      padding: 6px 10px;
      .right_button_text {
        color: var(--Grey-White, #b3b7bc);
        font-size: 12px;
      }
    }

    &.insideCompare {
      padding: 6px 10px;
      .right_button_text {
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 160px;
        white-space: nowrap;
      }
    }

    .right_button_text {
      color: var(--Primary-03-Main, #00936f);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px; /* 200% */
    }

    &.disabled_me {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @keyframes radiating {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }

  @keyframes glowing-green {
    0% {
      box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    }
    50% {
      box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00;
    }
    100% {
      box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    }
  }

  .loader_wrapper.main_page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;

    .loader {
      height: 40px !important;
      width: 40px !important;
      border-width: 4px !important;
    }
  }
}
</style>
