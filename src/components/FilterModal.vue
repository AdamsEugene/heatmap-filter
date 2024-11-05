<template>
  <div
    class="filter_modal"
    :class="{ full_screen: data?.name === 'Create Custom Filter' }"
    @click="handleClickOutside"
  >
    <div class="filter_wrapper" @click.stop>
      <div v-if="loading" class="loader_wrapper">
        <LoadingSpinner />
      </div>
      <header class="filter_header">
        <div class="filter_header_left">
          <img
            v-if="data?.iconSrc"
            class="filter_image"
            :src="getImagePath(data.iconSrc)"
            alt=""
          />
          <p class="filter_header_text">{{ getTitle(data?.name) }}</p>
        </div>
        <close-svg @click="closeSelectModal" />
      </header>
      <div
        class="filter_content"
        :class="{ allow_scroll: data?.name === 'Create Custom Filter' }"
      >
        <div class="filter_content_wrapper">
          <div
            v-if="data?.name === 'Create Custom Filter'"
            class="filter_content_dropdown"
          >
            <p class="dropdown_title">Filter Name</p>
            <div class="dropdown_body_wrapper">
              <input
                class="dropdown_body"
                :type="'text'"
                :placeholder="SecondPlaceholderMap(data?.name)"
                v-model="filterName"
                @input="validateFilterName"
              />
              <p v-if="filterNameError" class="error_message">
                {{ filterNameErrorMessage }}
              </p>
            </div>
            <div class="horizontal_line" />
          </div>
          <template v-for="(item, index) in allData" :key="item.index">
            <div v-if="index" class="condition_indicator">
              <div class="condition">
                <div>{{ item.condition }}</div>
              </div>
            </div>
            <div
              v-if="data?.name === 'Create Custom Filter'"
              class="filter_content_dropdown"
            >
              <div class="remove_action_wrapper">
                <p class="dropdown_title">Action</p>
              </div>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="noDropdown(data?.name)"
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.actionError }"
                  @click="toggleDropdown('action', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.actionOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :class="{ has_arrow: noDropdown(data?.name) }"
                  :type="'text'"
                  :placeholder="'Select'"
                  @focus="openDropdown('action', item.index)"
                  @input="filterItems('action', item.index)"
                  v-model="item.action"
                />
                <p v-if="item.actionError" class="error_message">
                  {{ item.actionErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    id="accordion"
                    v-show="item.actionOpen && noDropdown(data?.name)"
                    class="dropdown_menu_wrapper"
                    :class="{ align_center: touchingBottom }"
                  >
                    <li
                      v-for="(itemsToLoop, category) in actionItems"
                      :key="category"
                    >
                      <label
                        :for="String(category) + item.index"
                        class="dropdown_menu_item action"
                        :class="{ activeClass: category === item.action }"
                      >
                        <p>
                          {{ category }}
                        </p>
                        <arrow-svg :id="'inner_arrow'" />
                      </label>
                      <input
                        type="checkbox"
                        name="accordion"
                        :id="String(category) + item.index"
                        hidden
                      />
                      <ul class="content">
                        <li
                          v-for="innerItem in itemsToLoop"
                          :key="innerItem.name"
                          class="dropdown_menu_item inner_items"
                          :class="{
                            activeClass:
                              innerItem.name === item.actionValue?.name,
                          }"
                          @click="innerItemSelected(innerItem, item.index)"
                        >
                          <p>
                            {{ innerItem.name }}
                          </p>
                          <div
                            class="help_icon_inner"
                            v-if="
                              innerItem.needsMostFrequentValues &&
                              innerItem.acceptedValues
                            "
                            :title="innerItem.acceptedValues"
                          >
                            <img
                              class="filter_image"
                              :src="getImagePath(question)"
                              alt=""
                            />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div class="filter_content_dropdown">
              <p class="dropdown_title">{{ labelMap(data?.name) }}</p>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="noDropdown(data?.name)"
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.conditionError }"
                  @click="toggleDropdown('default', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.defaultOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :class="{ has_arrow: noDropdown(data?.name) }"
                  :type="numberInput(data?.name) ? 'number' : 'text'"
                  :placeholder="placeholderMap(data?.name)"
                  @blur="handleBlur()"
                  @focus="openDropdown('default', item.index)"
                  @input="filterItems('default', item.index)"
                  v-model="item.default"
                />
                <p v-if="item.conditionError" class="error_message">
                  {{ item.conditionErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    v-show="
                      item.defaultOpen &&
                      noDropdown(data?.name) &&
                      (item.actionValue?.conditions || dropdownItems).length > 0
                    "
                    class="dropdown_menu_wrapper"
                    :class="{ align_center: touchingBottom }"
                  >
                    <li
                      v-for="condition in item.actionValue?.conditions ||
                      dropdownItems"
                      :key="condition"
                      class="dropdown_menu_item"
                      :class="{
                        disabled_me: alreadySelected(condition),
                        activeClass: condition === item.default,
                      }"
                      @click="
                        alreadySelected(condition)
                          ? undefined
                          : selectItem(condition, 'default', item.index, data)
                      "
                    >
                      {{ condition }}
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div
              v-if="data?.showSign || item.options?.length"
              class="filter_content_dropdown"
            >
              <p class="dropdown_title">
                {{
                  item.action === "Session Tag"
                    ? "Session Tag Name"
                    : SecondLabelMap(data?.name)
                }}
              </p>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="
                    tagOptions?.length ||
                    item.actionValue?.options?.length ||
                    item.options?.length
                  "
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.valueError }"
                  @click="toggleDropdown('value', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.valueOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :class="{
                    second_one: data?.name === 'Average Order Value',
                    has_arrow:
                      tagOptions?.length ||
                      item.actionValue?.options?.length ||
                      item.options?.length,
                  }"
                  :type="
                    item.actionValue?.options?.length || item.options?.length
                      ? 'text'
                      : item.actionValue?.option === 'number'
                      ? 'number'
                      : 'text'
                  "
                  :placeholder="SecondPlaceholderMap(data?.name)"
                  @input="filterItems('value', item.index)"
                  v-model="item.value"
                  @blur="handleBlur()"
                  @focus="openDropdown('value', item.index)"
                />
                <div
                  v-if="data?.name === 'Average Order Value'"
                  class="absolute_placehopder"
                  :class="{ align_center: touchingBottom }"
                >
                  $
                </div>
                <p v-if="item.valueError" class="error_message">
                  {{ item.valueErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    v-show="
                      item.valueOpen &&
                      (tagOptions || item.actionValue?.options || item.options)
                        ?.length
                    "
                    class="dropdown_menu_wrapper"
                    :class="{ align_center: touchingBottom }"
                  >
                    <li
                      v-for="(option, index) in tagOptions ||
                      item.actionValue?.options ||
                      item.options"
                      :key="option + index"
                      class="dropdown_menu_item"
                      :class="{
                        activeClass:
                          String(item.value).split(', ').includes(option) ||
                          option === item.value,
                      }"
                      @click="selectItem(option, 'value', item.index, data)"
                    >
                      {{ option }}
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div
              v-if="
                data?.showSign &&
                (item.secOptions?.length ||
                  sessionTagValues?.[index]?.length ||
                  item.secValue)
              "
              class="filter_content_dropdown"
            >
              <p class="dropdown_title">{{ "Tag Value" }}</p>
              <div class="dropdown_body_wrapper">
                <div
                  v-if="
                    item.secOptions?.length || sessionTagValues?.[index]?.length
                  "
                  class="arrow_button_wrapper"
                  :class="{ we_have_error: item.valueError }"
                  @click="toggleDropdown('secValue', item.index)"
                >
                  <arrow-svg :isDropdownOpen="item.secValueOpen" />
                </div>
                <input
                  class="dropdown_body"
                  :class="{
                    has_arrow:
                      item.secOptions?.length ||
                      sessionTagValues?.[index]?.length,
                  }"
                  :type="
                    item.secOptions?.length || sessionTagValues?.[index]?.length
                      ? 'text'
                      : 'number'
                  "
                  :placeholder="SecondPlaceholderMap(data?.name)"
                  @input="filterItems('secValue', item.index)"
                  v-model="item.secValue"
                  @blur="handleBlur()"
                  @focus="openDropdown('secValue', item.index)"
                />
                <p v-if="item.valueError" class="error_message">
                  {{ item.valueErrorMsg }}
                </p>
                <transition name="dropdown">
                  <ul
                    v-show="
                      item.secValueOpen &&
                      (item.secOptions?.length ||
                        sessionTagValues?.[index]?.length)
                    "
                    class="dropdown_menu_wrapper"
                    :class="{ align_center: touchingBottom }"
                  >
                    <li
                      v-for="(option, _index) in sessionTagValues?.[index] ||
                      item.secOptions"
                      :key="option + _index"
                      class="dropdown_menu_item"
                      :class="{
                        activeClass:
                          String(item.value).split(', ').includes(option) ||
                          option === item.value,
                      }"
                      @click="selectItem(option, 'secValue', item.index, data)"
                    >
                      {{ option }}
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div
              v-if="data?.name === 'Create Custom Filter' && allData.length > 1"
              class="remove_custom_filter"
            >
              <div
                class="remove_custom"
                @click="removeCustomFilter(item.index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9 3L3 9"
                    stroke="#B71E2D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 3L9 9"
                    stroke="#B71E2D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Remove Filter</p>
              </div>
            </div>
          </template>
        </div>
        <div
          v-if="data?.name === 'Create Custom Filter'"
          class="add_custom_filter_wrapper"
          @click="addCustomFilter('and')"
        >
          <div class="add_custom_filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33301 8H12.6663"
                stroke="#00936F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 3.3335V12.6668"
                stroke="#00936F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="add_custom_filter_text">Add Additional Filter</p>
          </div>
        </div>
      </div>
      <footer class="filter_footer">
        <div class="footer_buttons">
          <div class="flex_us">
            <div class="footer_button" @click="cancel">
              <p class="footer_button_text">Cancel</p>
            </div>
            <div
              v-if="props.data?.edit"
              class="footer_button color_red_for_delete"
              @click="deleteFilter"
            >
              <p class="footer_button_text">Delete</p>
            </div>
          </div>
          <div
            class="footer_button primary_button"
            :class="{ disabled_me: false }"
            @click="next"
          >
            <p class="footer_button_text">
              {{ data?.name === "Create Custom Filter" ? "Save" : "Next" }}
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import ArrowSvg from "./icons/ArrowSvg.vue";
import CloseSvg from "./icons/CloseSvg.vue";
import question from "../assets/images/question.svg";
import LoadingSpinner from "./LoadingSpinner.vue";
import validator from "./validator";

import { _data, segmentValues } from "./data";

import {
  type DataItem,
  type AllData,
  type CombinedFilter,
  type Partner,
  type Experiment,
  type CustomValues,
} from "./@types";

type GroupedData = {
  [category: string]: DataItem[];
};

type WHAT = "default" | "action" | "value" | "secValue";

const options = {
  number: {
    "==": "Equal To",
    "<": "Less Than",
    ">": "Greater Than",
  },
  integer: {
    "==": "Equal To",
    ">": "Greater Than",
  },
  matches: {
    "==": "Equal To",
  },
  text: {
    "==": "Equal To",
    "&&": "Contains",
  },
};

const conditions = {
  "Equal To": "==",
  "Less Than": "<",
  "Greater Than": ">",
  Contains: "&&",
};

const items: string[] = [];

const props = defineProps<{
  closeSelectModal: () => void;
  data?: CombinedFilter;
  savedFilters?: string[];
}>();

const emit = defineEmits(["item-selected"]);

const getTextTitle = () => {
  let title = "";
  if (props.data?.edit) title = `${props.data.title}`;
  return title;
};

const getTitle = (text?: string) => {
  let title = text;
  if (props.data?.edit) title = `Update Custom Filter (${props.data.title})`;
  return title;
};

const getKeyByValue = (value: string, obj: any): string =>
  Object.keys(obj).find((key) => value.includes((obj as any)[key])) || "";

// const isDropdownOpen = ref({ default: false, action: false, value: false });
const currentUrl = ref(window.location.href);
const allDropdownItems = ref(items);
const allSecondOptions = ref<string[]>([]);
const dropdownItems = ref(allDropdownItems.value);
const sectionTags = ref();
const partners = ref<Partner>();
const _experiments = ref<Experiment[]>();
const experiment = ref<Experiment>();
const tagOptions = ref<string[]>();
const inputValue = ref<number | string>("");
const filterName = ref<string>(getTextTitle());
const filterNameError = ref(false);
const filterNameErrorMessage = ref("");
const sessionTagsData = ref<{ [x: string]: string[] }>();
const sessionTagValues = ref<{ [x: number]: string[] }>({});
const loading = ref<boolean>(false);
const allActionValues = ref<{ conditions: string[]; options: string[] }>({
  conditions: [],
  options: [],
});
const allValuesForSearch = ref<{ [x: string]: string[] }>({});
const allSecValuesForSearch = ref<{ [x: string]: string[] }>({});

// const actionValue = ref<DataItem>();
const touchingBottom = ref(false);
const allData = ref<AllData[]>([
  {
    condition: "and",
    index: 0,
    action: "",
    default: "",
    value: "",
    secValue: "",
    actionError: false,
    actionErrorMsg: "",
    conditionError: false,
    conditionErrorMsg: "",
    valueError: false,
    valueErrorMsg: "",
    actionOpen: false,
    defaultOpen: false,
    valueOpen: false,
    secValueOpen: false,
    actionValue: undefined,
  },
]);

const useEntryPage = (segment: string) => {
  return ["exitPageUrl", "entryPageUrl", "pageUrl"].includes(segment)
    ? "entryPageUrl"
    : segment;
};

const getItemFromUrl = (item: string) => {
  const parsedUrl = new URL(currentUrl.value);
  const searchParams = new URLSearchParams(parsedUrl.search);
  const hashParams = new URLSearchParams(parsedUrl.hash.slice(1));

  return searchParams.get(item) || hashParams.get(item) || "";
};

const dynamicallyFetchOptions = async (segment?: string) => {
  if (!segment) return;
  loading.value = true;

  const url = `/index.php?idSite=${getItemFromUrl(
    "idSite"
  )}&idSiteHsr=${getItemFromUrl(
    "subcategory"
  )}&method=API.getSuggestedValuesForSegment&module=API&segmentName=${useEntryPage(
    segment
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) return undefined;
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
    return undefined;
  } finally {
    loading.value = false;
  }
};

const updateOptions = async (
  item: AllData,
  index: number,
  selected?: string | number
) => {
  if (item.options?.length === 0 || !item.options) {
    const options = await dynamicallyFetchOptions(item.segment!);
    if (item.name === "Session Tag") {
      sessionTagsData.value = options;
      if (options) item.options = Object.keys(options || {});
      if (selected) {
        item.secOptions =
          Object.values((sessionTagsData.value as any)?.[selected]) || [];
      }
    } else {
      if (options) item.options = options;
    }
  }
  if (item.options) {
    allValuesForSearch.value[index] = item.options;
  }
  if (item.secOptions) {
    allSecValuesForSearch.value[index] = item.secOptions;
  }
};

// console.log(props.savedFilters);

const isElementTouchingBottom = (
  selector: string,
  threshold: number = 5
): boolean => {
  const element = document.querySelector(selector);
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return (
    windowHeight - rect.bottom <= threshold &&
    props.data?.name !== "Create Custom Filter"
  );
};

// const noSessionTags = computed(
//   () => sessionTagsData.value && Object.keys(sessionTagsData.value).length > 0
// );

const fieldToUpdate = (what: WHAT) =>
  what === "action"
    ? "actionOpen"
    : what === "default"
    ? "defaultOpen"
    : what === "secValue"
    ? "secValueOpen"
    : "valueOpen";

const toggleDropdown = (what: WHAT, index: number) => {
  // closeDropdown();
  allData.value = allData.value.map((data) =>
    data.index === index
      ? { ...data, [fieldToUpdate(what)]: !data[fieldToUpdate(what)] }
      : data
  );

  setTimeout(() => {
    touchingBottom.value = isElementTouchingBottom(".dropdown_menu_wrapper", 5);
  }, 10);
};

const openDropdown = (what: WHAT, index: number) => {
  closeDropdown();
  allData.value = allData.value.map((data) =>
    data.index === index ? { ...data, [fieldToUpdate(what)]: true } : data
  );
  setTimeout(() => {
    touchingBottom.value = isElementTouchingBottom(".dropdown_menu_wrapper", 5);
  }, 10);
};

const closeDropdown = () => {
  allData.value = allData.value.map((data) => ({
    ...data,
    valueOpen: false,
    defaultOpen: false,
    actionOpen: false,
    secValueOpen: false,
  }));
};

const handleClickOutside = () => {
  closeDropdown();
  closeDropdown();
  closeDropdown();
};

const handleBlur = () => {
  setTimeout(() => closeDropdown(), 100); // Delay to allow item selection
};

const selectItem = (
  item: string,
  what: WHAT,
  index: number,
  actionValue?: CombinedFilter
) => {
  if (sessionTagsData.value && what === "value") {
    if (!sessionTagValues.value[index]) {
      sessionTagValues.value[index] = [];
    }
    sessionTagValues.value[index] = sessionTagsData.value[item] || [];

    allData.value = allData.value.map((data) =>
      data.index === index ? { ...data, secValue: "" } : data
    );
    if (sessionTagValues.value[index]) {
      allSecValuesForSearch.value[index] = sessionTagValues.value[index];
    }
  }
  if (props.data?.name === "Create Custom Filter") {
    allData.value = allData.value.map((data) =>
      data.index === index ? { ...data, [what]: item } : data
    );
  } else if (props.data?.name === "Session Tag") {
    const oldItems = allData.value.find((d) => d.index === index)?.value || "";
    const alreadySelected = String(oldItems).split(", ").includes(item);
    let items = "";
    if (!alreadySelected) {
      items = oldItems + `${oldItems ? ", " : ""}${item}`;
    } else {
      items = String(oldItems)
        .split(", ")
        .filter((i) => i !== item)
        .join(", ");
    }

    allData.value = allData.value.map((data) =>
      data.index === index
        ? {
            ...data,
            [what]: what === "value" ? items : item,
            segment: actionValue?.definition,
          }
        : data
    );
    if (what === "default") {
      allSecondOptions.value = (sectionTags.value as any)[item] || [];
      tagOptions.value = allSecondOptions.value;
      allData.value[0].value = "";
    }
  } else {
    allData.value = allData.value.map((data) =>
      data.index === index
        ? { ...data, [what]: item, segment: actionValue?.definition }
        : data
    );

    if (what === "default" && props.data?.name === "A/B Tests") {
      allSecondOptions.value =
        (partners.value?.experiments as any)[
          getKeyByValue(item, partners.value?.partners_friendly)
        ]?.map((d: Experiment) =>
          d.experiment_id ? d.experiment_id + " - " + d.value : d.value
        ) || [];
      tagOptions.value = allSecondOptions.value;
      allData.value[0].value = "";
      _experiments.value =
        partners.value?.experiments?.[
          getKeyByValue(item, partners.value?.partners_friendly)
        ];
    }
  }

  if (what === "value") {
    if (props.data?.name === "A/B Tests") {
      console.log(_experiments.value, extractDesiredPart(item));

      experiment.value = _experiments.value?.find(
        (d) => d.value === extractDesiredPart(item)
      );
    }
    inputValue.value = item;
  }
  closeDropdown();
};

if (!(props.data?.name === "Session Tag" || props.data?.name === "A/B Tests")) {
  tagOptions.value = undefined;
}

const extractDesiredPart = (str: string): string => {
  const regex = /^[^ -]+ - (.+)$/;
  const match = str.match(regex);
  return match ? match[1] : str;
};

const innerItemSelected = async (item: DataItem, index: number) => {
  allData.value = allData.value.map((data) =>
    data.index === index
      ? { ...data, action: item.name, segment: item.segment, name: item.name }
      : data
  );
  if (item.options) allActionValues.value.options = item.options;
  if (item.conditions) allActionValues.value.conditions = item.conditions;

  if (props.data?.name === "Create Custom Filter") {
    if (item.options?.length === 0) {
      const options = await dynamicallyFetchOptions(item.segment!);
      if (item.name === "Session Tag") {
        sessionTagsData.value = options;
        if (options) item.options = Object.keys(options || {});
      } else {
        if (options) item.options = options;
      }
    }
  }

  if (item.options) {
    allValuesForSearch.value[index] = item.options;
  }

  const _index = allData.value.findIndex((data) => data.index === index);
  if (_index > -1) allData.value[_index].actionValue = item;
  closeDropdown();
};

const cancel = () => {
  props.closeSelectModal();
};

const deleteFilter = () => {
  const id = props.data?.id;
  if (typeof id === "undefined") return;
  const dataToDb = JSON.stringify({
    idSite: getItemFromUrl("idSite"),
    definition: "delete",
    filterId: id,
  });
  loading.value = true;
  const requestOptions = { method: "POST", body: dataToDb };
  const url =
    "/index.php?module=API&format=json&method=API.processCustomFilters";

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result?.status !== "success") {
        loading.value = false;
        return;
      }

      emit("item-selected", { id: props.data?.id }, true);
      loading.value = false;
      props.closeSelectModal();
    })
    .catch((error) => {
      console.log({ error });
      loading.value = false;
      props.closeSelectModal();
    });
};

const getImagePath = (filename: string) => filename;

switch (props.data?.name) {
  case "Average Order Value":
  case "Create Custom Filter":
    allDropdownItems.value = ["Equal To", "Less Than", "Greater Than"];
    dropdownItems.value = allDropdownItems.value;
    break;
  case "Session Tag":
    allSecondOptions.value = Object.keys(sectionTags.value || {});
    allDropdownItems.value = allSecondOptions.value;
    dropdownItems.value = allDropdownItems.value;
    tagOptions.value = [];
    break;
  case "A/B Tests":
    allSecondOptions.value = partners.value?.partners || [];
    allDropdownItems.value = allSecondOptions.value;
    dropdownItems.value = allDropdownItems.value;
    tagOptions.value = [];
    break;
  case "custom":
    break;
  default:
    break;
}

const next = () => {
  const validName = validateFilterName();
  if (props.data?.name === "Create Custom Filter") if (validName) return;

  const valid = validator(allData.value, props.data);
  if (!valid) return;

  if (props.data?.name === "Create Custom Filter") {
    // sessionTagName==;sessionTagValue=="
    const returnData = allData.value
      .map((data) =>
        data.action === "Session Tag"
          ? "sessionTagName==" +
            data.value +
            ";sessionTagValue==" +
            data.secValue
          : data.segment +
            conditions[data.default as keyof typeof conditions] +
            data.value
      )
      .join(";");

    const restData = allData.value.map((data) => ({
      action: data.action,
      default: data.default,
      name: data.name,
      segment: data.segment,
      value: data.value,
      secValue: data.secValue,
    }));

    const dataToDb = JSON.stringify({
      data: restData,
      title: filterName.value,
      definition: returnData,
      idSite: getItemFromUrl("idSite"),
      deviceType: getItemFromUrl("deviceType"),
      idSiteHsr: getItemFromUrl("subcategory"),
      filterId: props.data.id,
    });

    loading.value = true;
    const requestOptions = { method: "POST", body: dataToDb };

    const url =
      "/index.php?module=API&format=json&method=API.processCustomFilters";

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.status !== "success") {
          loading.value = false;
          return;
        }
        // console.log(result);
        emit("item-selected", result.filters, true);
        loading.value = false;
        props.closeSelectModal();
      })
      .catch((error) => {
        console.log({ error });
        loading.value = false;
        props.closeSelectModal();
      });
    return;
  } else {
    let returnData = "";
    if (props.data?.name === "Average Order Value") {
      returnData = allData.value
        .map(
          (data) =>
            data.segment +
            conditions[data.default as keyof typeof conditions] +
            data.value
        )
        .join(";");
      emit("item-selected", {
        name: `${props.data?.name} ${
          conditions[allData.value[0].default as keyof typeof conditions]
        } ${allData.value[0].value}`,
        definition: encodeURI(returnData),
      });
      props.closeSelectModal();
      return;
    }
    if (props.data?.name === "Session Tag") {
      const currentData = allData.value[0];
      const [segmentName, segmentValue] = currentData.segment?.split(
        ";"
      ) as string[];
      returnData = `${segmentName}${currentData.default};${segmentValue}${currentData.value}`;
      const returnObj = {
        url: encodeURIComponent(
          `?${currentData.default}=${String(currentData.value).replace(
            /\?/g,
            "&"
          )}`
        ),
      };
      // console.log(
      //   "return data: ",
      //   currentData.default == "variant" ? returnObj : ""
      // );

      emit("item-selected", {
        name: `${props.data?.name}: ${allData.value[0].default}=${allData.value[0].value}`,
        definition: encodeURI(returnData),
        rawValues: ["variant", "view"].includes(currentData.default)
          ? returnObj
          : "",
      });
      props.closeSelectModal();
      return;
    }
    if (props.data?.name === "A/B Tests") {
      const returnObj = {
        variantId: experiment.value?.variant_id,
        url: experiment.value?.url,
      };

      returnData += `partnerName==${allData.value[0].default};friendlyName==${experiment.value?.value}`;
      if (experiment.value?.variant_id)
        returnData += `;variantId==${experiment.value?.variant_id}`;
      if (experiment.value?.experiment_id)
        returnData += `;experienceId==${experiment.value?.experiment_id}`;
      emit("item-selected", {
        name: `${props.data?.name}: ${allData.value[0].value}`,
        definition: encodeURI(removeVariantSuffix(returnData)),
        rawValues: returnObj,
      });
      props.closeSelectModal();
      return;
    } else {
      let segment: string | number = "";
      returnData = allData.value
        .map((data) => (data.segment || props.data?.definition) + data.default)
        .join(";");
      if (typeof allData.value[0].default === "string")
        segment = extractInfoFromUrl(allData.value[0].default);
      else segment = allData.value[0].default;
      emit("item-selected", {
        name: `${props.data?.name}: ${segment}`,
        definition: encodeURI(returnData),
      });
      props.closeSelectModal();
      return;
    }
  }
};

function removeVariantSuffix(str: string): string {
  return str.replace(/(\s*\(\d+\))(?=[;]|$)/g, "");
}

const extractInfoFromUrl = (url?: string): string => {
  try {
    if (!url) throw new Error("URL is undefined or empty.");
    if (url.startsWith("file://")) {
      const pathParts = url.split("/").filter((part) => part.length > 0);
      return pathParts.length > 0 ? pathParts[pathParts.length - 1] : "unknown";
    } else {
      const urlObject = new URL(url);
      const hostname = urlObject.hostname;
      const domainParts = hostname.startsWith("www.")
        ? hostname.slice(4)
        : hostname;
      const pathParts = urlObject.pathname
        .split("/")
        .filter((part) => part.length > 0);
      if (pathParts.length > 0) {
        return pathParts[pathParts.length - 1];
      } else {
        const domainName = domainParts.split(".")[0];
        return domainName;
      }
    }
  } catch (error) {
    // console.error(`Invalid URL: ${url}`, error);
    const len = (url || "")?.split("/")?.length;
    return (url || "")?.split("/")?.[len - 1] || "";
  }
};

const alreadySelected = (item: string) => {
  return (
    extractInfoFromUrl(item)?.trim() ===
      props.data?.nameForCompare?.replace(`${props.data.name}:`, "")?.trim() &&
    !["A/B Tests", "Session Tag"].includes(props.data.name)
  );
};

const handleDocumentClick = (event: MouseEvent) => {
  if (
    !event
      .composedPath()
      .includes(document.querySelector(".filter_wrapper") as Node)
  ) {
    closeDropdown();
    closeDropdown();
    closeDropdown();
  }
};

const filterItems = (what: WHAT, index: number) => {
  const searchText = String(
    (allData.value.find((d) => d.index === index) as any)?.[what]
  )?.toLowerCase();

  const _index = allData.value.findIndex((data) => data.index === index);
  // if (_index > 0)

  if (what === "default") {
    if (allData.value[_index].actionValue?.conditions) {
      allData.value[_index].actionValue!.conditions =
        allActionValues.value?.conditions?.filter((item) =>
          item.toLowerCase().includes(searchText)
        );
    } else {
      dropdownItems.value = allDropdownItems.value.filter((item) =>
        item.toLowerCase().includes(searchText)
      );
    }
  }

  if (what === "value" && props.data?.name !== "Create Custom Filter") {
    if (allData.value[_index].actionValue?.options) {
      allData.value[_index].actionValue!.options =
        allActionValues.value?.options?.filter((item) =>
          item.toLowerCase().includes(searchText)
        );
    } else {
      tagOptions.value = allSecondOptions.value.filter((item) =>
        item.toLowerCase().includes(searchText)
      );
    }
  }

  if (what === "value" && props.data?.name === "Create Custom Filter") {
    if (allData.value[_index]?.options) {
      allData.value[_index]!.options = allValuesForSearch.value[index]?.filter(
        (item) => item.toLowerCase().includes(searchText)
      );
    } else {
      tagOptions.value = allValuesForSearch.value[index]?.filter((item) =>
        item.toLowerCase().includes(searchText)
      );
    }
  }

  if (what === "secValue") {
    if (allData.value[_index]?.secOptions) {
      allData.value[_index]!.secOptions = allSecValuesForSearch.value[
        index
      ]?.filter((item) => item.toLowerCase().includes(searchText));
    }
  }

  if (what === "action") {
    actionItems.value = actionItemsSearch(allActionItems.value, searchText);
  }
  openDropdown(what, index);
};

// console.log(actionValue.value, tagOptions.value);

const actionItemsSearch = (
  obj: GroupedData,
  searchTerm: string
): GroupedData => {
  const result: GroupedData = {};
  const objCopy: GroupedData = JSON.parse(JSON.stringify(obj));
  for (const category in objCopy) {
    const matchedItems = objCopy[category].filter((item) => {
      return (
        item.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        category?.toLowerCase()?.includes(searchTerm.toLowerCase())
      );
    });
    if (matchedItems.length > 0) {
      result[category] = matchedItems;
    }
  }

  return Object.keys(result).length > 0 ? result : allActionItems.value;
};

const noDropdown = (filter?: string) => {
  return filter !== "Total Pages Visited";
};

const numberInput = (filter?: string) => {
  return filter === "Total Pages Visited";
};

const validateFilterName = () => {
  let invalid = false;
  if (filterName?.value?.trim() === "") {
    filterNameErrorMessage.value =
      "Invalid input: Please enter a name for the filter.";
    invalid = true;
  } else if ((filterName?.value?.length || 0) < 3) {
    filterNameErrorMessage.value =
      "Invalid input: Filter name must be more then 3 characters";
    invalid = true;
  } else if ((filterName?.value?.length || 0) > 40) {
    filterNameErrorMessage.value =
      "Invalid input: Filter name cannot exceed 40 characters.";
    invalid = true;
  } else if (
    props.savedFilters?.includes(filterName?.value?.trim()) &&
    !props.data?.edit
  ) {
    filterNameErrorMessage.value = "Invalid input: Filter name already exists.";
    invalid = true;
  }
  filterNameError.value = invalid;
  return invalid;
};

const addCustomFilter = (condition: "and" | "or") => {
  const valid = validateFilterName();
  if (valid) return;
  actionItems.value = { ...allActionItems.value };
  const index = allData.value[allData.value.length - 1].index + 1;
  allData.value = [
    ...allData.value,
    {
      condition,
      index,
      action: "",
      default: "",
      value: "",
      secValue: "",
      actionError: false,
      actionErrorMsg: "",
      conditionError: false,
      conditionErrorMsg: "",
      valueError: false,
      valueErrorMsg: "",
      actionOpen: false,
      defaultOpen: false,
      valueOpen: false,
      secValueOpen: false,
    },
  ];
};

const removeCustomFilter = (index: number) => {
  allData.value = allData.value.filter((d) => d.index !== index);
};

const groupDataByCategory = (data: DataItem[]): GroupedData => {
  return data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as GroupedData);
};

const addOptionsToData = () =>
  _data.map((d) => ({
    ...d,
    options: segmentValues[d.segment as keyof typeof segmentValues] || [],
    conditions: Object.values((options as any)[d.option as any]) || [],
  }));

function convertOptionToArray(data: DataItem[]) {
  return data.map((item) => {
    if (typeof item.options === "object" && !Array.isArray(item.options)) {
      if (item.options) {
        item["options"] = Object.values(item.options) || [];
      } else {
        item["options"] = [];
      }
    }
    return item;
  });
}

const dataWithConvertedOptions = convertOptionToArray(
  addOptionsToData() as DataItem[]
);
const groupedData = groupDataByCategory(dataWithConvertedOptions);
const allActionItems = ref(groupedData);
const actionItems = ref({ ...allActionItems.value });

// console.log(actionItems.value);

const labelMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Referrer URL",
    "Traffic Source": "Referrer URL",
    "Total Pages Visited": "Number of visits",
    "Viewed Page": "Action URL",
    "Average Order Value": "Condition",
    "Create Custom Filter": "Condition",
    "Session Tag": "Session Tag Name",
    "A/B Tests": "Select A/B Testing Tool",
  };
  return map[inputType || ""];
};

const placeholderMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Select",
    "Traffic Source": "Select",
    "Total Pages Visited": "Enter value",
    "Viewed Page": "Select",
    "Average Order Value": "Equals",
    "Create Custom Filter": "Equals",
    "Session Tag": "Select",
    "A/B Tests": "Select",
  };
  return map[inputType || ""];
};

const SecondLabelMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Value",
    "Traffic Source": "",
    "Total Pages Visited": "",
    "Average Order Value": "Value",
    "Create Custom Filter": "Value",
    "Session Tag": "Tag Value",
    "A/B Tests": "Select Experiments",
  };
  return map[inputType || ""];
};

const SecondPlaceholderMap = (inputType?: string) => {
  const map: { [x: string]: string } = {
    "Entry Page": "Select",
    "Traffic Source": "",
    "Total Pages Visited": "",
    "Average Order Value": "0.00",
    "Create Custom Filter": "Enter value",
    "Session Tag": "Multiselect",
    "A/B Tests": "Select",
  };
  return map[inputType || ""];
};

// /index.php?idSite=4&idSiteHsr=6278&method=API.getSuggestedValuesForSegment&module=API&segmentName=entryPageUrl

const fetchSegmentData = async () => {
  loading.value = true;
  const [segmentName] = props.data?.definition?.split("==") || "";
  // const token = localStorage.getItem("heatUserId");

  const url = `/index.php?idSite=${getItemFromUrl(
    "idSite"
  )}&idSiteHsr=${getItemFromUrl(
    "subcategory"
  )}&method=API.getSuggestedValuesForSegment&module=API&segmentName=${segmentName}`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      if (!result) {
        loading.value = false;
        return;
      }
      if (props.data?.name === "Session Tag") {
        sectionTags.value = result;
        allDropdownItems.value = Object.keys(sectionTags.value || {});
        dropdownItems.value = allDropdownItems.value;
      } else if (props.data?.name === "A/B Tests") {
        partners.value = result;
        updateValuesForEachKey(partners.value?.experiments);
        const keys = partners.value?.partners;
        allDropdownItems.value =
          keys?.map((key) => partners.value?.partners_friendly?.[key]) || [];
        dropdownItems.value = allDropdownItems.value;
      } else {
        allDropdownItems.value = result;
        dropdownItems.value = result;
      }
      // console.log(result);
      loading.value = false;
    })
    .catch(() => {
      // console.log({ error });
      loading.value = false;
    });
};

const makeRequestFor = (filter?: string): boolean => {
  const allowRequestList = [
    "Entry Page",
    "Traffic Source",
    "Session Tag",
    "Viewed Page",
    "A/B Tests",
  ];
  return filter ? allowRequestList.includes(filter) : false;
};

const makeValuesUnique = (items: Experiment[]): Experiment[] => {
  const valueCount: { [key: string]: number } = {};
  return items.map((item) => {
    const { value } = item;
    if (valueCount[value]) {
      valueCount[value]++;
      item.value = `${value} (${valueCount[value]})`;
    } else {
      valueCount[value] = 1;
    }
    return item;
  });
};

const updateValuesForEachKey = (obj: any): Experiment[] => {
  const updatedObj: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      updatedObj[key] = makeValuesUnique(obj[key]);
    }
  }
  return updatedObj;
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
  if (makeRequestFor(props.data?.name)) {
    fetchSegmentData();
  }
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});

watch(filterName, () => {
  validateFilterName();
});

watch(
  () => props.data,
  async () => {
    if (props.data?.edit) {
      let allDataClone: AllData[] = [];

      (props.data.rawValues || (props.data as any).data)?.forEach(
        (value: CustomValues, index: number) => {
          allDataClone.push({
            ...allData.value[0],
            index,
            ...value,
            options: [],
            secOptions: [],
          });
        }
      );
      await Promise.all(
        allDataClone.map((item, index) =>
          updateOptions(item, index, item.value)
        )
      );
      allData.value = allDataClone;
      // console.log(allData.value);
    }
  },
  { deep: true, immediate: true }
);
</script>

<style scoped>
* {
  font-family: Montserrat;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-in-out;
  /* transform: translateY(-10px); */
}

.dropdown-enter, .dropdown-leave-to /* .dropdown-leave-active in <2.1.8 */ {
  opacity: 0;
  /* transform: translateY(-10px); */
}

input:focus,
input:visited,
input:focus-visible,
input:focus-within,
input:target {
  border-radius: var(--corner-med, 8px);
  border: 1px solid var(--Info-03-Main, #449ff4) !important;
  background: var(--Grey-White, #fff);
  box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
}

.filter_modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: var(--horizontal-padding-lg, 12px);
  background: rgba(52, 64, 75, 0.1);

  &.full_screen {
    position: fixed;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: rgba(31, 32, 34, 0.5) !important;
    border-radius: 0;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  .filter_wrapper {
    position: relative;
    display: flex;
    min-width: 425px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--horizontal-padding-lg, 12px);
    border: 1px solid var(--Grey-200, #e6e7e8);
    background: var(--Grey-White, #fff);
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    /* overflow: hidden; */

    .filter_header {
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 9;
      display: flex;
      padding: var(--vertical-padding-lg, 24px)
        var(--vertical-padding-med, 20px) 16px var(--vertical-padding-med, 20px);
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      align-self: stretch;
      border-bottom: 1px solid var(--Grey-200, #e6e7e8);

      .filter_header_left {
        display: flex;
        align-items: center;
        gap: var(--corner-med, 8px);
      }

      img {
        width: var(--vertical-padding-med, 20px);
        height: var(--vertical-padding-med, 20px);
      }

      #close_button {
        cursor: pointer;
      }

      .filter_header_text {
        flex: 1 0 0;
        color: var(--Grey-800, #34404b);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        text-overflow: ellipsis;
        overflow: hidden;
        width: 350px;
        white-space: nowrap;
      }
    }

    .filter_content {
      display: flex;
      padding: var(--vertical-padding-lg, 24px);
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
      align-self: stretch;
      /* max-height: 300px; */
      /* overflow-y: auto; */

      &.allow_scroll {
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-gutter: stable both-edges;
        height: 60vh;
        padding: var(--vertical-padding-lg, 16px);
      }

      .filter_content_wrapper {
        display: flex;
        /* padding: var(--vertical-padding-lg, 24px); */
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
      }

      .filter_content_dropdown {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;

        .dropdown_title {
          align-self: stretch;
          color: var(--Grey-800, #34404b);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 142.857% */
        }

        .dropdown_body_wrapper {
          position: relative;
          width: 100%;

          .absolute_placehopder {
            position: absolute;
            left: 13px;
            top: 10px;
            color: var(--Grey-600, #677078);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
          }

          .arrow_button_wrapper {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            cursor: pointer;

            &.we_have_error {
              top: 32%;
            }
          }

          .arrow_button_wrapper svg {
            transition: transform 0.3s ease;
          }

          .arrow_button_wrapper svg.rotated {
            transform: rotate(180deg);
          }

          .dropdown_body {
            display: flex;
            width: calc(100% - 24px);
            padding: 8px 12px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
            border-radius: var(--corner-med, 8px);
            border: 1px solid var(--Grey-200, #e6e7e8);
            background: var(--Grey-White, #fff);
            box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
            margin: 0;
            height: 30px;

            &.has_arrow {
              padding-right: 36px;
              width: calc(100% - 50px);
            }

            color: var(--Grey-800, #34404b);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */

            &.second_one {
              text-align: right;
            }
          }

          .dropdown_body::placeholder {
            color: var(--Grey-800, #999fa5);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
          }

          .dropdown_menu_wrapper {
            position: absolute;
            width: 100%;
            border-radius: var(--corner-med, 10px);
            background: var(--Grey-White, #fff);
            border: 1px solid var(--Grey-200, #e6e7e8);
            box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
            list-style: none;
            padding: 0;
            margin-top: 4px;
            max-height: 300px;
            overflow-y: auto;
            overflow-x: hidden;
            /* scrollbar-gutter: stable both-edges; */
            z-index: 10;
            /* transition: all 3s ease-in-out; */

            &.align_center {
              top: 50%;
              transform: translate(0px, -28%);
            }

            .dropdown_menu_item {
              display: flex;
              padding: var(--corner-med, 8px) var(--horizontal-padding-lg, 12px);
              align-items: flex-start;
              align-self: stretch;
              cursor: pointer;
              white-space: pre-wrap !important;

              &.action {
                display: flex;
                padding: 10px 14px 10px var(--horizontal-padding-lg, 12px);
                justify-content: space-between;
                align-items: center;
                align-self: stretch;
                background: var(--Grey-100, #f6f6f6);
              }

              color: var(--Grey-800, #34404b);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 142.857% */
              &:not(:last-child) {
                border-bottom: 1px solid var(--Grey-200, #e6e7e8);
              }
              &.activeClass {
                color: var(--Grey-800, #fff) !important;
                background: #03c191 !important;
              }

              &.inner_items {
                display: flex;
                padding: var(--horizontal-padding-lg, 12px)
                  var(--vertical-padding-lg, 24px);
                align-items: center;
                justify-content: space-between;
                align-self: stretch;
                font-weight: 600;
                line-height: 18px; /* 138.462% */
                transition: all 0.3s ease-in-out;
                &:hover {
                  background: #03c191;
                  color: #fff;

                  p {
                    color: #fff !important;
                  }

                  .help_icon_inner {
                    img {
                      filter: invert(100%);
                    }
                  }
                }

                .help_icon_inner {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 20px;
                  transition: all 0.3s ease-in-out;

                  img {
                    height: 16px;
                    transition: all 0.3s ease-in-out;
                  }
                }
              }
            }

            .dropdown_menu_item:hover {
              background: #e6e7e8;
            }
          }
        }
      }
    }
  }
}

.filter_footer {
  position: sticky;
  bottom: 0;
  background: #fff;
  z-index: 9;
  display: flex;
  padding: var(--horizontal-padding-lg, 12px) var(--vertical-padding-med, 20px);
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  border-radius: 0px 0px var(--horizontal-padding-lg, 12px)
    var(--horizontal-padding-lg, 12px);
  background: var(--Grey-White, #fff);
  border-top: 1px solid #e6e7e8;

  .footer_buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;

    .footer_button {
      display: flex;
      padding: var(--Padding-Horizontal-padding, 6px)
        var(--Padding-Vertical-padding, 16px);
      align-items: flex-start;
      gap: 10px;
      border-radius: var(--Padding-Corner, 6px);
      background: var(--Grey-200, #e6e7e8);
      box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
      cursor: pointer;

      &.disabled_me {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .footer_button_text {
        color: var(--Grey-600, #677078);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 200% */
      }
    }

    .footer_button.primary_button .footer_button_text {
      color: var(--Grey-White, #fff);
    }

    .footer_button.primary_button {
      background: var(--Primary-03-Main, #00936f);
    }
  }

  .button-group {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e6e7e8;

    .footer_button {
      border-radius: 0;
      background: transparent;

      .footer_button_text {
        color: #34404b;
        font-size: 14px;
      }
    }
  }
}

.color_red_for_delete {
  background-color: tomato !important;
  transition: all 0.3s ease-in-out;
  .footer_button_text {
    color: var(--Grey-White, #fff) !important;
  }

  &:hover {
    background-color: #b71e2d !important;
  }
}

.remove_action_wrapper {
  display: flex;
  width: 100%;
  /* margin-top: 8px; */
  align-items: center;
  justify-content: space-between;
}

.condition_indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 16px;

  .condition {
    width: 200px;
    height: 1px;
    background: var(--Grey-200, #e6e7e8);
    position: relative;

    div {
      display: inline-flex;
      padding: 4px var(--corner-med, 8px);
      justify-content: center;
      align-items: center;
      gap: 10px;
      background: var(--Grey-White, #fff);
      color: #34404b;
      font-weight: 900;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.error_message {
  color: var(--Error-04-Dark, #b71e2d);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-top: 8px !important;
}

.horizontal_line {
  width: 100%;
  height: 1px;
  background: var(--Grey-200, #e6e7e8);
  margin-top: 24px;
  margin-bottom: 8px;
}

.add_custom_filter_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .add_custom_filter {
    display: flex;
    padding: var(--Padding-Horizontal-padding, 6px)
      var(--Padding-Vertical-padding, 16px);
    align-items: center;
    gap: 4px;
    border-radius: var(--Padding-Corner, 6px);
    border: 1px solid var(--Primary-03-Main, #00936f);
    box-shadow: 0px 1px 2px 0px rgba(26, 40, 53, 0.09);
    cursor: pointer;

    .add_custom_filter_text {
      color: var(--Primary-03-Main, #00936f);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 128.571% */
    }
  }
}

.remove_custom_filter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;

  .remove_custom {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px var(--corner-med, 8px);
    background: var(--Grey-White, #fff);
    cursor: pointer;

    p {
      color: var(--Error-04-Dark, #b71e2d);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
  }
}

#accordion {
  display: flex;
  flex-direction: column;
  max-height: 1000px;
  /* transition: max-height 0.5s ease-out; */

  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    scrollbar-gutter: stable both-edges;
  }
}
#accordion label + input[type="checkbox"]:checked + .content {
  max-height: 400px;
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
}

#accordion input[type="checkbox"]:checked + label {
  transform: rotate(180deg);
}

#inner_arrow {
  margin-right: 2px;
}

.loader_wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100%);
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
  background-color: #67707811;
  /* transform: translate(-50%, -50%); */
}

.disabled_me {
  opacity: 0.5;
  cursor: not-allowed !important;
}

.flex_us {
  display: flex;
  gap: 2px;
  align-items: center;
}
</style>
