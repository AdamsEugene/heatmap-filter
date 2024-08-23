(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".loader[data-v-3942cef3]{border:4px solid #f3f3f3;border-radius:50%;border-top:8px solid #d1fae691;border-right:8px solid #00946f91;border-bottom:8px solid #ff634791;width:40px;height:40px;-webkit-animation:spin-3942cef3 1s linear infinite;animation:spin-3942cef3 1s linear infinite}@-webkit-keyframes spin-3942cef3{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes spin-3942cef3{0%{transform:rotate(0)}to{transform:rotate(360deg)}}[data-v-7bec554d]{font-family:Montserrat;margin:0;padding:0;box-sizing:border-box}.dropdown-enter-active[data-v-7bec554d],.dropdown-leave-active[data-v-7bec554d]{transition:all .3s ease-in-out}.dropdown-enter[data-v-7bec554d],.dropdown-leave-to[data-v-7bec554d]{opacity:0}input[data-v-7bec554d]:focus,input[data-v-7bec554d]:visited,input[data-v-7bec554d]:focus-visible,input[data-v-7bec554d]:focus-within,input[data-v-7bec554d]:target{border-radius:var(--corner-med, 8px);border:1px solid var(--Info-03-Main, #449ff4)!important;background:var(--Grey-White, #fff);box-shadow:0 1px 2px #1a283517}.filter_modal[data-v-7bec554d]{position:absolute;display:flex;justify-content:center;align-items:center;top:0;left:0;z-index:1;width:100%;height:100%;border-radius:var(--horizontal-padding-lg, 12px);background:rgba(52,64,75,.1);p[data-v-7bec554d],ul[data-v-7bec554d],li[data-v-7bec554d] {margin: 0; padding: 0;} .filter_wrapper[data-v-7bec554d] {position: relative; display: flex; min-width: 425px; flex-direction: column; align-items: flex-start; border-radius: var(--horizontal-padding-lg, 12px); border: 1px solid var(--Grey-200, #e6e7e8); background: var(--Grey-White, #fff); box-shadow: 0px 1px 2px 0px rgba(26,40,53,.09); .filter_header[data-v-7bec554d] {position: sticky; top: 0; background: #fff; z-index: 9; display: flex; padding: var(--vertical-padding-lg, 24px) var(--vertical-padding-med, 20px) 16px var(--vertical-padding-med, 20px); border-top-left-radius: 12px; border-top-right-radius: 12px; align-items: flex-start; justify-content: space-between; gap: 10px; align-self: stretch; border-bottom: 1px solid var(--Grey-200, #e6e7e8); .filter_header_left[data-v-7bec554d] {display: flex; align-items: center; gap: var(--corner-med, 8px);} img[data-v-7bec554d] {width: var(--vertical-padding-med, 20px); height: var(--vertical-padding-med, 20px);} #close_button[data-v-7bec554d] {cursor: pointer;} .filter_header_text[data-v-7bec554d] {flex: 1 0 0; color: var(--Grey-800, #34404b); font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-overflow: ellipsis; overflow: hidden; width: 350px; white-space: nowrap;}} .filter_content[data-v-7bec554d] {display: flex; padding: var(--vertical-padding-lg, 24px); flex-direction: column; align-items: flex-start; gap: 32px; align-self: stretch; &.allow_scroll[data-v-7bec554d] {overflow-y: auto; overflow-x: hidden; scrollbar-gutter: stable both-edges; height: 60vh; padding: var(--vertical-padding-lg, 16px);} .filter_content_wrapper[data-v-7bec554d] {display: flex; flex-direction: column; align-items: flex-start; gap: 16px; align-self: stretch;} .filter_content_dropdown[data-v-7bec554d] {display: flex; flex-direction: column; align-items: flex-start; gap: 4px; align-self: stretch; .dropdown_title[data-v-7bec554d] {align-self: stretch; color: var(--Grey-800, #34404b); font-size: 14px; font-style: normal; font-weight: 500; line-height: 20px;} .dropdown_body_wrapper[data-v-7bec554d] {position: relative; width: 100%; .absolute_placehopder[data-v-7bec554d] {position: absolute; left: 13px; top: 10px; color: var(--Grey-600, #677078); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;} .arrow_button_wrapper[data-v-7bec554d] {position: absolute; display: flex; justify-content: center; align-items: center; right: 0%; top: 50%; transform: translate(-50%,-50%); width: 24px; height: 24px; flex-shrink: 0; cursor: pointer; &.we_have_error[data-v-7bec554d] {top: 32%;}} .arrow_button_wrapper svg[data-v-7bec554d] {transition: transform .3s ease;} .arrow_button_wrapper svg.rotated[data-v-7bec554d] {transform: rotate(180deg);} .dropdown_body[data-v-7bec554d] {display: flex; width: calc(100% - 24px); padding: 8px 12px; justify-content: space-between; align-items: center; align-self: stretch; border-radius: var(--corner-med, 8px); border: 1px solid var(--Grey-200, #e6e7e8); background: var(--Grey-White, #fff); box-shadow: 0px 1px 2px 0px rgba(26,40,53,.09); margin: 0; height: 30px; &.has_arrow[data-v-7bec554d] {padding-right: 36px; width: calc(100% - 50px);} color: var(--Grey-800, #34404b); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; &.second_one[data-v-7bec554d] {text-align: right;}} .dropdown_body[data-v-7bec554d]::placeholder {color: var(--Grey-800, #999fa5); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;} .dropdown_menu_wrapper[data-v-7bec554d] {position: absolute; width: 100%; border-radius: var(--corner-med, 10px); background: var(--Grey-White, #fff); border: 1px solid var(--Grey-200, #e6e7e8); box-shadow: 0px 1px 2px 0px rgba(26,40,53,.09); list-style: none; padding: 0; margin-top: 4px; max-height: 300px; overflow-y: auto; overflow-x: hidden; z-index: 10; &.align_center[data-v-7bec554d] {top: 50%; transform: translate(0px,-28%);} .dropdown_menu_item[data-v-7bec554d] {display: flex; padding: var(--corner-med, 8px) var(--horizontal-padding-lg, 12px); align-items: flex-start; align-self: stretch; cursor: pointer; white-space: pre-wrap !important; &.action[data-v-7bec554d] {display: flex; padding: 10px 14px 10px var(--horizontal-padding-lg, 12px); justify-content: space-between; align-items: center; align-self: stretch; background: var(--Grey-100, #f6f6f6);} color: var(--Grey-800, #34404b); font-size: 14px; font-style: normal; font-weight: 400; line-height: 20px; &[data-v-7bec554d]:not(:last-child) {border-bottom: 1px solid var(--Grey-200, #e6e7e8);} &.activeClass[data-v-7bec554d] {color: var(--Grey-800, #fff) !important; background: #03c191 !important;} &.inner_items[data-v-7bec554d] {display: flex; padding: var(--horizontal-padding-lg, 12px) var(--vertical-padding-lg, 24px); align-items: center; justify-content: space-between; align-self: stretch; font-weight: 600; line-height: 18px; transition: all .3s ease-in-out; &[data-v-7bec554d]:hover {background: #03c191; color: #fff; p[data-v-7bec554d] {color: #fff !important;} .help_icon_inner[data-v-7bec554d] {img[data-v-7bec554d] {filter: invert(100%);}}} .help_icon_inner[data-v-7bec554d] {display: flex; justify-content: center; align-items: center; height: 20px; transition: all .3s ease-in-out; img[data-v-7bec554d] {height: 16px; transition: all .3s ease-in-out;}}}} .dropdown_menu_item[data-v-7bec554d]:hover {background: #e6e7e8;}}}}}}}.filter_modal[data-v-7bec554d].full_screen[data-v-7bec554d]{position:fixed;top:0!important;left:0!important;width:100vw!important;height:100vh!important;display:flex!important;justify-content:center!important;align-items:center!important;background:rgba(31,32,34,.5)!important;border-radius:0}.filter_footer[data-v-7bec554d]{position:sticky;bottom:0;background:#fff;z-index:9;display:flex;padding:var(--horizontal-padding-lg, 12px) var(--vertical-padding-med, 20px);justify-content:flex-end;align-items:center;align-self:stretch;border-radius:0px 0px var(--horizontal-padding-lg, 12px) var(--horizontal-padding-lg, 12px);background:var(--Grey-White, #fff);border-top:1px solid #e6e7e8}.filter_footer[data-v-7bec554d] .footer_buttons[data-v-7bec554d]{display:flex;justify-content:space-between;align-items:center;flex:1 0 0}.filter_footer[data-v-7bec554d] .footer_buttons[data-v-7bec554d] .footer_button[data-v-7bec554d]{display:flex;padding:var(--Padding-Horizontal-padding, 6px) var(--Padding-Vertical-padding, 16px);align-items:flex-start;gap:10px;border-radius:var(--Padding-Corner, 6px);background:var(--Grey-200, #e6e7e8);box-shadow:0 1px 2px #1a283517;cursor:pointer}.filter_footer[data-v-7bec554d] .footer_buttons[data-v-7bec554d] .footer_button[data-v-7bec554d].disabled_me[data-v-7bec554d]{opacity:.5;cursor:not-allowed}.filter_footer[data-v-7bec554d] .footer_buttons[data-v-7bec554d] .footer_button[data-v-7bec554d] .footer_button_text[data-v-7bec554d]{color:var(--Grey-600, #677078);font-size:16px;font-style:normal;font-weight:600;line-height:26px}.filter_footer[data-v-7bec554d] .footer_buttons[data-v-7bec554d] .footer_button.primary_button .footer_button_text[data-v-7bec554d]{color:var(--Grey-White, #fff)}.filter_footer[data-v-7bec554d] .footer_buttons[data-v-7bec554d] .footer_button.primary_button[data-v-7bec554d]{background:var(--Primary-03-Main, #00936f)}.filter_footer[data-v-7bec554d] .button-group[data-v-7bec554d]{display:flex;border-radius:8px;overflow:hidden;border:1px solid #e6e7e8}.filter_footer[data-v-7bec554d] .button-group[data-v-7bec554d] .footer_button[data-v-7bec554d]{border-radius:0;background:transparent}.filter_footer[data-v-7bec554d] .button-group[data-v-7bec554d] .footer_button[data-v-7bec554d] .footer_button_text[data-v-7bec554d]{color:#34404b;font-size:14px}.color_red_for_delete[data-v-7bec554d]{background-color:tomato!important;transition:all .3s ease-in-out}.color_red_for_delete[data-v-7bec554d] .footer_button_text[data-v-7bec554d]{color:var(--Grey-White, #fff)!important}.color_red_for_delete[data-v-7bec554d][data-v-7bec554d]:hover{background-color:#b71e2d!important}.remove_action_wrapper[data-v-7bec554d]{display:flex;width:100%;align-items:center;justify-content:space-between}.condition_indicator[data-v-7bec554d]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:12px;margin-bottom:16px}.condition_indicator[data-v-7bec554d] .condition[data-v-7bec554d]{width:200px;height:1px;background:var(--Grey-200, #e6e7e8);position:relative;div[data-v-7bec554d] {display: inline-flex; padding: 4px var(--corner-med, 8px); justify-content: center; align-items: center; gap: 10px; background: var(--Grey-White, #fff); color: #34404b; font-weight: 900; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}}.error_message[data-v-7bec554d]{color:var(--Error-04-Dark, #b71e2d);font-size:14px;font-style:normal;font-weight:500;line-height:20px;margin-top:8px!important}.horizontal_line[data-v-7bec554d]{width:100%;height:1px;background:var(--Grey-200, #e6e7e8);margin-top:24px;margin-bottom:8px}.add_custom_filter_wrapper[data-v-7bec554d]{display:flex;justify-content:center;align-items:center;width:100%}.add_custom_filter_wrapper[data-v-7bec554d] .add_custom_filter[data-v-7bec554d]{display:flex;padding:var(--Padding-Horizontal-padding, 6px) var(--Padding-Vertical-padding, 16px);align-items:center;gap:4px;border-radius:var(--Padding-Corner, 6px);border:1px solid var(--Primary-03-Main, #00936f);box-shadow:0 1px 2px #1a283517;cursor:pointer}.add_custom_filter_wrapper[data-v-7bec554d] .add_custom_filter[data-v-7bec554d] .add_custom_filter_text[data-v-7bec554d]{color:var(--Primary-03-Main, #00936f);font-size:14px;font-style:normal;font-weight:600;line-height:18px}.remove_custom_filter[data-v-7bec554d]{display:flex;justify-content:flex-end;align-items:center;align-self:stretch}.remove_custom_filter[data-v-7bec554d] .remove_custom[data-v-7bec554d]{display:flex;align-items:center;gap:4px;padding:4px var(--corner-med, 8px);background:var(--Grey-White, #fff);cursor:pointer;p[data-v-7bec554d] {color: var(--Error-04-Dark, #b71e2d); font-family: Montserrat; font-size: 14px; font-style: normal; font-weight: 500; line-height: 20px;}}#accordion[data-v-7bec554d]{display:flex;flex-direction:column;max-height:1000px}#accordion[data-v-7bec554d] .content[data-v-7bec554d]{max-height:0;overflow:hidden;transition:max-height .5s ease-out;scrollbar-gutter:stable both-edges}#accordion label+input[type=checkbox]:checked+.content[data-v-7bec554d]{max-height:400px;overflow-y:auto;scrollbar-gutter:stable both-edges}#accordion input[type=checkbox]:checked+label[data-v-7bec554d]{transform:rotate(180deg)}#inner_arrow[data-v-7bec554d]{margin-right:2px}.loader_wrapper[data-v-7bec554d]{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0;z-index:999;pointer-events:none;background-color:#67707811}.disabled_me[data-v-7bec554d]{opacity:.5;cursor:not-allowed!important}.flex_us[data-v-7bec554d]{display:flex;gap:2px;align-items:center}[data-v-8301638f]{font-family:Montserrat;margin:0;padding:0;box-sizing:border-box}.heat_custom_filter_absolute[data-v-8301638f]{position:absolute;top:58px;left:0;z-index:9}.heat_custom_filter[data-v-8301638f]{position:relative;display:flex;min-width:612px;flex-direction:column;align-items:flex-start;border-radius:var(--horizontal-padding-lg, 12px);border:1px solid var(--Grey-200, #e6e7e8);background-color:var(--Grey-White, #fff);box-shadow:0 1px 2px #1a283517;p[data-v-8301638f],ul[data-v-8301638f],li[data-v-8301638f] {margin: 0; padding: 0;} .heat_custom_filter_body[data-v-8301638f] {display: flex; padding: var(--vertical-padding-lg, 24px) var(--vertical-padding-med, 20px) 16px var(--vertical-padding-med, 20px); flex-direction: column; align-items: flex-start; gap: var(--vertical-padding-lg, 24px); align-self: stretch; &.blur_me[data-v-8301638f] {opacity: .2;} .heat_custom_filter_header[data-v-8301638f] {display: flex; padding: 0px 6px; align-items: center; gap: var(--corner-med, 8px); align-self: stretch; border-radius: 4px; .heat_custom_filter_header_text[data-v-8301638f] {color: var(--Grey-800, #34404b); font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; padding: 8px 0px;}} .filter_body[data-v-8301638f] {display: flex; align-items: flex-start; gap: var(--vertical-padding-lg, 24px); align-self: stretch; .filter_body_column[data-v-8301638f] {display: flex; flex-direction: column; align-items: flex-start; gap: var(--corner-med, 8px); flex: 1 0 0; .filter_body_column_head[data-v-8301638f] {display: flex; padding: 0px 6px; align-items: center; gap: var(--corner-med, 8px); align-self: stretch; border-radius: 4px; .filter_body_column_head_text[data-v-8301638f] {flex: 1 0 0; color: var(--Primary-04-Dark, #016f52); font-size: 14px; font-style: normal; font-weight: 600; line-height: 18px;}} .filter_body_filters[data-v-8301638f] {display: flex; flex-direction: column; gap: 2px; align-items: flex-start; align-self: stretch; .filter_body_filter[data-v-8301638f] {position: relative; display: flex; padding: 10px 6px; align-items: center; gap: 8px; align-self: stretch; border-radius: 4px; list-style: none; cursor: pointer; transition: all .3s ease-in-out; .filter_image[data-v-8301638f] {transition: all .3s ease-in-out; height: 18px; width: 18px;} .edit_icon_wrapper[data-v-8301638f] {right: 8px; display: flex; justify-content: center; align-items: center; visibility: hidden; opacity: 0; padding: 4px; height: 18px; width: 24px; border-radius: 50%; z-index: 9; cursor: pointer; transition: all .3 ease-in-out; .edit_icon[data-v-8301638f] {height: 12px !important; transition: all .3 ease-in-out;}} &[data-v-8301638f]:hover {.edit_icon_wrapper[data-v-8301638f] {visibility: visible; opacity: 1; .edit_icon[data-v-8301638f] {border-radius: 20px;}} background-color: #e6e7e8;} .filter_body_filter_text[data-v-8301638f] {flex: 1 0 0; color: var(--Grey-800, #34404b); font-size: 12px; font-style: normal; font-weight: 500; line-height: 12px; transition: all .3s ease-in-out; text-overflow: ellipsis; overflow: hidden;} &.pendingClass[data-v-8301638f] {background-color: #ffffff; .filter_body_filter_text[data-v-8301638f] {color: #34404b;} .filter_image[data-v-8301638f] {height: 18px; width: 18px;} &[data-v-8301638f]:hover {background-color: #e6e7e8;}} &.activeClass[data-v-8301638f] {background-color: #03c191 !important; .filter_body_filter_text[data-v-8301638f] {color: #fff !important;} .filter_image[data-v-8301638f] {filter: invert(100%); height: 18px; width: 18px;}} &.disabled_me[data-v-8301638f] {background-color: transparent; cursor: not-allowed !important; .filter_body_filter_text[data-v-8301638f] {color: var(--Grey-500, #999fa5);}}} .add_custom_filter[data-v-8301638f] {display: flex; padding: 7px 6px; align-items: center; gap: 8px; height: 38px; align-self: stretch; border-radius: 4px; cursor: pointer; transition: all .3s ease-in-out; &[data-v-8301638f]:hover {background-color: #e6e7e8;} .add_custom_filter_text[data-v-8301638f] {color: var(--Grey-800, #34404b); font-size: 13px; font-style: normal; font-weight: 600; line-height: 18px; transition: all .3s ease-in-out;}}}}}} .heat_custom_filter_footer[data-v-8301638f] {display: flex; padding: 12px 20px; justify-content: space-between; align-items: center; align-self: stretch; border-radius: 0px 0px 12px 12px; border: 1px solid var(--Grey-200, #e6e7e8); background-color: var(--Grey-White, #fff); .left_button[data-v-8301638f] {display: flex; padding: var(--Padding-Horizontal-padding, 6px) var(--Padding-Vertical-padding, 16px); align-items: flex-start; gap: 10px; border-radius: var(--Padding-Corner, 6px); background-color: var(--Grey-100, #f6f6f6); box-shadow: 0px 1px 2px 0px rgba(26,40,53,.09); cursor: pointer; .left_button_text[data-v-8301638f] {color: var(--Grey-600, #677078); font-size: 16px; font-style: normal; font-weight: 600; line-height: 26px;}} .right_buttons[data-v-8301638f] {display: flex; align-items: center; gap: var(--horizontal-padding-lg, 12px);}} .right_button[data-v-8301638f] {display: flex; padding: var(--Padding-Horizontal-padding, 6px) var(--Padding-Vertical-padding, 16px); align-items: flex-start; gap: 10px; border-radius: var(--Padding-Corner, 6px); border: 1.5px solid var(--Primary-03-Main, #00936f); box-shadow: 0px 1px 2px 0px rgba(26,40,53,.09); cursor: pointer; &.not_clickable[data-v-8301638f] {cursor: auto !important;} &.new_color[data-v-8301638f] {background-color: var(--Primary-03-Main, #00936f); .right_button_text[data-v-8301638f] {color: var(--Grey-White, #fff);}} &.awaiting[data-v-8301638f] {background-color: var(--Grey-100, #f6f6f6); border: 1.5px solid var(--Primary-03-Main, #f6f6f6); padding: 6px 10px; .right_button_text[data-v-8301638f] {color: var(--Grey-White, #b3b7bc); font-size: 12px;}} &.insideCompare[data-v-8301638f] {padding: 6px 10px; .right_button_text[data-v-8301638f] {font-size: 12px; text-overflow: ellipsis; overflow: hidden; max-width: 160px; white-space: nowrap;}} .right_button_text[data-v-8301638f] {color: var(--Primary-03-Main, #00936f); font-size: 16px; font-style: normal; font-weight: 600; line-height: 26px;} &.disabled_me[data-v-8301638f] {opacity: .5; cursor: not-allowed;}} @keyframes radiating-8301638f {0% {transform: scale(.8);} 50% {transform: scale(1);} 100% {transform: scale(.8);}} @keyframes glowing-green-8301638f {0% {box-shadow: 0 0 10px #00ff00,0 0 20px #00ff00,0 0 30px #00ff00;} 50% {box-shadow: 0 0 20px #00ff00,0 0 30px #00ff00,0 0 40px #00ff00;} 100% {box-shadow: 0 0 10px #00ff00,0 0 20px #00ff00,0 0 30px #00ff00;}} .loader_wrapper.main_page[data-v-8301638f] {display: flex; justify-content: center; align-items: center; height: 100px; width: 100%; .loader[data-v-8301638f] {height: 40px !important; width: 40px !important; border-width: 4px !important;}}}[data-v-10918ac8]{font-family:Montserrat;margin:0;padding:0;box-sizing:border-box}.main_filter_button[data-v-10918ac8]{display:flex;width:max-content;padding:10px var(--corner-med, 8px);justify-content:center;align-items:center;gap:var(--corner-med, 8px);border-radius:10px;border:1px solid var(--Grey-200, #e6e7e8);background:var(--Grey-White, #fff);box-shadow:0 1px 2px #1a283517;cursor:pointer;p[data-v-10918ac8],ul[data-v-10918ac8],li[data-v-10918ac8] {margin: 0; padding: 0;} .main_filter_button_text[data-v-10918ac8] {color: var(--Grey-800, #34404b); font-size: 14px; font-style: normal; font-weight: 600; line-height: 20px; letter-spacing: -.05px;} .selected_filters[data-v-10918ac8] {display: flex; align-items: center; gap: 4px; .selected_filter[data-v-10918ac8] {display: flex; padding: 6px; align-items: center; justify-content: center; gap: var(--corner-med, 8px); border-radius: 4px; background: var(--Grey-100, #f6f6f6); .selected_filter_text[data-v-10918ac8] {flex: 1 0 0; color: var(--Grey-800, #34404b); font-size: 12px; font-style: normal; font-weight: 600; line-height: normal; text-overflow: ellipsis; overflow: hidden; max-width: 160px; white-space: nowrap;}}}}[data-v-475cd09a]{font-family:Montserrat;margin:0;padding:0;box-sizing:border-box}.main_filter_wrapper[data-v-475cd09a]{position:relative;width:max-content}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
(function (Me, e) {
  typeof exports == "object" && typeof module < "u"
    ? e(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], e)
    : ((Me = typeof globalThis < "u" ? globalThis : Me || self),
      e((Me.HeatmapFilter = {}), Me.Vue));
})(this, function (Me, e) {
  "use strict";
  const Le =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMzE2NzUgMTFMNy45OTk5NSA3LjMxNjg0TDcuMDk5OTUgNi40MTY4NEw0LjMxNjc1IDkuMjAwMDRMMi45NjYzNSA3LjgzMzY0TDIuMDQ5NTUgOC43MzM2NEw0LjMxNjc1IDExWk0xLjM5OTk1IDEzLjRDMS4wNjY2MiAxMy40IDAuNzgzNDE4IDEzLjI4MzIgMC41NTAzNTEgMTMuMDQ5NkMwLjMxNjc1MSAxMi44MTY2IDAuMTk5OTUxIDEyLjUzMzQgMC4xOTk5NTEgMTIuMlYxLjgwMDA0QzAuMTk5OTUxIDEuNDY2NyAwLjMxNjc1MSAxLjE4MzUgMC41NTAzNTEgMC45NTA0MzdDMC43ODM0MTggMC43MTY4MzcgMS4wNjY2MiAwLjYwMDAzNyAxLjM5OTk1IDAuNjAwMDM3SDYuNTk5OTVMOS43OTk5NSAzLjgwMDA0VjEyLjJDOS43OTk5NSAxMi41MzM0IDkuNjgzMTUgMTIuODE2NiA5LjQ0OTU1IDEzLjA0OTZDOS4yMTY0OCAxMy4yODMyIDguOTMzMjggMTMuNCA4LjU5OTk1IDEzLjRIMS4zOTk5NVpNNS43OTk5NSA0LjYwMDA0VjEuODAwMDRIMS4zOTk5NVYxMi4ySDguNTk5OTVWNC42MDAwNEg1Ljc5OTk1WiIgZmlsbD0iIzFDMUIxRiIvPgo8L3N2Zz4K",
    xe =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTUuMjUwMVYxOS4wMDAxSDMuNzVMMTQuODEgNy45NDAwNkwxMS4wNiA0LjE5MDA2TDAgMTUuMjUwMVpNMTcuNzEgNS4wNDAwNkMxOC4xIDQuNjUwMDYgMTguMSA0LjAyMDA2IDE3LjcxIDMuNjMwMDZMMTUuMzcgMS4yOTAwNkMxNC45OCAwLjkwMDA1OSAxNC4zNSAwLjkwMDA1OSAxMy45NiAxLjI5MDA2TDEyLjEzIDMuMTIwMDZMMTUuODggNi44NzAwNkwxNy43MSA1LjA0MDA2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==",
    Ke = e.defineComponent({
      props: [],
      components: {},
      data() {
        return {};
      },
      methods: {},
    }),
    bn = "",
    ne = (l, d) => {
      const A = l.__vccOpts || l;
      for (const [r, I] of d) A[r] = I;
      return A;
    },
    Xe = { class: "loader" };
  function et(l, d, A, r, I, n) {
    return e.openBlock(), e.createElementBlock("div", Xe);
  }
  const Ce = ne(Ke, [
      ["render", et],
      ["__scopeId", "data-v-3942cef3"],
    ]),
    tt = e.defineComponent({
      props: ["isDropdownOpen", "id"],
      components: {},
      data() {
        return {};
      },
      methods: {},
    }),
    Mt = ["id"],
    nt = [
      e.createElementVNode(
        "path",
        {
          d: "M1.89062 1L7.7519 6.82487C7.8494 6.92177 8.00685 6.92177 8.10435 6.82487L13.9656 1",
          stroke: "#34404B",
          "stroke-width": "2",
          "stroke-linecap": "round",
        },
        null,
        -1
      ),
    ];
  function at(l, d, A, r, I, n) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "svg",
        {
          id: l.id,
          xmlns: "http://www.w3.org/2000/svg",
          width: "15",
          height: "8",
          viewBox: "0 0 15 8",
          fill: "none",
          class: e.normalizeClass({ rotated: l.isDropdownOpen }),
        },
        nt,
        10,
        Mt
      )
    );
  }
  const ze = ne(tt, [["render", at]]),
    it = e.defineComponent({
      props: ["onClick"],
      components: {},
      data() {
        return {};
      },
      methods: {},
    }),
    ot = [
      e.createElementVNode(
        "path",
        {
          d: "M15 5L5 15",
          stroke: "#677078",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        },
        null,
        -1
      ),
      e.createElementVNode(
        "path",
        {
          d: "M5 5L15 15",
          stroke: "#677078",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        },
        null,
        -1
      ),
    ];
  function st(l, d, A, r, I, n) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "svg",
        {
          id: "close_button",
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          onClick: d[0] || (d[0] = (B) => l.onClick()),
        },
        ot
      )
    );
  }
  const lt = ne(it, [["render", st]]),
    rt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjg3MTYgMTQuNjA0MkMxMC44MzM1IDE0LjYwNDIgMTAuODAyNyAxNC41NzM0IDEwLjgwMjcgMTQuNTM1NEMxMC44MTE4IDEzLjgwNSAxMC45MDI1IDEzLjIyMzcgMTEuMDc0OCAxMi43OTE2QzExLjI0NzIgMTIuMzU5NSAxMS40OTIxIDEyLjAwOTYgMTEuODA5NSAxMS43NDE5QzEyLjEyNyAxMS40NzQyIDEyLjUwNzkgMTEuMjI3NSAxMi45NTI0IDExLjAwMTlDMTMuMjIgMTAuODY0MiAxMy40NjAzIDEwLjcwMTcgMTMuNjczNSAxMC41MTQzQzEzLjg4NjYgMTAuMzIzMSAxNC4wNTQ0IDEwLjEwMzMgMTQuMTc2OSA5Ljg1NDY4QzE0LjMwMzkgOS42MDYxMiAxNC4zNjczIDkuMzMwNzggMTQuMzY3MyA5LjAyODY4QzE0LjM2NzMgOC42NTM5MiAxNC4yNjMgOC4zMjg4NyAxNC4wNTQ0IDguMDUzNTRDMTMuODQ1OCA3Ljc3ODIgMTMuNTY2OSA3LjU2NTk3IDEzLjIxNzcgNy40MTY4M0MxMi44Njg1IDcuMjY3NjkgMTIuNDgwNyA3LjE5MzEyIDEyLjA1NDQgNy4xOTMxMkMxMS42ODI1IDcuMTkzMTIgMTEuMzI0MyA3LjI1ODEzIDEwLjk3OTYgNy4zODgxNUMxMC42MzQ5IDcuNTE4MTYgMTAuMzQ2OSA3LjcyMjc1IDEwLjExNTYgOC4wMDE5MUMxMC4wMzQ2IDguMDk5NzUgOS45NjU0OSA4LjIwODE2IDkuOTA4MzggOC4zMjcxNUM5LjcxMzEzIDguNzMzOTMgOS4zNjY2IDkuMDk3NTEgOC45MTUzOCA5LjA5NzUxQzguNDE4MyA5LjA5NzUxIDguMDA3MzkgOC42NzAzNiA4LjE3MzU3IDguMjAxODhDOC4yNzM1NCA3LjkyMDA4IDguNDE1MjMgNy42NjIyMiA4LjU5ODY0IDcuNDI4M0M4Ljk2NTk5IDYuOTY1NTggOS40NDg5OCA2LjYxMTg1IDEwLjA0NzYgNi4zNjcxMUMxMC42NTA4IDYuMTIyMzcgMTEuMzE5NyA2IDEyLjA1NDQgNkMxMi44NTI2IDYgMTMuNTQ2NSA2LjEzMzg0IDE0LjEzNjEgNi40MDE1M0MxNC43MzAyIDYuNjY5MjIgMTUuMTg4MiA3LjAzNjMzIDE1LjUxMDIgNy41MDI4N0MxNS44MzY3IDcuOTY5NDEgMTYgOC41MDA5NiAxNiA5LjA5NzUxQzE2IDkuNTE4MTYgMTUuOTIyOSA5Ljg5ODY2IDE1Ljc2ODcgMTAuMjM5QzE1LjYxOSAxMC41NzkzIDE1LjQwMTQgMTAuODgzNCAxNS4xMTU2IDExLjE1MTFDMTQuODM0NSAxMS40MTg3IDE0LjQ5NDMgMTEuNjU1OCAxNC4wOTUyIDExLjg2MjNDMTMuNjk2MSAxMi4wNzI3IDEzLjM3NjQgMTIuMjk0NSAxMy4xMzYxIDEyLjUyNzdDMTIuODk1NyAxMi43NTcyIDEyLjcyMTEgMTMuMDMwNiAxMi42MTIyIDEzLjM0OEMxMi41MDM0IDEzLjY2NTQgMTIuNDQ0NCAxNC4wNjEyIDEyLjQzNTQgMTQuNTM1NEMxMi40MzU0IDE0LjU3MzQgMTIuNDA0NiAxNC42MDQyIDEyLjM2NjUgMTQuNjA0MkgxMC44NzE2Wk0xMS42NzM1IDE4QzExLjMzNzkgMTggMTEuMDQ5OSAxNy44OTg3IDEwLjgwOTUgMTcuNjk2QzEwLjU2OTIgMTcuNDkzMyAxMC40NDkgMTcuMjUwNSAxMC40NDkgMTYuOTY3NUMxMC40NDkgMTYuNjg0NSAxMC41NjkyIDE2LjQ0MTcgMTAuODA5NSAxNi4yMzlDMTEuMDQ5OSAxNi4wMzYzIDExLjMzNzkgMTUuOTM1IDExLjY3MzUgMTUuOTM1QzEyLjAwOTEgMTUuOTM1IDEyLjI5NzEgMTYuMDM2MyAxMi41Mzc0IDE2LjIzOUMxMi43Nzc4IDE2LjQ0MTcgMTIuODk4IDE2LjY4NDUgMTIuODk4IDE2Ljk2NzVDMTIuODk4IDE3LjE1NDkgMTIuODQxMyAxNy4zMjcgMTIuNzI3OSAxNy40ODM3QzEyLjYxOSAxNy42NDA1IDEyLjQ3MTcgMTcuNzY2NyAxMi4yODU3IDE3Ljg2MjNDMTIuMTA0MyAxNy45NTQxIDExLjkwMDIgMTggMTEuNjczNSAxOFoiIGZpbGw9IiMxQTI4MzUiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iIzFBMjgzNSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg==",
    Nt = ["Equal To", "Less Than", "Greater Than"];
  function ct(l, d) {
    let A = !1;
    if (
      (Dt(d == null ? void 0 : d.name) &&
        ((A = !!l[0].default),
        (l[0].conditionError = !A),
        A
          ? (l[0].conditionErrorMsg = "")
          : ((l[0].conditionErrorMsg = "Referrer URL is Required"),
            (d == null ? void 0 : d.name) === "Total Pages Visited" &&
              (l[0].conditionErrorMsg =
                "Please enter Number of visits (number)"),
            (d == null ? void 0 : d.name) === "Viewed Page" &&
              (l[0].conditionErrorMsg = "Action URL is Required"))),
      (d == null ? void 0 : d.name) === "Session Tag")
    ) {
      const r = !!l[0].default,
        I = !!l[0].value;
      (A = r && I),
        (l[0].conditionError = !r),
        (l[0].valueError = !I),
        A ||
          (r
            ? (l[0].conditionErrorMsg = "")
            : (l[0].conditionErrorMsg = "Please select a Session Tag Name"),
          I
            ? (l[0].valueErrorMsg = "")
            : (l[0].valueErrorMsg = "Please select a Tag Value(s)"));
    }
    if ((d == null ? void 0 : d.name) === "Partners") {
      const r = !!l[0].default,
        I = !!l[0].value;
      (A = r && I),
        (l[0].conditionError = !r),
        (l[0].valueError = !I),
        A ||
          (r
            ? (l[0].conditionErrorMsg = "")
            : (l[0].conditionErrorMsg = "Please select a Partners Name"),
          I
            ? (l[0].valueErrorMsg = "")
            : (l[0].valueErrorMsg = "Please select an Experiment"));
    }
    if ((d == null ? void 0 : d.name) === "Average Order Value") {
      const r = Nt.includes(l[0].default),
        I = !!l[0].value;
      (A = r && I),
        (l[0].conditionError = !r),
        (l[0].valueError = !I),
        A ||
          (r
            ? (l[0].conditionErrorMsg = "")
            : (l[0].conditionErrorMsg = "Please select a Condition"),
          I
            ? (l[0].valueErrorMsg = "")
            : (l[0].valueErrorMsg = "Please enter a Value"));
    }
    return (
      (d == null ? void 0 : d.name) === "Create Custom Filter" &&
        (l.forEach((r) => {
          (r.conditionError = !1),
            (r.actionError = !1),
            (r.valueError = !1),
            (r.conditionErrorMsg = ""),
            (r.actionErrorMsg = ""),
            (r.valueErrorMsg = ""),
            r.default ||
              ((r.conditionError = !0),
              (r.conditionErrorMsg = "Please select an Condition")),
            r.segment ||
              ((r.actionError = !0),
              (r.actionErrorMsg = "Please select an Action")),
            (r.value === "" || r.value === null || r.value === void 0) &&
              ((r.valueError = !0), (r.valueErrorMsg = "Value is required"));
        }),
        (A = l.every(
          (r) =>
            r.segment !== null &&
            r.segment !== void 0 &&
            r.segment !== "" &&
            r.default !== "" &&
            r.value !== "" &&
            r.value !== null &&
            r.value !== void 0
        ))),
      A
    );
  }
  const Dt = (l) =>
      [
        "Entry Page",
        "Traffic Source",
        "Total Pages Visited",
        "Viewed Page",
      ].includes(l || ""),
    gt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzU3OF81Nzc4IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiNEOUQ5RDkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzU3OF81Nzc4KSI+CjxwYXRoIGQ9Ik0yLjQwMDE1IDEzLjZWMTIuNEgxMy42MDAxVjEzLjZIMi40MDAxNVpNMTIuMjY2NSAxMC4zNjY0TDIuNDAwMTUgNy42MTY4NFY0LjAwMDA0TDMuMzMzNzUgNC4zMTY4NEwzLjgzMzc1IDUuODMzNjRMNi40MDAxNSA2LjU1MDQ0VjEuNjAwMDRMNy42NDk3NSAyLjAwMDA0TDkuNDAwMTUgNy40MDAwNEwxMi44MzM3IDguMzUwNDRDMTMuMDU1NiA4LjQwNTkgMTMuMjM4OCA4LjUyODA0IDEzLjM4MzMgOC43MTY4NEMxMy41Mjc5IDguOTA1NjQgMTMuNjAwMSA5LjExNjg0IDEzLjYwMDEgOS4zNTA0NEMxMy42MDAxIDkuNzA1NjQgMTMuNDYxMiA5Ljk4ODg0IDEzLjE4MzMgMTAuMkMxMi45MDU1IDEwLjQxMTIgMTIuNTk5OSAxMC40NjY3IDEyLjI2NjUgMTAuMzY2NFoiIGZpbGw9IiMxQzFCMUYiLz4KPC9nPgo8L3N2Zz4K",
    ut =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuOTk5ODUgMTMuNEM2LjEyMTk5IDEzLjQgNS4yOTQyNSAxMy4yMzM0IDQuNTE2NjUgMTIuOUMzLjczOTA1IDEyLjU2NjcgMy4wNTg1MiAxMi4xMDgzIDIuNDc1MDUgMTEuNTI0OEMxLjg5MTU5IDEwLjk0MTQgMS40MzMxOSAxMC4yNjA4IDEuMDk5ODUgOS40ODMyNEMwLjc2NjUyIDguNzA1NjQgMC41OTk4NTQgNy44Nzc5IDAuNTk5ODU0IDcuMDAwMDRDMC41OTk4NTQgNi4xMTA5NyAwLjc2NjUyIDUuMjgwMyAxLjA5OTg1IDQuNTA4MDRDMS40MzMxOSAzLjczNjMgMS44OTE1OSAzLjA1ODcgMi40NzUwNSAyLjQ3NTI0QzMuMDU4NTIgMS44OTE3NyAzLjczOTA1IDEuNDMzMzcgNC41MTY2NSAxLjEwMDA0QzUuMjk0MjUgMC43NjY3MDMgNi4xMjE5OSAwLjYwMDAzNyA2Ljk5OTg1IDAuNjAwMDM3SDcuNTk5ODVWNS45NjY0NEM3Ljc4ODY1IDYuMDY2NyA3LjkzNTg1IDYuMjA4NTcgOC4wNDE0NSA2LjM5MjA0QzguMTQ3MDUgNi41NzQ5NyA4LjE5OTg1IDYuNzc3NjQgOC4xOTk4NSA3LjAwMDA0QzguMTk5ODUgNy4zMzMzNyA4LjA4MzA1IDcuNjE2NTcgNy44NDk0NSA3Ljg0OTY0QzcuNjE2MzkgOC4wODMyNCA3LjMzMzE5IDguMjAwMDQgNi45OTk4NSA4LjIwMDA0QzYuNjY2NTIgOC4yMDAwNCA2LjM4MzMyIDguMDgzMjQgNi4xNTAyNSA3Ljg0OTY0QzUuOTE2NjUgNy42MTY1NyA1Ljc5OTg1IDcuMzMzMzcgNS43OTk4NSA3LjAwMDA0QzUuNzk5ODUgNi43Nzc2NCA1Ljg1MjY1IDYuNTc0OTcgNS45NTgyNSA2LjM5MjA0QzYuMDYzODUgNi4yMDg1NyA2LjIxMTA1IDYuMDY2NyA2LjM5OTg1IDUuOTY2NDRWNC4yNjY0NEM1Ljc2NjI1IDQuMzk5NzcgNS4yNDExOSA0LjcyMjE3IDQuODI0NjUgNS4yMzM2NEM0LjQwODEyIDUuNzQ0NTcgNC4xOTk4NSA2LjMzMzM3IDQuMTk5ODUgNy4wMDAwNEM0LjE5OTg1IDcuNzc3NjQgNC40NzIxMiA4LjQzODcgNS4wMTY2NSA4Ljk4MzI0QzUuNTYxMTkgOS41Mjc3NyA2LjIyMjI1IDkuODAwMDQgNi45OTk4NSA5LjgwMDA0QzcuNzc3NDUgOS44MDAwNCA4LjQzODUyIDkuNTI3NzcgOC45ODMwNSA4Ljk4MzI0QzkuNTI3NTkgOC40Mzg3IDkuNzk5ODUgNy43Nzc2NCA5Ljc5OTg1IDcuMDAwMDRDOS43OTk4NSA2LjYxMTI0IDkuNzI3NTkgNi4yNDcyNCA5LjU4MzA1IDUuOTA4MDRDOS40Mzg1MiA1LjU2OTM3IDkuMjM4NTIgNS4yNzIzIDguOTgzMDUgNS4wMTY4NEw5LjgzMzQ1IDQuMTY2NDRDMTAuMTg4NyA0LjUzMzM3IDEwLjQ3MTkgNC45NTg0NCAxMC42ODMxIDUuNDQxNjRDMTAuODk0MyA1LjkyNDg0IDEwLjk5OTkgNi40NDQzIDEwLjk5OTkgNy4wMDAwNEMxMC45OTk5IDguMTEwOTcgMTAuNjExMSA5LjA1NTUgOS44MzM0NSA5LjgzMzY0QzkuMDU1MzIgMTAuNjExMiA4LjExMDc5IDExIDYuOTk5ODUgMTFDNS44ODg5MiAxMSA0Ljk0NDM5IDEwLjYxMTIgNC4xNjYyNSA5LjgzMzY0QzMuMzg4NjUgOS4wNTU1IDIuOTk5ODUgOC4xMTA5NyAyLjk5OTg1IDcuMDAwMDRDMi45OTk4NSA1Ljk4ODg0IDMuMzI0OTIgNS4xMTY1NyAzLjk3NTA1IDQuMzgzMjRDNC42MjUxOSAzLjY0OTkgNS40MzM0NSAzLjIxMDk3IDYuMzk5ODUgMy4wNjY0NFYxLjgzMzY0QzUuMDk5NTkgMS45ODg4NCA0LjAwNzg1IDIuNTUyNTcgMy4xMjQ2NSAzLjUyNDg0QzIuMjQxNDUgNC40OTcxIDEuNzk5ODUgNS42NTU1IDEuNzk5ODUgNy4wMDAwNEMxLjc5OTg1IDguNDQ0MyAyLjMwNTQ1IDkuNjcyMDQgMy4zMTY2NSAxMC42ODMyQzQuMzI3ODUgMTEuNjk0NCA1LjU1NTU5IDEyLjIgNi45OTk4NSAxMi4yQzguNDQ0MTIgMTIuMiA5LjY3MTg1IDExLjY5NDQgMTAuNjgzMSAxMC42ODMyQzExLjY5NDMgOS42NzIwNCAxMi4xOTk5IDguNDQ0MyAxMi4xOTk5IDcuMDAwMDRDMTIuMTk5OSA2LjI3NzkgMTIuMDY2NSA1LjYwMjk3IDExLjc5OTkgNC45NzUyNEMxMS41MzMyIDQuMzQ3NSAxMS4xNjA5IDMuNzk0NyAxMC42ODMxIDMuMzE2ODRMMTEuNTMzNSAyLjQ2NjQ0QzEyLjExMTEgMy4wNTU3NyAxMi41NjY1IDMuNzM2MyAxMi44OTk5IDQuNTA4MDRDMTMuMjMzMiA1LjI4MDMgMTMuMzk5OSA2LjExMDk3IDEzLjM5OTkgNy4wMDAwNEMxMy4zOTk5IDcuODc3OSAxMy4yMzMyIDguNzA1NjQgMTIuODk5OSA5LjQ4MzI0QzEyLjU2NjUgMTAuMjYwOCAxMi4xMDgxIDEwLjk0MTQgMTEuNTI0NyAxMS41MjQ4QzEwLjk0MTIgMTIuMTA4MyAxMC4yNjM2IDEyLjU2NjcgOS40OTE4NSAxMi45QzguNzE5NTkgMTMuMjMzNCA3Ljg4ODkyIDEzLjQgNi45OTk4NSAxMy40WiIgZmlsbD0iIzFDMUIxRiIvPgo8L3N2Zz4K",
    dt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNDAwMTUgOS44MDAwMUwyLjkwMDE1IDcuODAwMDFIMC40MDAxNDZMMC43MDAxNDYgNi42MDAwMUgzLjIwMDE1TDMuOTAwMTUgMy44MDAwMUgxLjIwMDE1TDEuNTAwMTUgMi42MDAwMUg0LjIwMDE1TDQuODAwMTUgMC4yMDAwMTJINi4wMDAxNUw1LjQwMDE1IDIuNjAwMDFINy44MDAxNUw4LjQwMDE1IDAuMjAwMDEySDkuNjAwMTVMOS4wMDAxNSAyLjYwMDAxSDExLjYwMDFMMTEuMzAwMSAzLjgwMDAxSDguNzAwMTVMOC4wMDAxNSA2LjYwMDAxSDEwLjgwMDFMMTAuNTAwMSA3LjgwMDAxSDcuNzAwMTVMNy4yMDAxNSA5LjgwMDAxSDYuMDAwMTVMNi41MDAxNSA3LjgwMDAxSDQuMTAwMTVMMy42MDAxNSA5LjgwMDAxSDIuNDAwMTVaTTQuNDAwMTUgNi42MDAwMUg2LjgwMDE1TDcuNTAwMTUgMy44MDAwMUg1LjEwMDE1TDQuNDAwMTUgNi42MDAwMVoiIGZpbGw9IiMxQzFCMUYiLz4KPC9zdmc+Cg==",
    jt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNTk5ODU0IDkuODAwMDFWOC4yNjY0MUMwLjU5OTg1NCA3Ljk3Nzg4IDAuNjY5MTg3IDcuNzE0MTUgMC44MDc4NTQgNy40NzUyMUMwLjk0NzA1NCA3LjIzNjI4IDEuMTM4NzkgNy4wNDQ1NSAxLjM4MzA1IDYuOTAwMDFDMS45ODMwNSA2LjU0NDI4IDIuNjE5MzIgNi4yNzIwMSAzLjI5MTg1IDYuMDgzMjFDMy45NjM4NSA1Ljg5NDQxIDQuNjY2NTIgNS44MDAwMSA1LjM5OTg1IDUuODAwMDFDNi4xMzMxOSA1LjgwMDAxIDYuODM1ODUgNS44OTQ0MSA3LjUwNzg1IDYuMDgzMjFDOC4xODAzOSA2LjI3MjAxIDguODE2NjUgNi41NDQyOCA5LjQxNjY1IDYuOTAwMDFDOS42NjA5MiA3LjA0NDU1IDkuODUyNjUgNy4yMzYyOCA5Ljk5MTg1IDcuNDc1MjFDMTAuMTMwNSA3LjcxNDE1IDEwLjE5OTkgNy45Nzc4OCAxMC4xOTk5IDguMjY2NDFWOS44MDAwMUgwLjU5OTg1NFpNMTEuMzk5OSA5LjgwMDAxVjguMjY2NDFDMTEuMzk5OSA3Ljc5OTc1IDExLjI5MTYgNy4zNjY0MSAxMS4wNzUxIDYuOTY2NDFDMTAuODU4NSA2LjU2NjQxIDEwLjU2NjggNi4yMzg2OCAxMC4xOTk5IDUuOTgzMjFDMTAuNjMyOSA2LjA3MjI4IDExLjA1MjQgNi4xOTE3NSAxMS40NTgzIDYuMzQxNjFDMTEuODYzNiA2LjQ5MTQ4IDEyLjI0OTcgNi42Nzc2MSAxMi42MTY3IDYuOTAwMDFDMTIuODYwOSA3LjA0NDU1IDEzLjA1MjcgNy4yMzYyOCAxMy4xOTE5IDcuNDc1MjFDMTMuMzMwNSA3LjcxNDE1IDEzLjM5OTkgNy45Nzc4OCAxMy4zOTk5IDguMjY2NDFWOS44MDAwMUgxMS4zOTk5Wk01LjM5OTg1IDUuMDAwMDFDNC43MzMxOSA1LjAwMDAxIDQuMTY2NTIgNC43NjY2OCAzLjY5OTg1IDQuMzAwMDFDMy4yMzMxOSAzLjgzMzM1IDIuOTk5ODUgMy4yNjY2OCAyLjk5OTg1IDIuNjAwMDFDMi45OTk4NSAxLjkzMzM1IDMuMjMzMTkgMS4zNjY2OCAzLjY5OTg1IDAuOTAwMDEyQzQuMTY2NTIgMC40MzMzNDYgNC43MzMxOSAwLjIwMDAxMiA1LjM5OTg1IDAuMjAwMDEyQzYuMDY2NTIgMC4yMDAwMTIgNi42MzMxOSAwLjQzMzM0NiA3LjA5OTg1IDAuOTAwMDEyQzcuNTY2NTIgMS4zNjY2OCA3Ljc5OTg1IDEuOTMzMzUgNy43OTk4NSAyLjYwMDAxQzcuNzk5ODUgMy4yNjY2OCA3LjU2NjUyIDMuODMzMzUgNy4wOTk4NSA0LjMwMDAxQzYuNjMzMTkgNC43NjY2OCA2LjA2NjUyIDUuMDAwMDEgNS4zOTk4NSA1LjAwMDAxWk0xMC45OTk5IDIuNjAwMDFDMTAuOTk5OSAzLjI2NjY4IDEwLjc2NjUgMy44MzMzNSAxMC4yOTk5IDQuMzAwMDFDOS44MzMxOSA0Ljc2NjY4IDkuMjY2NTIgNS4wMDAwMSA4LjU5OTg1IDUuMDAwMDFDOC41MTA3OSA1LjAwMDAxIDguNDI3NTkgNC45OTczNCA4LjM1MDI1IDQuOTkyMDFDOC4yNzIzOSA0Ljk4NjE1IDguMTg4OTIgNC45NzIyOCA4LjA5OTg1IDQuOTUwNDFDOC4zNzc3MiA0LjYyNzc1IDguNTk3MTkgNC4yNjkzNSA4Ljc1ODI1IDMuODc1MjFDOC45MTkzMiAzLjQ4MDU1IDguOTk5ODUgMy4wNTU0OCA4Ljk5OTg1IDIuNjAwMDFDOC45OTk4NSAyLjE0NDU1IDguOTE5MzIgMS43MTk0OCA4Ljc1ODI1IDEuMzI0ODFDOC41OTcxOSAwLjkzMDY3OSA4LjM3NzcyIDAuNTcyMjc5IDguMDk5ODUgMC4yNDk2MTJDOC4xODg5MiAwLjIyNzc0NSA4LjI3MjM5IDAuMjEzODc5IDguMzUwMjUgMC4yMDgwMTJDOC40Mjc1OSAwLjIwMjY3OSA4LjUxMDc5IDAuMjAwMDEyIDguNTk5ODUgMC4yMDAwMTJDOS4yNjY1MiAwLjIwMDAxMiA5LjgzMzE5IDAuNDMzMzQ2IDEwLjI5OTkgMC45MDAwMTJDMTAuNzY2NSAxLjM2NjY4IDEwLjk5OTkgMS45MzMzNSAxMC45OTk5IDIuNjAwMDFaTTEuNzk5ODUgOC42MDAwMUg4Ljk5OTg1VjguMjY2NDFDOC45OTk4NSA4LjE5OTc1IDguOTgzMzIgOC4xMzYwMSA4Ljk1MDI1IDguMDc1MjFDOC45MTY2NSA4LjAxMzg4IDguODcyMTIgNy45NjY2OCA4LjgxNjY1IDcuOTMzNjFDOC4yOTQ1MiA3LjYzMzM1IDcuNzQ0MzkgNy40MDI2OCA3LjE2NjI1IDcuMjQxNjFDNi41ODg2NSA3LjA4MDU0IDUuOTk5ODUgNy4wMDAwMSA1LjM5OTg1IDcuMDAwMDFDNC43OTk4NSA3LjAwMDAxIDQuMjExMDUgNy4wNzc4OCAzLjYzMzQ1IDcuMjMzNjFDMy4wNTUzMiA3LjM4ODgxIDIuNTA1MTkgNy42MjIxNSAxLjk4MzA1IDcuOTMzNjFDMS45Mjc1OSA3Ljk2NjY4IDEuODgzMDUgOC4wMTA5NSAxLjg0OTQ1IDguMDY2NDFDMS44MTYzOSA4LjEyMjQxIDEuNzk5ODUgOC4xODkwOCAxLjc5OTg1IDguMjY2NDFWOC42MDAwMVpNNS4zOTk4NSAzLjgwMDAxQzUuNzMzMTkgMy44MDAwMSA2LjAxNjM5IDMuNjgzMjEgNi4yNDk0NSAzLjQ0OTYxQzYuNDgzMDUgMy4yMTY1NSA2LjU5OTg1IDIuOTMzMzUgNi41OTk4NSAyLjYwMDAxQzYuNTk5ODUgMi4yNjY2OCA2LjQ4MzA1IDEuOTgzNDggNi4yNDk0NSAxLjc1MDQxQzYuMDE2MzkgMS41MTY4MSA1LjczMzE5IDEuNDAwMDEgNS4zOTk4NSAxLjQwMDAxQzUuMDY2NTIgMS40MDAwMSA0Ljc4MzMyIDEuNTE2ODEgNC41NTAyNSAxLjc1MDQxQzQuMzE2NjUgMS45ODM0OCA0LjE5OTg1IDIuMjY2NjggNC4xOTk4NSAyLjYwMDAxQzQuMTk5ODUgMi45MzMzNSA0LjMxNjY1IDMuMjE2NTUgNC41NTAyNSAzLjQ0OTYxQzQuNzgzMzIgMy42ODMyMSA1LjA2NjUyIDMuODAwMDEgNS4zOTk4NSAzLjgwMDAxWiIgZmlsbD0iIzFDMUIxRiIvPgo8L3N2Zz4K",
    At =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSA0Ljk1MDQxQzcuNzg5MDcgNC42MTY1NSA4LjAxMTIgNC4yNDk2MSA4LjE2NjQgMy44NDk2MUM4LjMyMjEzIDMuNDQ5NjEgOC40IDMuMDMzMDggOC40IDIuNjAwMDFDOC40IDIuMTc3NjEgOC4zMjIxMyAxLjc2NjQxIDguMTY2NCAxLjM2NjQxQzguMDExMiAwLjk2NjQxMiA3Ljc4OTA3IDAuNTk0MTQ1IDcuNSAwLjI0OTYxMkM3LjU4OTA3IDAuMjI3NzQ1IDcuNjcyNTMgMC4yMTM4NzkgNy43NTA0IDAuMjA4MDEyQzcuODI3NzMgMC4yMDI2NzkgNy45MTA5MyAwLjIwMDAxMiA4IDAuMjAwMDEyQzguNjY2NjcgMC4yMDAwMTIgOS4yMzMzMyAwLjQzMzM0NiA5LjcgMC45MDAwMTJDMTAuMTY2NyAxLjM2NjY4IDEwLjQgMS45MzMzNSAxMC40IDIuNjAwMDFDMTAuNCAzLjI2NjY4IDEwLjE2NjcgMy44MzMzNSA5LjcgNC4zMDAwMUM5LjIzMzMzIDQuNzY2NjggOC42NjY2NyA1LjAwMDAxIDggNS4wMDAwMUM3LjkxMDkzIDUuMDAwMDEgNy44MjQ4IDQuOTk3MzQgNy43NDE2IDQuOTkyMDFDNy42NTg0IDQuOTg2MTUgNy41Nzc4NyA0Ljk3MjI4IDcuNSA0Ljk1MDQxWk0xMC44IDkuODAwMDFWOC4yNjY0MUMxMC44IDcuODEwOTUgMTAuNjk0NCA3LjM4NjE1IDEwLjQ4MzIgNi45OTIwMUMxMC4yNzIgNi41OTczNCA5Ljk3NzYgNi4yNjEwOCA5LjYgNS45ODMyMUMxMC4zNTU3IDYuMTYwODEgMTEuMDc3OSA2LjQwNTM0IDExLjc2NjQgNi43MTY4MUMxMi40NTU1IDcuMDI3NzUgMTIuOCA3LjU0NDI4IDEyLjggOC4yNjY0MVY5LjgwMDAxSDEwLjhaTTEzIDUuODAwMDFWNC40MDAwMUgxMS42VjMuMjAwMDFIMTNWMS44MDAwMUgxNC4yVjMuMjAwMDFIMTUuNlY0LjQwMDAxSDE0LjJWNS44MDAwMUgxM1pNNC44IDUuMDAwMDFDNC4xMzMzMyA1LjAwMDAxIDMuNTY2NjcgNC43NjY2OCAzLjEgNC4zMDAwMUMyLjYzMzMzIDMuODMzMzUgMi40IDMuMjY2NjggMi40IDIuNjAwMDFDMi40IDEuOTMzMzUgMi42MzMzMyAxLjM2NjY4IDMuMSAwLjkwMDAxMkMzLjU2NjY3IDAuNDMzMzQ2IDQuMTMzMzMgMC4yMDAwMTIgNC44IDAuMjAwMDEyQzUuNDY2NjcgMC4yMDAwMTIgNi4wMzMzMyAwLjQzMzM0NiA2LjUgMC45MDAwMTJDNi45NjY2NyAxLjM2NjY4IDcuMiAxLjkzMzM1IDcuMiAyLjYwMDAxQzcuMiAzLjI2NjY4IDYuOTY2NjcgMy44MzMzNSA2LjUgNC4zMDAwMUM2LjAzMzMzIDQuNzY2NjggNS40NjY2NyA1LjAwMDAxIDQuOCA1LjAwMDAxWk0wIDkuODAwMDFWOC4yNjY0MUMwIDcuOTg4NTUgMC4wNjkzMzMzIDcuNzMwNDEgMC4yMDggNy40OTIwMUMwLjM0NzIgNy4yNTMwOCAwLjUzODkzMyA3LjA1NTc1IDAuNzgzMiA2LjkwMDAxQzEuMzgzMiA2LjUyMjQxIDIuMDI0OCA2LjI0NDU1IDIuNzA4IDYuMDY2NDFDMy4zOTE3MyA1Ljg4ODgxIDQuMDg5MDcgNS44MDAwMSA0LjggNS44MDAwMUM1LjQ5OTczIDUuODAwMDEgNi4xODg1MyA1Ljg5NDQxIDYuODY2NCA2LjA4MzIxQzcuNTQ0MjcgNi4yNzIwMSA4LjE5NDQgNi41NDQyOCA4LjgxNjggNi45MDAwMUM5LjA0OTg3IDcuMDU1NzUgOS4yMzg2NyA3LjI1MzA4IDkuMzgzMiA3LjQ5MjAxQzkuNTI3NzMgNy43MzA0MSA5LjYgNy45ODg1NSA5LjYgOC4yNjY0MVY5LjgwMDAxSDBaTTQuOCAzLjgwMDAxQzUuMTIyMTMgMy44MDAwMSA1LjQwMjY3IDMuNjgzMjEgNS42NDE2IDMuNDQ5NjFDNS44ODA1MyAzLjIxNjU1IDYgMi45MzMzNSA2IDIuNjAwMDFDNiAyLjI3Nzg4IDUuODgwNTMgMS45OTczNSA1LjY0MTYgMS43NTg0MUM1LjQwMjY3IDEuNTE5NDggNS4xMjIxMyAxLjQwMDAxIDQuOCAxLjQwMDAxQzQuNDY2NjcgMS40MDAwMSA0LjE4MzQ3IDEuNTE5NDggMy45NTA0IDEuNzU4NDFDMy43MTY4IDEuOTk3MzUgMy42IDIuMjc3ODggMy42IDIuNjAwMDFDMy42IDIuOTMzMzUgMy43MTY4IDMuMjE2NTUgMy45NTA0IDMuNDQ5NjFDNC4xODM0NyAzLjY4MzIxIDQuNDY2NjcgMy44MDAwMSA0LjggMy44MDAwMVpNMS4yIDguNjAwMDFIOC40VjguMjY2NDFDOC40IDguMTk5NzUgOC4zODM0NyA4LjEzODY4IDguMzUwNCA4LjA4MzIxQzguMzE2OCA4LjAyNzc1IDguMjcyMjcgNy45Nzc4OCA4LjIxNjggNy45MzM2MUM3LjY4MzQ3IDcuNjQ0NTUgNy4xMzA2NyA3LjQxNjU1IDYuNTU4NCA3LjI0OTYxQzUuOTg2MTMgNy4wODMyMSA1LjQgNy4wMDAwMSA0LjggNy4wMDAwMUM0LjE4ODggNy4wMDAwMSAzLjU5NzA3IDcuMDgwNTQgMy4wMjQ4IDcuMjQxNjFDMi40NTI1MyA3LjQwMjY4IDEuOTA1MzMgNy42MzMzNSAxLjM4MzIgNy45MzM2MUMxLjMyNzczIDcuOTc3ODggMS4yODMyIDguMDI3NzUgMS4yNDk2IDguMDgzMjFDMS4yMTY1MyA4LjEzODY4IDEuMiA4LjE5OTc1IDEuMiA4LjI2NjQxVjguNjAwMDFaIiBmaWxsPSIjMUMxQjFGIi8+Cjwvc3ZnPgo=",
    It =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuOTk5ODUgMTMuNEM2LjEyMTk5IDEzLjQgNS4yOTQyNSAxMy4yMzMzIDQuNTE2NjUgMTIuOUMzLjczOTA1IDEyLjU2NjYgMy4wNTg1MiAxMi4xMDgyIDIuNDc1MDUgMTEuNTI0OEMxLjg5MTU5IDEwLjk0MTMgMS40MzMxOSAxMC4yNjA4IDEuMDk5ODUgOS40ODMxOEMwLjc2NjUyIDguNzA1NTggMC41OTk4NTQgNy44Nzc4NCAwLjU5OTg1NCA2Ljk5OTk4QzAuNTk5ODU0IDYuMTEwOTEgMC43NjY1MiA1LjI3NzU4IDEuMDk5ODUgNC40OTk5OEMxLjQzMzE5IDMuNzIyMzggMS44OTE1OSAzLjA0NDUxIDIuNDc1MDUgMi40NjYzOEMzLjA1ODUyIDEuODg4NzggMy43MzkwNSAxLjQzMzMxIDQuNTE2NjUgMS4wOTk5OEM1LjI5NDI1IDAuNzY2NjQyIDYuMTIxOTkgMC41OTk5NzYgNi45OTk4NSAwLjU5OTk3NkM3Ljg4ODkyIDAuNTk5OTc2IDguNzIyMjUgMC43NjY2NDIgOS40OTk4NSAxLjA5OTk4QzEwLjI3NzUgMS40MzMzMSAxMC45NTUzIDEuODg4NzggMTEuNTMzNSAyLjQ2NjM4QzEyLjExMTEgMy4wNDQ1MSAxMi41NjY1IDMuNzIyMzggMTIuODk5OSA0LjQ5OTk4QzEzLjIzMzIgNS4yNzc1OCAxMy4zOTk5IDYuMTEwOTEgMTMuMzk5OSA2Ljk5OTk4QzEzLjM5OTkgNy44Nzc4NCAxMy4yMzMyIDguNzA1NTggMTIuODk5OSA5LjQ4MzE4QzEyLjU2NjUgMTAuMjYwOCAxMi4xMTExIDEwLjk0MTMgMTEuNTMzNSAxMS41MjQ4QzEwLjk1NTMgMTIuMTA4MiAxMC4yNzc1IDEyLjU2NjYgOS40OTk4NSAxMi45QzguNzIyMjUgMTMuMjMzMyA3Ljg4ODkyIDEzLjQgNi45OTk4NSAxMy40Wk02Ljk5OTg1IDEyLjJDOC40NDQxMiAxMi4yIDkuNjcxODUgMTEuNjkxNyAxMC42ODMxIDEwLjY3NTJDMTEuNjk0MyA5LjY1ODY0IDEyLjE5OTkgOC40MzM1OCAxMi4xOTk5IDYuOTk5OThDMTIuMTk5OSA1LjU1NTcxIDExLjY5NDMgNC4zMjc5OCAxMC42ODMxIDMuMzE2NzhDOS42NzE4NSAyLjMwNTU4IDguNDQ0MTIgMS43OTk5OCA2Ljk5OTg1IDEuNzk5OThDNS41NjYyNSAxLjc5OTk4IDQuMzQxMTkgMi4zMDU1OCAzLjMyNDY1IDMuMzE2NzhDMi4zMDgxMiA0LjMyNzk4IDEuNzk5ODUgNS41NTU3MSAxLjc5OTg1IDYuOTk5OThDMS43OTk4NSA4LjQzMzU4IDIuMzA4MTIgOS42NTg2NCAzLjMyNDY1IDEwLjY3NTJDNC4zNDExOSAxMS42OTE3IDUuNTY2MjUgMTIuMiA2Ljk5OTg1IDEyLjJaTTcuOTMzNDUgNi4yOTk5OEw4LjI0OTQ1IDYuMTE2NzhDOC4yNzE4NSA2LjM3MjI0IDguMzcyMTIgNi41ODM0NCA4LjU1MDI1IDYuNzUwMzhDOC43Mjc4NSA2LjkxNjc4IDguOTQ0MzkgNi45OTk5OCA5LjE5OTg1IDYuOTk5OThDOS40NTUzMiA2Ljk5OTk4IDkuNjc0NzkgNi45MDU1OCA5Ljg1ODI1IDYuNzE2NzhDMTAuMDQxNyA2LjUyNzk4IDEwLjEzMzUgNi4zMDU1OCAxMC4xMzM1IDYuMDQ5NThDMTAuMTMzNSA1Ljg5NDM4IDEwLjA5NzIgNS43NDcxOCAxMC4wMjQ3IDUuNjA3OThDOS45NTI2NSA1LjQ2OTMxIDkuODQ5OTkgNS4zNTU0NCA5LjcxNjY1IDUuMjY2MzhMMTAuMjY2MyA0Ljk1MDM4TDkuODMzNDUgNC4yOTk5OEw3LjQ5OTg1IDUuNjMzNThMNy45MzM0NSA2LjI5OTk4Wk02LjA0OTQ1IDYuMjk5OThMNi40ODMwNSA1LjYzMzU4TDQuMTUwMjUgNC4yOTk5OEwzLjcxNjY1IDQuOTUwMzhMNC4yODMwNSA1LjI2NjM4QzQuMTQ5NzIgNS4zNTU0NCA0LjA0NDEyIDUuNDY5MzEgMy45NjYyNSA1LjYwNzk4QzMuODg4MzkgNS43NDcxOCAzLjg0OTQ1IDUuODk0MzggMy44NDk0NSA2LjA0OTU4QzMuODQ5NDUgNi4zMDU1OCAzLjk0NDEyIDYuNTI3OTggNC4xMzM0NSA2LjcxNjc4QzQuMzIyMjUgNi45MDU1OCA0LjU0NDM5IDYuOTk5OTggNC43OTk4NSA2Ljk5OTk4QzUuMDU1MzIgNi45OTk5OCA1LjI3MTg1IDYuOTE2NzggNS40NDk0NSA2Ljc1MDM4QzUuNjI3NTkgNi41ODM0NCA1LjcyNzg1IDYuMzcyMjQgNS43NTAyNSA2LjExNjc4TDYuMDQ5NDUgNi4yOTk5OFpNNy4wMTY2NSA3Ljc5OTk4QzYuMzE2MzkgNy43OTk5OCA1LjcwMjUyIDguMDI1MDQgNS4xNzUwNSA4LjQ3NTE4QzQuNjQ3MDUgOC45MjUzMSA0LjMyMTk5IDkuNTAwMjQgNC4xOTk4NSAxMC4ySDkuNzk5ODVDOS42OTk1OSA5LjUwMDI0IDkuMzg1NzIgOC45MjUzMSA4Ljg1ODI1IDguNDc1MThDOC4zMzAyNSA4LjAyNTA0IDcuNzE2MzkgNy43OTk5OCA3LjAxNjY1IDcuNzk5OThaIiBmaWxsPSIjMUMxQjFGIi8+Cjwvc3ZnPgo=",
    Tt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjgzMTUgNi4wMzM1OFY0LjA0OTU4SDUuMjk5OTVWMi42NDk1OEg3LjI4MzE1VjAuNjY2MzgySDguNjgzMTVWMi42NDk1OEgxMC42NjYzVjQuMDQ5NThIOC42ODMxNVY2LjAzMzU4SDcuMjgzMTVaTTQuNjY2MzUgMTQuNjY2NEM0LjI4ODc1IDE0LjY2NjQgMy45NjY2MSAxNC41MzMgMy42OTk5NCAxNC4yNjY0QzMuNDMzMjggMTMuOTk5NyAzLjI5OTk0IDEzLjY3NzYgMy4yOTk5NCAxMy4zQzMuMjk5OTQgMTIuOTIyNCAzLjQzMzI4IDEyLjYwMDIgMy42OTk5NCAxMi4zMzM2QzMuOTY2NjEgMTIuMDY2OSA0LjI4ODc1IDExLjkzMzYgNC42NjYzNSAxMS45MzM2QzUuMDQ0NDggMTEuOTMzNiA1LjM2Njg4IDEyLjA2NjkgNS42MzM1NCAxMi4zMzM2QzUuOTAwMjEgMTIuNjAwMiA2LjAzMzU1IDEyLjkyMjQgNi4wMzM1NSAxMy4zQzYuMDMzNTUgMTMuNjc3NiA1LjkwMDIxIDEzLjk5OTcgNS42MzM1NCAxNC4yNjY0QzUuMzY2ODggMTQuNTMzIDUuMDQ0NDggMTQuNjY2NCA0LjY2NjM1IDE0LjY2NjRaTTExLjMxNjcgMTQuNjY2NEMxMC45MzkxIDE0LjY2NjQgMTAuNjE3IDE0LjUzMyAxMC4zNTAzIDE0LjI2NjRDMTAuMDgzNyAxMy45OTk3IDkuOTUwMzUgMTMuNjc3NiA5Ljk1MDM1IDEzLjNDOS45NTAzNSAxMi45MjI0IDEwLjA4MzcgMTIuNjAwMiAxMC4zNTAzIDEyLjMzMzZDMTAuNjE3IDEyLjA2NjkgMTAuOTM5MSAxMS45MzM2IDExLjMxNjcgMTEuOTMzNkMxMS42OTQzIDExLjkzMzYgMTIuMDE2NSAxMi4wNjY5IDEyLjI4MzEgMTIuMzMzNkMxMi41NDk4IDEyLjYwMDIgMTIuNjgzMSAxMi45MjI0IDEyLjY4MzEgMTMuM0MxMi42ODMxIDEzLjY3NzYgMTIuNTQ5OCAxMy45OTk3IDEyLjI4MzEgMTQuMjY2NEMxMi4wMTY1IDE0LjUzMyAxMS42OTQzIDE0LjY2NjQgMTEuMzE2NyAxNC42NjY0Wk00LjY0OTU1IDExLjM2NjRDNC4xNDk4MSAxMS4zNjY0IDMuNzYzOTQgMTEuMTQxNiAzLjQ5MTk0IDEwLjY5MkMzLjIxOTQxIDEwLjI0MTggMy4yMTA4OCA5Ljc5NDY1IDMuNDY2MzUgOS4zNTAzOEw0LjMzMzU0IDcuNzUwMzhMMS45NjYzNCAyLjczMzU4SDAuNjMzNTQ1VjEuMzMzNThIMi44NDk1NUw1LjY5OTk0IDcuMzE2NzhIMTAuMzMzNUwxMi44ODMxIDIuNjQ5NThMMTQuMTE2NyAzLjM1MDM4TDExLjU1MDMgNy45OTk5OEMxMS40Mjc3IDguMjIyMzggMTEuMjYwNyA4LjM5NzMyIDExLjA0OTUgOC41MjQ3OEMxMC44Mzg5IDguNjUyNzggMTAuNjA1OCA4LjcxNjc4IDEwLjM1MDMgOC43MTY3OEg1LjQxNjc1TDQuNzE2NzQgOS45NjYzOEgxMi42ODMxVjExLjM2NjRINC42NDk1NVoiIGZpbGw9IiMxQzFCMUYiLz4KPC9zdmc+Cg==",
    zt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjAwMDUgNS44MDAwMUM4LjY0NDMyIDUuODAwMDEgOC4xNzIwNSA1LjYwNTYxIDcuNzgzMjUgNS4yMTY4MUM3LjM5NDQ1IDQuODI4MDEgNy4yMDAwNSA0LjM1NTc1IDcuMjAwMDUgMy44MDAwMUM3LjIwMDA1IDMuMjQ0MjggNy4zOTQ0NSAyLjc3MjAxIDcuNzgzMjUgMi4zODMyMUM4LjE3MjA1IDEuOTk0NDEgOC42NDQzMiAxLjgwMDAxIDkuMjAwMDUgMS44MDAwMUM5Ljc1NTc4IDEuODAwMDEgMTAuMjI4IDEuOTk0NDEgMTAuNjE2OCAyLjM4MzIxQzExLjAwNTYgMi43NzIwMSAxMS4yIDMuMjQ0MjggMTEuMiAzLjgwMDAxQzExLjIgNC4zNTU3NSAxMS4wMDU2IDQuODI4MDEgMTAuNjE2OCA1LjIxNjgxQzEwLjIyOCA1LjYwNTYxIDkuNzU1NzggNS44MDAwMSA5LjIwMDA1IDUuODAwMDFaTTQuNDAwMDUgNy40MDAwMUM0LjA2NjcyIDcuNDAwMDEgMy43ODM1MiA3LjI4MzIxIDMuNTUwNDUgNy4wNDk2MUMzLjMxNjg1IDYuODE2NTUgMy4yMDAwNSA2LjUzMzM1IDMuMjAwMDUgNi4yMDAwMVYxLjQwMDAxQzMuMjAwMDUgMS4wNjY2OCAzLjMxNjg1IDAuNzgzNDc5IDMuNTUwNDUgMC41NTA0MTJDMy43ODM1MiAwLjMxNjgxMiA0LjA2NjcyIDAuMjAwMDEyIDQuNDAwMDUgMC4yMDAwMTJIMTRDMTQuMzMzNCAwLjIwMDAxMiAxNC42MTY2IDAuMzE2ODEyIDE0Ljg0OTYgMC41NTA0MTJDMTUuMDgzMiAwLjc4MzQ3OSAxNS4yIDEuMDY2NjggMTUuMiAxLjQwMDAxVjYuMjAwMDFDMTUuMiA2LjUzMzM1IDE1LjA4MzIgNi44MTY1NSAxNC44NDk2IDcuMDQ5NjFDMTQuNjE2NiA3LjI4MzIxIDE0LjMzMzQgNy40MDAwMSAxNCA3LjQwMDAxSDQuNDAwMDVaTTUuNjAwMDUgNi4yMDAwMUgxMi44QzEyLjggNS44NjY2OCAxMi45MTY4IDUuNTgzNDggMTMuMTUwNCA1LjM1MDQxQzEzLjM4MzUgNS4xMTY4MSAxMy42NjY3IDUuMDAwMDEgMTQgNS4wMDAwMVYyLjYwMDAxQzEzLjY2NjcgMi42MDAwMSAxMy4zODM1IDIuNDgzMjEgMTMuMTUwNCAyLjI0OTYxQzEyLjkxNjggMi4wMTY1NSAxMi44IDEuNzMzMzUgMTIuOCAxLjQwMDAxSDUuNjAwMDVDNS42MDAwNSAxLjczMzM1IDUuNDgzMjUgMi4wMTY1NSA1LjI0OTY1IDIuMjQ5NjFDNS4wMTY1OCAyLjQ4MzIxIDQuNzMzMzggMi42MDAwMSA0LjQwMDA1IDIuNjAwMDFWNS4wMDAwMUM0LjczMzM4IDUuMDAwMDEgNS4wMTY1OCA1LjExNjgxIDUuMjQ5NjUgNS4zNTA0MUM1LjQ4MzI1IDUuNTgzNDggNS42MDAwNSA1Ljg2NjY4IDUuNjAwMDUgNi4yMDAwMVpNMTMuMiA5LjgwMDAxSDIuMDAwMDVDMS42NjY3MiA5LjgwMDAxIDEuMzgzNTIgOS42ODMyMSAxLjE1MDQ1IDkuNDQ5NjFDMC45MTY4NDkgOS4yMTY1NSAwLjgwMDA0OSA4LjkzMzM0IDAuODAwMDQ5IDguNjAwMDFWMS44MDAwMUgyLjAwMDA1VjguNjAwMDFIMTMuMlY5LjgwMDAxWiIgZmlsbD0iIzFDMUIxRiIvPgo8L3N2Zz4K",
    mt =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE2IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjAwMDA1IDhDMS42NjY3MiA4IDEuMzgzNTIgNy44ODMyIDEuMTUwNDUgNy42NDk2QzAuOTE2ODQ5IDcuNDE2NTMgMC44MDAwNDkgNy4xMzMzMyAwLjgwMDA0OSA2LjhDMC44MDAwNDkgNi40NjY2NyAwLjkxNjg0OSA2LjE4MzQ3IDEuMTUwNDUgNS45NTA0QzEuMzgzNTIgNS43MTY4IDEuNjY2NzIgNS42IDIuMDAwMDUgNS42QzIuMDU1NTIgNS42IDIuMTA4MzIgNS42MDI2NyAyLjE1ODQ1IDUuNjA4QzIuMjA4NTggNS42MTM4NyAyLjI2MTM4IDUuNjIyNCAyLjMxNjg1IDUuNjMzNkw1LjY0OTY1IDIuM0M1LjYyNzc4IDIuMjQ0NTMgNS42MTM5MiAyLjE5NDY3IDUuNjA4MDUgMi4xNTA0QzUuNjAyNzIgMi4xMDU2IDUuNjAwMDUgMi4wNTU0NyA1LjYwMDA1IDJDNS42MDAwNSAxLjY2NjY3IDUuNzE2ODUgMS4zODM0NyA1Ljk1MDQ1IDEuMTUwNEM2LjE4MzUyIDAuOTE2OCA2LjQ2NjcyIDAuOCA2LjgwMDA1IDAuOEM3LjEzMzM4IDAuOCA3LjQxNjU4IDAuOTE2OCA3LjY0OTY1IDEuMTUwNEM3Ljg4MzI1IDEuMzgzNDcgOC4wMDAwNSAxLjY2NjY3IDguMDAwMDUgMkM4LjAwMDA1IDIuMDMzMDcgNy45ODM1MiAyLjEzMzA3IDcuOTUwNDUgMi4zTDkuNzAwMDUgNC4wNDk2QzkuNzU1NTIgNC4wMjc3MyA5LjgwNTM4IDQuMDEzODcgOS44NDk2NSA0LjAwOEM5Ljg5NDQ1IDQuMDAyNjcgOS45NDQ1OCA0IDEwIDRDMTAuMDU1NSA0IDEwLjEwODMgNC4wMDI2NyAxMC4xNTg0IDQuMDA4QzEwLjIwODYgNC4wMTM4NyAxMC4yNjE0IDQuMDIyNCAxMC4zMTY4IDQuMDMzNkwxMi44NDk2IDEuNUMxMi44Mjc4IDEuNDQ0NTMgMTIuODEzOSAxLjM5NDY3IDEyLjgwOCAxLjM1MDRDMTIuODAyNyAxLjMwNTYgMTIuOCAxLjI1NTQ3IDEyLjggMS4yQzEyLjggMC44NjY2NjcgMTIuOTE2OCAwLjU4MzQ2NyAxMy4xNTA0IDAuMzUwNEMxMy4zODM1IDAuMTE2OCAxMy42NjY3IDAgMTQgMEMxNC4zMzM0IDAgMTQuNjE2NiAwLjExNjggMTQuODQ5NiAwLjM1MDRDMTUuMDgzMiAwLjU4MzQ2NyAxNS4yIDAuODY2NjY3IDE1LjIgMS4yQzE1LjIgMS41MzMzMyAxNS4wODMyIDEuODE2NTMgMTQuODQ5NiAyLjA0OTZDMTQuNjE2NiAyLjI4MzIgMTQuMzMzNCAyLjQgMTQgMi40QzEzLjk0NDYgMi40IDEzLjg5MTggMi4zOTczMyAxMy44NDE2IDIuMzkyQzEzLjc5MTUgMi4zODYxMyAxMy43Mzg3IDIuMzc3NiAxMy42ODMyIDIuMzY2NEwxMS4xNTA0IDQuOUMxMS4xNzIzIDQuOTU1NDcgMTEuMTg2MiA1LjAwNTMzIDExLjE5MiA1LjA0OTZDMTEuMTk3NCA1LjA5NDQgMTEuMiA1LjE0NDUzIDExLjIgNS4yQzExLjIgNS41MzMzMyAxMS4wODMyIDUuODE2NTMgMTAuODQ5NiA2LjA0OTZDMTAuNjE2NiA2LjI4MzIgMTAuMzMzNCA2LjQgMTAgNi40QzkuNjY2NzIgNi40IDkuMzgzNTIgNi4yODMyIDkuMTUwNDUgNi4wNDk2QzguOTE2ODUgNS44MTY1MyA4LjgwMDA1IDUuNTMzMzMgOC44MDAwNSA1LjJDOC44MDAwNSA1LjE0NDUzIDguODAyNzIgNS4wOTE3MyA4LjgwODA1IDUuMDQxNkM4LjgxMzkyIDQuOTkxNDcgOC44MjI0NSA0LjkzODY3IDguODMzNjUgNC44ODMyTDcuMTAwMDUgMy4xNTA0QzcuMDQ0NTggMy4xNzIyNyA2Ljk5NDcyIDMuMTg2MTMgNi45NTA0NSAzLjE5MkM2LjkwNTY1IDMuMTk3MzMgNi44NTU1MiAzLjIgNi44MDAwNSAzLjJDNi43NDQ1OCAzLjIgNi42Mzg5OCAzLjE4ODggNi40ODMyNSAzLjE2NjRMMy4xNTA0NSA2LjVDMy4xNzIzMiA2LjU1NTQ3IDMuMTg2MTggNi42MDUzMyAzLjE5MjA1IDYuNjQ5NkMzLjE5NzM4IDYuNjk0NCAzLjIwMDA1IDYuNzQ0NTMgMy4yMDAwNSA2LjhDMy4yMDAwNSA3LjEzMzMzIDMuMDgzMjUgNy40MTY1MyAyLjg0OTY1IDcuNjQ5NkMyLjYxNjU4IDcuODgzMiAyLjMzMzM4IDggMi4wMDAwNSA4WiIgZmlsbD0iIzFDMUIxRiIvPgo8L3N2Zz4K",
    yt =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhZyI+PHBhdGggZD0iTTEyLjU4NiAyLjU4NkEyIDIgMCAwIDAgMTEuMTcyIDJINGEyIDIgMCAwIDAtMiAydjcuMTcyYTIgMiAwIDAgMCAuNTg2IDEuNDE0bDguNzA0IDguNzA0YTIuNDI2IDIuNDI2IDAgMCAwIDMuNDIgMGw2LjU4LTYuNThhMi40MjYgMi40MjYgMCAwIDAgMC0zLjQyeiIvPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==",
    Ot =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc0ODdfMzQ4KSI+CjxwYXRoIGQ9Ik04LjY3MDkgMy45OTk5NEg1LjY3MDlDNS40MDU2OCAzLjk5OTk0IDUuMTUxMzMgNC4xMDUzIDQuOTYzNzkgNC4yOTI4M0M0Ljc3NjI2IDQuNDgwMzcgNC42NzA5IDQuNzM0NzIgNC42NzA5IDQuOTk5OTRDNC42NzA5IDUuMjY1MTYgNC43NzYyNiA1LjUxOTUxIDQuOTYzNzkgNS43MDcwNUM1LjE1MTMzIDUuODk0NTggNS40MDU2OCA1Ljk5OTk0IDUuNjcwOSA1Ljk5OTk0SDcuNjcwOUM3LjkzNjExIDUuOTk5OTQgOC4xOTA0NyA2LjEwNTMgOC4zNzgwMSA2LjI5MjgzQzguNTY1NTQgNi40ODAzNyA4LjY3MDkgNi43MzQ3MiA4LjY3MDkgNi45OTk5NEM4LjY3MDkgNy4yNjUxNiA4LjU2NTU0IDcuNTE5NTEgOC4zNzgwMSA3LjcwNzA1QzguMTkwNDcgNy44OTQ1OCA3LjkzNjExIDcuOTk5OTQgNy42NzA5IDcuOTk5OTRINC42NzA5IiBzdHJva2U9IiMzNDQwNEIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi42Njg5NSA5VjMiIHN0cm9rZT0iIzM0NDA0QiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxtYXNrIGlkPSJwYXRoLTMtaW5zaWRlLTFfNzQ4N18zNDgiIGZpbGw9IndoaXRlIj4KPHBhdGggZD0iTTkuODQ0NzMgMkwxMC41NTE4IDIuNzA3MTFMMy43MDY4NiA5LjU1MjA4TDIuOTk5NzYgOC44NDQ5N0w5Ljg0NDczIDJaIi8+CjwvbWFzaz4KPHBhdGggZD0iTTkuODQ0NzMgMkwxMC41NTE4IDIuNzA3MTFMMy43MDY4NiA5LjU1MjA4TDIuOTk5NzYgOC44NDQ5N0w5Ljg0NDczIDJaIiBmaWxsPSIjMzQ0MDRCIi8+CjxwYXRoIGQ9Ik0xMC40MTA0IDIuNTY1NjlMMy41NjU0NCA5LjQxMDY2TDMuODQ4MjggOS42OTM1TDEwLjY5MzMgMi44NDg1M0wxMC40MTA0IDIuNTY1NjlaTTMuMTQxMTggOC45ODYzOUw5Ljk4NjE1IDIuMTQxNDJMOS43MDMzMSAxLjg1ODU4TDIuODU4MzMgOC43MDM1NUwzLjE0MTE4IDguOTg2MzlaIiBmaWxsPSJ3aGl0ZSIgbWFzaz0idXJsKCNwYXRoLTMtaW5zaWRlLTFfNzQ4N18zNDgpIi8+CjxwYXRoIGQ9Ik02LjY3MDkgMTAuOTk5OUM5LjQzMjMyIDEwLjk5OTkgMTEuNjcwOSA4Ljc2MTM2IDExLjY3MDkgNS45OTk5NEMxMS42NzA5IDMuMjM4NTIgOS40MzIzMiAwLjk5OTkzOSA2LjY3MDkgMC45OTk5MzlDMy45MDk0NyAwLjk5OTkzOSAxLjY3MDkgMy4yMzg1MiAxLjY3MDkgNS45OTk5NEMxLjY3MDkgOC43NjEzNiAzLjkwOTQ3IDEwLjk5OTkgNi42NzA5IDEwLjk5OTlaIiBzdHJva2U9IiMzNDQwNEIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc0ODdfMzQ4Ij4KPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC42NjY5OTIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
    Lt = [
      {
        definition: "entryPageUrl==",
        iconSrc: gt,
        idsegment: 0,
        name: "Entry Page",
        title: "QuickFilter-EntryPage",
      },
      {
        definition: "referrerUrl==",
        iconSrc: ut,
        idsegment: 0,
        name: "Traffic Source",
        title: "QuickFilter-TrafficSource",
        notDone: !0,
      },
      {
        definition: "sessionTagName==;sessionTagValue==",
        iconSrc: yt,
        idsegment: 0,
        name: "Session Tag",
        title: "QuickFilter-SessionTag",
        showSign: !0,
      },
      {
        definition: "visitCount==",
        iconSrc: dt,
        idsegment: 0,
        name: "Total Pages Visited",
        title: "QuickFilter-TotalPagesVisited",
      },
      {
        definition: "actionUrl==",
        iconSrc: Le,
        idsegment: 0,
        name: "Viewed Page",
        title: "QuickFilter-ViewedPage",
      },
      {
        definition: "visitorType==returning",
        iconSrc: jt,
        idsegment: 0,
        name: "Returning Users",
        title: "QuickFilter-ReturningUsers",
        isDefinitionValueSet: !0,
      },
      {
        definition: "visitorType==new",
        iconSrc: At,
        idsegment: 0,
        name: "New Users",
        title: "QuickFilter-NewUsers",
        isDefinitionValueSet: !0,
      },
      {
        definition: "heatmapType==rage",
        iconSrc: It,
        idsegment: 0,
        name: "Rage Clicks",
        title: "rage click events",
        isDefinitionValueSet: !0,
      },
    ],
    wt = [
      {
        definition: "revenueOrder>1",
        iconSrc: Tt,
        idsegment: 0,
        name: "Purchasers",
        title: "QuickFilter-Purchasers",
        isDefinitionValueSet: !0,
      },
      {
        definition: "revenueOrder==0",
        iconSrc: Ot,
        idsegment: 0,
        name: "Non Purchasers",
        title: "QuickFilter-Non-Purchasers",
        isDefinitionValueSet: !0,
      },
      {
        definition: "revenueOrder",
        iconSrc: zt,
        idsegment: 0,
        name: "Average Order Value",
        title: "QuickFilter-OrderValue",
        showSign: !0,
      },
      {
        definition: "partnerName==",
        iconSrc: mt,
        idsegment: 0,
        name: "Partners",
        title: "partner-name",
        showSign: !0,
      },
    ],
    Et = {
      visitorType: ["returning", "new"],
      browserName: [
        "Chrome",
        "Firefox",
        "Handheld Browser",
        "Safari",
        "Firefox",
        "Konqueror",
        "Yuzu Browser",
        "UC Browser",
        "Yandex Browser",
        "Mozilla",
        "Whale Browser",
        "Samsung Internet",
        "UNK",
      ],
      deviceModel: [
        "iPhone OS",
        "Mac OS",
        "SAMSUNG",
        "Nexus",
        "Pixel",
        "Mac",
        "Linux",
        "BlackBerry",
        "Motorola",
        "Sony",
        "Xiaomi",
        "NokiaLumia",
        "OnePlus",
        "Nokia",
        "LG",
        "Pixel",
        "Dell",
      ],
      browserEngine: [
        "WebKit",
        "Blink",
        "Trident",
        "Text-based",
        "Dillo",
        "iCab",
        "Elektra",
        "Presto",
        "Gecko",
        "KHTML",
        "NetFront",
        "Edge",
        "NetSurf",
        "Servo",
        "Goanna",
        "EkiohFlow",
      ],
      deviceType: ["Desktop", "Tablet", "Mobile"],
      operatingSystemName: [
        "Windows",
        "Mac",
        "GNU/Linux",
        "Java ME",
        "webOS",
        "watchOS",
        "tvOS",
        "palmOS",
        "moonOS",
        "iPadOS",
        "iOS",
        "ZorinOS",
        "Zenwalk",
        "YunOS",
        "Xubuntu",
        "Xbox",
        "Windows RT",
        "Windows Phone",
        "Windows Mobile",
        "Windows IoT",
        "Windows CE",
        "Whale OS",
        "WebTV",
        "VectorLinux",
        "Unknown",
        "Ubuntu",
        "TmaxOS",
        "Tizen",
        "ThreadX",
        "TencentOS",
      ],
      referrerUrl: [
        "Google",
        "Bing",
        "Yahoo",
        "DuckDuckGo",
        "Baidu",
        "Yandex",
        "Ask",
        "AOL Search",
        "Facebook",
        "Twitter",
        "Instagram",
        "LinkedIn",
        "Pinterest",
        "YouTube",
        "Snapchat",
        "Reddit",
        "TikTok",
        "WhatsApp",
        "Telegram",
        "Tumblr",
        "Flickr",
        "Vimeo",
      ],
      countryName: {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BR: "Brazil",
        BN: "Brunei",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        CV: "Cabo Verde",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CR: "Costa Rica",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        KP: "North Korea",
        MK: "North Macedonia",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RU: "Russia",
        RW: "Rwanda",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome and Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        KR: "South Korea",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SZ: "Eswatini",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syria",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TL: "Timor-,Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VA: "Vatican City",
        VE: "Venezuela",
        VN: "Vietnam",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
      },
      referrerType: {
        1: "direct",
        2: "search",
        3: "website",
        6: "campaign",
        7: "social",
      },
    },
    St = [
      {
        type: "metric",
        category: "Visitors",
        name: "Actions In Visit",
        segment: "actions",
        sqlSegment: "log_visit.visit_total_actions",
        needsMostFrequentValues: !0,
        option: "number",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Days since first visit",
        segment: "daysSinceFirstVisit",
        sqlSegment: "log_visit.visitor_seconds_since_first",
        needsMostFrequentValues: !0,
        sqlFilterValue: {},
        option: "number",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Days since last visit",
        segment: "daysSinceLastVisit",
        sqlSegment: "FLOOR(log_visit.visitor_seconds_since_last / 86400)",
        needsMostFrequentValues: !0,
        option: "number",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Events",
        segment: "events",
        sqlSegment: "log_visit.visit_total_events",
        needsMostFrequentValues: !0,
        acceptedValues:
          "To select all visits who triggered an Event, use: &segment=events>0",
        option: "integer",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Number of Interactions",
        segment: "interactions",
        sqlSegment: "log_visit.visit_total_interactions",
        needsMostFrequentValues: !0,
        acceptedValues: "Any positive integer",
        suggestedValuesCallback: {},
        option: "number",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Number of Internal Searches",
        segment: "searches",
        sqlSegment: "log_visit.visit_total_searches",
        needsMostFrequentValues: !0,
        acceptedValues:
          "To select all visits who used internal Site Search, use: &segment=searches>0",
        option: "integer",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Number of visits",
        segment: "visitCount",
        sqlSegment: "log_visit.visitor_count_visits",
        needsMostFrequentValues: !0,
        option: "number",
      },
      {
        type: "metric",
        category: "Visitors",
        name: "Visit Duration (in seconds)",
        segment: "visitDuration",
        sqlSegment: "log_visit.visit_total_time",
        needsMostFrequentValues: !0,
        option: "number",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Browser",
        segment: "browserName",
        sqlSegment: "log_visit.config_browser_name",
        needsMostFrequentValues: !1,
        sqlFilterValue: {},
        acceptedValues:
          "FireFox, Internet Explorer, Chrome, Safari, Opera etc.",
        suggestedValuesCallback: {},
        option: "text",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Device model",
        segment: "deviceModel",
        sqlSegment: "log_visit.config_device_model",
        needsMostFrequentValues: !0,
        acceptedValues: "iPad, Nexus 5, Galaxy S5, Fire TV, etc.",
        option: "text",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Device type",
        segment: "deviceType",
        sqlSegment: "log_visit.config_device_type",
        needsMostFrequentValues: !0,
        sqlFilter: {},
        acceptedValues:
          "desktop, smartphone, tablet, feature phone, console, tv, car browser, smart display, camera, portable media player, phablet, smart speaker, wearable, peripheral",
        suggestedValuesCallback: {},
        option: "text",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Operating system",
        segment: "operatingSystemName",
        sqlSegment: "log_visit.config_os",
        needsMostFrequentValues: !1,
        sqlFilterValue: {},
        acceptedValues: "Windows, Linux, Mac, Android, iOS etc.",
        suggestedValuesCallback: {},
        option: "text",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Resolution",
        segment: "resolution",
        sqlSegment: "log_visit.config_resolution",
        needsMostFrequentValues: !0,
        acceptedValues: "1280x1024, 800x600, etc.",
        option: "matches",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Site time — hour (time of last action)",
        segment: "visitServerHour",
        sqlSegment: "HOUR(log_visit.visit_last_action_time)",
        needsMostFrequentValues: !0,
        acceptedValues: "0, 1, 2, 3, ..., 20, 21, 22, 23",
        option: "number",
      },
      {
        type: "dimension",
        category: "Visitors",
        name: "Visit type",
        segment: "visitorType",
        sqlSegment: "log_visit.visitor_returning",
        needsMostFrequentValues: !0,
        sqlFilterValue: {},
        acceptedValues:
          'new, returning, returningCustomer. For example, to select all visitors who have returned to the website, including those who have bought something in their previous visits, the API request would contain "&segment=visitorType==returning,visitorType==returningCustomer"',
        suggestedValuesCallback: {},
        option: "matches",
      },
      {
        type: "dimension",
        category: "Visitor location",
        name: "City",
        segment: "city",
        sqlSegment: "log_visit.location_city",
        needsMostFrequentValues: !0,
        acceptedValues: "Sydney, Sao Paolo, Rome, etc.",
        option: "text",
      },
      {
        type: "dimension",
        category: "Visitor location",
        name: "Continent",
        segment: "continentCode",
        sqlSegment: "log_visit.location_country",
        needsMostFrequentValues: !0,
        sqlFilter:
          "Piwik\\Plugins\\UserCountry\\UserCountry::getCountriesForContinent",
        acceptedValues: "eur, asi, amc, amn, ams, afr, ant, oce",
        option: "text",
      },
      {
        type: "dimension",
        category: "Visitor location",
        name: "Country",
        segment: "countryName",
        sqlSegment: "log_visit.location_country",
        needsMostFrequentValues: !1,
        sqlFilterValue: {},
        acceptedValues: "Germany, France, Spain, ...",
        option: "text",
      },
      {
        type: "dimension",
        category: "Behaviour",
        name: "Entry Page URL",
        segment: "entryPageUrl",
        sqlSegment: "log_visit.visit_entry_idaction_url",
        needsMostFrequentValues: !0,
        sqlFilter: "\\Piwik\\Tracker\\TableLogAction::getIdActionFromSegment",
        suggestedValuesApi: "Actions.getEntryPageUrls",
        option: "matches",
      },
      {
        type: "dimension",
        category: "Behaviour",
        name: "Exit Page URL",
        segment: "exitPageUrl",
        sqlSegment: "log_visit.visit_exit_idaction_url",
        needsMostFrequentValues: !0,
        sqlFilter: "\\Piwik\\Tracker\\TableLogAction::getIdActionFromSegment",
        suggestedValuesApi: "Actions.getExitPageUrls",
        option: "matches",
      },
      {
        type: "dimension",
        category: "Behaviour",
        name: "Page URL",
        segment: "pageUrl",
        sqlSegment: "log_link_visit_action.idaction_url",
        needsMostFrequentValues: !0,
        sqlFilter: "\\Piwik\\Tracker\\TableLogAction::getIdActionFromSegment",
        suggestedValuesApi: "Actions.getPageUrls",
        option: "number",
      },
      {
        type: "dimension",
        category: "Acquisition",
        name: "Channel Type",
        segment: "referrerType",
        sqlSegment: "log_visit.referer_type",
        needsMostFrequentValues: !0,
        sqlFilterValue:
          "Piwik\\Plugins\\Referrers\\getReferrerTypeFromShortName",
        acceptedValues: "direct, search, website, campaign",
        suggestedValuesCallback: {},
        option: "matches",
      },
      {
        type: "dimension",
        category: "Acquisition",
        name: "Keyword",
        segment: "referrerKeyword",
        sqlSegment: "log_visit.referer_keyword",
        needsMostFrequentValues: !0,
        acceptedValues: "Encoded%20Keyword, keyword",
        option: "matches",
      },
      {
        type: "dimension",
        category: "Acquisition",
        name: "Referrer Name",
        segment: "referrerName",
        sqlSegment: "log_visit.referer_name",
        needsMostFrequentValues: !0,
        acceptedValues:
          "twitter.com, www.facebook.com, Bing, Google, Yahoo, CampaignName",
        option: "matches",
      },
      {
        type: "dimension",
        category: "Acquisition",
        name: "Referrer URL",
        segment: "referrerUrl",
        sqlSegment: "log_visit.referer_url",
        needsMostFrequentValues: !0,
        acceptedValues: "http%3A%2F%2Fwww.example.org%2Freferer-page.htm",
        option: "number",
      },
      {
        type: "metric",
        category: "Ecommerce",
        name: "Order Revenue",
        segment: "revenueOrder",
        sqlSegment: "log_conversion.idvisit",
        needsMostFrequentValues: !0,
        sqlFilter: {},
        option: "number",
      },
      {
        type: "metric",
        category: "Session Tags",
        name: "Session Tag",
        segment: "sessionTag",
        sqlSegment: "log_hsr.session_tag",
        needsMostFrequentValues: !1,
        option: "matches",
      },
    ],
    ae = (l) => (
      e.pushScopeId("data-v-7bec554d"), (l = l()), e.popScopeId(), l
    ),
    kt = { key: 0, class: "loader_wrapper" },
    xt = { class: "filter_header" },
    Ct = { class: "filter_header_left" },
    pt = ["src"],
    _t = { class: "filter_header_text" },
    Ut = { class: "filter_content_wrapper" },
    ft = { key: 0, class: "filter_content_dropdown" },
    ht = ae(() =>
      e.createElementVNode("p", { class: "dropdown_title" }, "Filter Name", -1)
    ),
    Qt = { class: "dropdown_body_wrapper" },
    Yt = ["placeholder"],
    Vt = { key: 0, class: "error_message" },
    vt = ae(() =>
      e.createElementVNode("div", { class: "horizontal_line" }, null, -1)
    ),
    bt = { key: 0, class: "condition_indicator" },
    Ft = { class: "condition" },
    Bt = { key: 1, class: "filter_content_dropdown" },
    Pt = ae(() =>
      e.createElementVNode(
        "div",
        { class: "remove_action_wrapper" },
        [e.createElementVNode("p", { class: "dropdown_title" }, "Action")],
        -1
      )
    ),
    Zt = { class: "dropdown_body_wrapper" },
    Rt = ["onClick"],
    Gt = ["onFocus", "onInput", "onUpdate:modelValue"],
    $t = { key: 1, class: "error_message" },
    Wt = ["for"],
    Ht = ["id"],
    qt = { class: "content" },
    Jt = ["onClick"],
    Kt = ["title"],
    Xt = ["src"],
    eM = { class: "filter_content_dropdown" },
    tM = { class: "dropdown_title" },
    MM = { class: "dropdown_body_wrapper" },
    nM = ["onClick"],
    aM = ["type", "placeholder", "onFocus", "onInput", "onUpdate:modelValue"],
    iM = { key: 1, class: "error_message" },
    oM = ["onClick"],
    sM = { key: 2, class: "filter_content_dropdown" },
    lM = { class: "dropdown_title" },
    rM = { class: "dropdown_body_wrapper" },
    NM = ["onClick"],
    cM = ["type", "placeholder", "onInput", "onUpdate:modelValue", "onFocus"],
    DM = { key: 2, class: "error_message" },
    gM = ["onClick"],
    uM = { key: 3, class: "remove_custom_filter" },
    dM = ["onClick"],
    jM = [
      ae(() =>
        e.createElementVNode(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
          },
          [
            e.createElementVNode("path", {
              d: "M9 3L3 9",
              stroke: "#B71E2D",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
            e.createElementVNode("path", {
              d: "M3 3L9 9",
              stroke: "#B71E2D",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ],
          -1
        )
      ),
      ae(() => e.createElementVNode("p", null, "Remove Filter", -1)),
    ],
    AM = [
      e.createStaticVNode(
        '<div class="add_custom_filter" data-v-7bec554d><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-v-7bec554d><path d="M3.33301 8H12.6663" stroke="#00936F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7bec554d></path><path d="M8 3.3335V12.6668" stroke="#00936F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7bec554d></path></svg><p class="add_custom_filter_text" data-v-7bec554d>Add Additional Filter</p></div>',
        1
      ),
    ],
    IM = { class: "filter_footer" },
    TM = { class: "footer_buttons" },
    zM = { class: "flex_us" },
    mM = [
      ae(() =>
        e.createElementVNode("p", { class: "footer_button_text" }, "Cancel", -1)
      ),
    ],
    yM = [
      ae(() =>
        e.createElementVNode("p", { class: "footer_button_text" }, "Delete", -1)
      ),
    ],
    OM = { class: "footer_button_text" },
    LM = e.defineComponent({
      __name: "FilterModal",
      props: {
        closeSelectModal: { type: Function },
        data: {},
        savedFilters: {},
      },
      emits: ["item-selected"],
      setup(l, { emit: d }) {
        var Qe, Ye, Ve, ve, be, Fe;
        const A = {
            number: { "==": "Equal To", "<": "Less Than", ">": "Greater Than" },
            integer: { "==": "Equal To", ">": "Greater Than" },
            matches: { "==": "Equal To" },
            text: { "==": "Equal To", "&&": "Contains" },
          },
          r = {
            "Equal To": "==",
            "Less Than": "<",
            "Greater Than": ">",
            Contains: "&&",
          },
          I = [],
          n = l,
          B = d,
          Z = () => {
            var M;
            let t = "";
            return (M = n.data) != null && M.edit && (t = `${n.data.title}`), t;
          },
          L = (t) => {
            var a;
            let M = t;
            return (
              (a = n.data) != null &&
                a.edit &&
                (M = `Update Custom Filter (${n.data.title})`),
              M
            );
          },
          W = (t, M) => Object.keys(M).find((a) => t.includes(M[a])) || "",
          b = e.ref(window.location.href),
          U = e.ref(I),
          h = e.ref([]),
          Q = e.ref(U.value),
          ie = e.ref(),
          R = e.ref(),
          ge = e.ref(),
          F = e.ref(),
          Y = e.ref(),
          we = e.ref(""),
          k = e.ref(Z()),
          me = e.ref(!1),
          G = e.ref(""),
          E = e.ref(!1),
          re = e.ref({ conditions: [], options: [] }),
          $ = e.ref(!1),
          N = e.ref([
            {
              condition: "and",
              index: 0,
              action: "",
              default: "",
              value: "",
              actionError: !1,
              actionErrorMsg: "",
              conditionError: !1,
              conditionErrorMsg: "",
              valueError: !1,
              valueErrorMsg: "",
              actionOpen: !1,
              defaultOpen: !1,
              valueOpen: !1,
              actionValue: void 0,
            },
          ]);
        if ((Qe = n.data) != null && Qe.edit) {
          let t = [];
          (Ye = n.data.rawValues) == null ||
            Ye.forEach((M, a) => {
              t.push({ ...N.value[0], index: a, ...M });
            }),
            (N.value = t);
        }
        const ue = (t, M = 5) => {
            var c;
            const a = document.querySelector(t);
            if (!a) return !1;
            const D = a.getBoundingClientRect();
            return (
              (window.innerHeight || document.documentElement.clientHeight) -
                D.bottom <=
                M &&
              ((c = n.data) == null ? void 0 : c.name) !==
                "Create Custom Filter"
            );
          },
          de = (t) =>
            t === "action"
              ? "actionOpen"
              : t === "default"
              ? "defaultOpen"
              : "valueOpen",
          je = (t, M) => {
            (N.value = N.value.map((a) =>
              a.index === M ? { ...a, [de(t)]: !a[de(t)] } : a
            )),
              setTimeout(() => {
                $.value = ue(".dropdown_menu_wrapper", 5);
              }, 10);
          },
          Ne = (t, M) => {
            V(),
              (N.value = N.value.map((a) =>
                a.index === M ? { ...a, [de(t)]: !0 } : a
              )),
              setTimeout(() => {
                $.value = ue(".dropdown_menu_wrapper", 5);
              }, 10);
          },
          V = () => {
            N.value = N.value.map((t) => ({
              ...t,
              valueOpen: !1,
              defaultOpen: !1,
              actionOpen: !1,
            }));
          },
          Ee = () => {
            V(), V(), V();
          },
          s = () => {
            setTimeout(() => V(), 100);
          },
          g = (t, M, a, D) => {
            var u, c, T, f, x, C, v, o, S, K, X, ee;
            if (
              ((u = n.data) == null ? void 0 : u.name) ===
              "Create Custom Filter"
            )
              N.value = N.value.map((y) =>
                y.index === a ? { ...y, [M]: t } : y
              );
            else if (
              ((c = n.data) == null ? void 0 : c.name) === "Session Tag"
            ) {
              const y =
                  ((T = N.value.find((O) => O.index === a)) == null
                    ? void 0
                    : T.value) || "",
                oe = String(y).split(", ").includes(t);
              let H = "";
              oe
                ? (H = String(y)
                    .split(", ")
                    .filter((O) => O !== t)
                    .join(", "))
                : (H = y + `${y ? ", " : ""}${t}`),
                (N.value = N.value.map((O) =>
                  O.index === a
                    ? {
                        ...O,
                        [M]: M === "value" ? H : t,
                        segment: D == null ? void 0 : D.definition,
                      }
                    : O
                )),
                M === "default" &&
                  ((h.value = ie.value[t] || []),
                  (Y.value = h.value),
                  (N.value[0].value = ""));
            } else
              (N.value = N.value.map((y) =>
                y.index === a
                  ? { ...y, [M]: t, segment: D == null ? void 0 : D.definition }
                  : y
              )),
                M === "default" &&
                  ((f = n.data) == null ? void 0 : f.name) === "Partners" &&
                  ((h.value =
                    ((v = ((x = R.value) == null ? void 0 : x.experiments)[
                      W(t, (C = R.value) == null ? void 0 : C.partners_friendly)
                    ]) == null
                      ? void 0
                      : v.map((y) =>
                          y.experiment_id
                            ? y.experiment_id + " - " + y.value
                            : y.value
                        )) || []),
                  (Y.value = h.value),
                  (N.value[0].value = ""),
                  (ge.value =
                    (K = (o = R.value) == null ? void 0 : o.experiments) == null
                      ? void 0
                      : K[
                          W(
                            t,
                            (S = R.value) == null ? void 0 : S.partners_friendly
                          )
                        ]));
            M === "value" &&
              (((X = n.data) == null ? void 0 : X.name) === "Partners" &&
                (console.log(ge.value, j(t)),
                (F.value =
                  (ee = ge.value) == null
                    ? void 0
                    : ee.find((y) => y.value === j(t)))),
              (we.value = t)),
              V();
          };
        ((Ve = n.data) == null ? void 0 : Ve.name) === "Session Tag" ||
          ((ve = n.data) == null ? void 0 : ve.name) === "Partners" ||
          (Y.value = void 0);
        const j = (t) => {
            const M = /^[^ -]+ - (.+)$/,
              a = t.match(M);
            return a ? a[1] : t;
          },
          i = async (t, M) => {
            var D, u;
            if (
              ((N.value = N.value.map((c) =>
                c.index === M
                  ? { ...c, action: t.name, segment: t.segment, name: t.name }
                  : c
              )),
              t.options && (re.value.options = t.options),
              t.conditions && (re.value.conditions = t.conditions),
              ((D = n.data) == null ? void 0 : D.name) ===
                "Create Custom Filter" &&
                ((u = t.options) == null ? void 0 : u.length) === 0)
            ) {
              const c = await hn(t.segment);
              c && (t.options = c);
            }
            const a = N.value.findIndex((c) => c.index === M);
            a > -1 && (N.value[a].actionValue = t), V();
          },
          z = () => {
            n.closeSelectModal();
          },
          Ae = () => {
            var u;
            const t = (u = n.data) == null ? void 0 : u.id;
            if (typeof t > "u") return;
            const M = JSON.stringify({
              idSite: J("idSite"),
              definition: "delete",
              filterId: t,
            });
            (E.value = !0),
              fetch(
                "/index.php?module=API&format=json&method=API.processCustomFilters",
                { method: "POST", body: M }
              )
                .then((c) => c.json())
                .then((c) => {
                  var T;
                  if ((c == null ? void 0 : c.status) !== "success") {
                    E.value = !1;
                    return;
                  }
                  B(
                    "item-selected",
                    { id: (T = n.data) == null ? void 0 : T.id },
                    !0
                  ),
                    (E.value = !1),
                    n.closeSelectModal();
                })
                .catch((c) => {
                  console.log({ error: c }),
                    (E.value = !1),
                    n.closeSelectModal();
                });
          },
          pe = (t) => t;
        switch ((be = n.data) == null ? void 0 : be.name) {
          case "Average Order Value":
          case "Create Custom Filter":
            (U.value = ["Equal To", "Less Than", "Greater Than"]),
              (Q.value = U.value);
            break;
          case "Session Tag":
            (h.value = Object.keys(ie.value || {})),
              (U.value = h.value),
              (Q.value = U.value),
              (Y.value = []);
            break;
          case "Partners":
            (h.value = ((Fe = R.value) == null ? void 0 : Fe.partners) || []),
              (U.value = h.value),
              (Q.value = U.value),
              (Y.value = []);
            break;
        }
        const zn = () => {
            var a, D, u, c, T, f, x, C, v, o, S, K, X, ee, y, oe, H;
            const t = ye();
            if (
              !(
                (((a = n.data) == null ? void 0 : a.name) ===
                  "Create Custom Filter" &&
                  t) ||
                !ct(N.value, n.data)
              )
            )
              if (
                ((D = n.data) == null ? void 0 : D.name) ===
                "Create Custom Filter"
              ) {
                const O = N.value
                    .map((p) => p.segment + r[p.default] + p.value)
                    .join(";"),
                  w = N.value.map((p) => ({
                    action: p.action,
                    default: p.default,
                    name: p.name,
                    segment: p.segment,
                    value: p.value,
                  })),
                  q = JSON.stringify({
                    data: w,
                    title: k.value,
                    definition: O,
                    idSite: J("idSite"),
                    deviceType: J("deviceType"),
                    idSiteHsr: J("idSiteHsr"),
                    filterId: n.data.id,
                  });
                (E.value = !0),
                  fetch(
                    "/index.php?module=API&format=json&method=API.processCustomFilters",
                    { method: "POST", body: q }
                  )
                    .then((p) => p.json())
                    .then((p) => {
                      var Ie;
                      if ((p == null ? void 0 : p.status) !== "success") {
                        E.value = !1;
                        return;
                      }
                      B(
                        "item-selected",
                        {
                          name: k.value,
                          definition: O,
                          rawValues: w,
                          id: (Ie = n.data) == null ? void 0 : Ie.id,
                        },
                        !0
                      ),
                        (E.value = !1),
                        n.closeSelectModal();
                    })
                    .catch((p) => {
                      console.log({ error: p }),
                        (E.value = !1),
                        n.closeSelectModal();
                    });
                return;
              } else {
                let O = "";
                if (
                  ((u = n.data) == null ? void 0 : u.name) ===
                  "Average Order Value"
                ) {
                  (O = N.value
                    .map((w) => w.segment + r[w.default] + w.value)
                    .join(";")),
                    B("item-selected", {
                      name: `${(c = n.data) == null ? void 0 : c.name} ${
                        r[N.value[0].default]
                      } ${N.value[0].value}`,
                      definition: encodeURI(O),
                    }),
                    n.closeSelectModal();
                  return;
                }
                if (
                  ((T = n.data) == null ? void 0 : T.name) === "Session Tag"
                ) {
                  const w = N.value[0],
                    [q, te] = (f = w.segment) == null ? void 0 : f.split(";");
                  O = `${q}${w.default};${te}${w.value}`;
                  const De = {
                    url: encodeURIComponent(
                      `?${w.default}=${String(w.value).replace(/\?/g, "&")}`
                    ),
                  };
                  console.log(
                    "return data: ",
                    w.default == "variant" ? De : ""
                  ),
                    B("item-selected", {
                      name: `${(x = n.data) == null ? void 0 : x.name}: ${
                        N.value[0].default
                      }=${N.value[0].value}`,
                      definition: encodeURI(O),
                      rawValues: w.default == "variant" ? De : "",
                    }),
                    n.closeSelectModal();
                  return;
                }
                if (((C = n.data) == null ? void 0 : C.name) === "Partners") {
                  const w = {
                    variantId: (v = F.value) == null ? void 0 : v.variant_id,
                    url: (o = F.value) == null ? void 0 : o.url,
                  };
                  (O += `partnerName==${N.value[0].default};friendlyName==${
                    (S = F.value) == null ? void 0 : S.value
                  }`),
                    (K = F.value) != null &&
                      K.variant_id &&
                      (O += `;variantId==${
                        (X = F.value) == null ? void 0 : X.variant_id
                      }`),
                    (ee = F.value) != null &&
                      ee.experiment_id &&
                      (O += `;experienceId==${
                        (y = F.value) == null ? void 0 : y.experiment_id
                      }`),
                    B("item-selected", {
                      name: `${(oe = n.data) == null ? void 0 : oe.name}: ${
                        N.value[0].value
                      }`,
                      definition: encodeURI(O),
                      rawValues: w,
                    }),
                    n.closeSelectModal();
                  return;
                } else {
                  let w = "";
                  (O = N.value
                    .map((q) => {
                      var te;
                      return (
                        (q.segment ||
                          ((te = n.data) == null ? void 0 : te.definition)) +
                        q.default
                      );
                    })
                    .join(";")),
                    typeof N.value[0].default == "string"
                      ? (w = _e(N.value[0].default))
                      : (w = N.value[0].default),
                    B("item-selected", {
                      name: `${(H = n.data) == null ? void 0 : H.name}: ${w}`,
                      definition: encodeURI(O),
                    }),
                    n.closeSelectModal();
                  return;
                }
              }
          },
          _e = (t) => {
            var M, a, D, u;
            try {
              if (!t) throw new Error("URL is undefined or empty.");
              if (t.startsWith("file://")) {
                const c = t.split("/").filter((T) => T.length > 0);
                return c.length > 0 ? c[c.length - 1] : "unknown";
              } else {
                const c = new URL(t),
                  T = c.hostname,
                  f = T.startsWith("www.") ? T.slice(4) : T,
                  x = c.pathname.split("/").filter((C) => C.length > 0);
                return x.length > 0 ? x[x.length - 1] : f.split(".")[0];
              }
            } catch {
              const T =
                (a = (M = t || "") == null ? void 0 : M.split("/")) == null
                  ? void 0
                  : a.length;
              return (
                ((u = (D = t || "") == null ? void 0 : D.split("/")) == null
                  ? void 0
                  : u[T - 1]) || ""
              );
            }
          },
          Ue = (t) => {
            var M, a, D, u;
            return (
              ((M = _e(t)) == null ? void 0 : M.trim()) ===
                ((u =
                  (D = (a = n.data) == null ? void 0 : a.nameForCompare) == null
                    ? void 0
                    : D.replace(`${n.data.name}:`, "")) == null
                  ? void 0
                  : u.trim()) &&
              !["Partners", "Session Tag"].includes(n.data.name)
            );
          },
          fe = (t) => {
            t
              .composedPath()
              .includes(document.querySelector(".filter_wrapper")) ||
              (V(), V(), V());
          },
          Se = (t, M) => {
            var u, c, T, f, x, C, v, o;
            const a =
                (c =
                  (u = N.value.find((S) => S.index === M)) == null
                    ? void 0
                    : u[t]) == null
                  ? void 0
                  : c.toLowerCase(),
              D = N.value.findIndex((S) => S.index === M);
            t === "default" &&
              ((T = N.value[D].actionValue) != null && T.conditions
                ? (N.value[D].actionValue.conditions =
                    (x = (f = re.value) == null ? void 0 : f.conditions) == null
                      ? void 0
                      : x.filter((S) => S.toLowerCase().includes(a)))
                : (Q.value = U.value.filter((S) =>
                    S.toLowerCase().includes(a)
                  ))),
              t === "value" &&
                ((C = N.value[D].actionValue) != null && C.options
                  ? (N.value[D].actionValue.options =
                      (o = (v = re.value) == null ? void 0 : v.options) == null
                        ? void 0
                        : o.filter((S) => S.toLowerCase().includes(a)))
                  : (Y.value = h.value.filter((S) =>
                      S.toLowerCase().includes(a)
                    ))),
              t === "action" && (ke.value = mn(Oe.value, a)),
              Ne(t, M);
          },
          mn = (t, M) => {
            const a = {},
              D = JSON.parse(JSON.stringify(t));
            for (const u in D) {
              const c = D[u].filter((T) => {
                var f, x, C;
                return (
                  ((x = (f = T.name) == null ? void 0 : f.toLowerCase()) == null
                    ? void 0
                    : x.includes(M.toLowerCase())) ||
                  ((C = u == null ? void 0 : u.toLowerCase()) == null
                    ? void 0
                    : C.includes(M.toLowerCase()))
                );
              });
              c.length > 0 && (a[u] = c);
            }
            return Object.keys(a).length > 0 ? a : Oe.value;
          },
          ce = (t) => t !== "Total Pages Visited",
          yn = (t) => t === "Total Pages Visited",
          ye = () => {
            var M, a, D, u, c, T;
            let t = !1;
            return (
              ((M = k == null ? void 0 : k.value) == null
                ? void 0
                : M.trim()) === ""
                ? ((G.value =
                    "Invalid input: Please enter a name for the filter."),
                  (t = !0))
                : (((a = k == null ? void 0 : k.value) == null
                    ? void 0
                    : a.length) || 0) < 3
                ? ((G.value =
                    "Invalid input: Filter name must be more then 3 characters"),
                  (t = !0))
                : (((D = k == null ? void 0 : k.value) == null
                    ? void 0
                    : D.length) || 0) > 40
                ? ((G.value =
                    "Invalid input: Filter name cannot exceed 40 characters."),
                  (t = !0))
                : (c = n.savedFilters) != null &&
                  c.includes(
                    (u = k == null ? void 0 : k.value) == null
                      ? void 0
                      : u.trim()
                  ) &&
                  !((T = n.data) != null && T.edit) &&
                  ((G.value = "Invalid input: Filter name already exists."),
                  (t = !0)),
              (me.value = t),
              t
            );
          },
          On = (t) => {
            if (ye()) return;
            ke.value = { ...Oe.value };
            const a = N.value[N.value.length - 1].index + 1;
            N.value = [
              ...N.value,
              {
                condition: t,
                index: a,
                action: "",
                default: "",
                value: "",
                actionError: !1,
                actionErrorMsg: "",
                conditionError: !1,
                conditionErrorMsg: "",
                valueError: !1,
                valueErrorMsg: "",
                actionOpen: !1,
                defaultOpen: !1,
                valueOpen: !1,
              },
            ];
          },
          Ln = (t) => {
            N.value = N.value.filter((M) => M.index !== t);
          },
          wn = (t) =>
            t.reduce(
              (M, a) => (
                M[a.category] || (M[a.category] = []), M[a.category].push(a), M
              ),
              {}
            ),
          En = () =>
            St.map((t) => ({
              ...t,
              options: Et[t.segment] || [],
              conditions: Object.values(A[t.option]) || [],
            }));
        function Sn(t) {
          return t.map(
            (M) => (
              typeof M.options == "object" &&
                !Array.isArray(M.options) &&
                (M.options
                  ? (M.options = Object.values(M.options) || [])
                  : (M.options = [])),
              M
            )
          );
        }
        const kn = Sn(En()),
          xn = wn(kn),
          Oe = e.ref(xn),
          ke = e.ref({ ...Oe.value }),
          Cn = (t) =>
            ({
              "Entry Page": "Referrer URL",
              "Traffic Source": "Referrer URL",
              "Total Pages Visited": "Number of visits",
              "Viewed Page": "Action URL",
              "Average Order Value": "Condition",
              "Create Custom Filter": "Condition",
              "Session Tag": "Session Tag Name",
              Partners: "Select Partners Name",
            }[t || ""]),
          pn = (t) =>
            ({
              "Entry Page": "Select",
              "Traffic Source": "Select",
              "Total Pages Visited": "Enter value",
              "Viewed Page": "Select",
              "Average Order Value": "Equals",
              "Create Custom Filter": "Equals",
              "Session Tag": "Select",
              Partners: "Select",
            }[t || ""]),
          _n = (t) =>
            ({
              "Entry Page": "Value",
              "Traffic Source": "",
              "Total Pages Visited": "",
              "Average Order Value": "Value",
              "Create Custom Filter": "Value",
              "Session Tag": "Tag Value",
              Partners: "Select Experiments",
            }[t || ""]),
          he = (t) =>
            ({
              "Entry Page": "Select",
              "Traffic Source": "",
              "Total Pages Visited": "",
              "Average Order Value": "0.00",
              "Create Custom Filter": "Enter value",
              "Session Tag": "Multiselect",
              Partners: "Select",
            }[t || ""]),
          J = (t) => {
            const M = new URL(b.value),
              a = new URLSearchParams(M.search),
              D = new URLSearchParams(M.hash.slice(1));
            return a.get(t) || D.get(t) || "";
          },
          Un = async () => {
            var a, D;
            E.value = !0;
            const [t] =
                ((D = (a = n.data) == null ? void 0 : a.definition) == null
                  ? void 0
                  : D.split("==")) || "",
              M = `/index.php?idSite=${J("idSite")}&idSiteHsr=${J(
                "subcategory"
              )}&method=API.getSuggestedValuesForSegment&module=API&segmentName=${t}`;
            fetch(M)
              .then((u) => u.json())
              .then((u) => {
                var c, T, f, x;
                if (!u) {
                  E.value = !1;
                  return;
                }
                if (((c = n.data) == null ? void 0 : c.name) === "Session Tag")
                  (ie.value = u),
                    (U.value = Object.keys(ie.value || {})),
                    (Q.value = U.value);
                else if (
                  ((T = n.data) == null ? void 0 : T.name) === "Partners"
                ) {
                  (R.value = u),
                    Vn((f = R.value) == null ? void 0 : f.experiments);
                  const C = (x = R.value) == null ? void 0 : x.partners;
                  (U.value =
                    (C == null
                      ? void 0
                      : C.map((v) => {
                          var o, S;
                          return (S =
                            (o = R.value) == null
                              ? void 0
                              : o.partners_friendly) == null
                            ? void 0
                            : S[v];
                        })) || []),
                    (Q.value = U.value);
                } else (U.value = u), (Q.value = u);
                E.value = !1;
              })
              .catch(() => {
                E.value = !1;
              });
          },
          fn = (t) =>
            ["exitPageUrl", "entryPageUrl", "pageUrl"].includes(t)
              ? "entryPageUrl"
              : t,
          hn = async (t) => {
            if (!t) return;
            E.value = !0;
            const M = `/index.php?idSite=${J("idSite")}&idSiteHsr=${J(
              "subcategory"
            )}&method=API.getSuggestedValuesForSegment&module=API&segmentName=${fn(
              t
            )}`;
            try {
              const a = await fetch(M);
              return a.ok ? await a.json() : void 0;
            } catch (a) {
              console.log({ error: a });
              return;
            } finally {
              E.value = !1;
            }
          },
          Qn = (t) =>
            t
              ? [
                  "Entry Page",
                  "Traffic Source",
                  "Session Tag",
                  "Viewed Page",
                  "Partners",
                ].includes(t)
              : !1,
          Yn = (t) => {
            const M = {};
            return t.map((a) => {
              const { value: D } = a;
              return (
                M[D] ? (M[D]++, (a.value = `${D} (${M[D]})`)) : (M[D] = 1), a
              );
            });
          },
          Vn = (t) => {
            const M = {};
            for (const a in t) t.hasOwnProperty(a) && (M[a] = Yn(t[a]));
            return M;
          };
        return (
          e.onMounted(() => {
            var t;
            document.addEventListener("click", fe),
              Qn((t = n.data) == null ? void 0 : t.name) && Un();
          }),
          e.onBeforeUnmount(() => {
            document.removeEventListener("click", fe);
          }),
          e.watch(k, () => {
            ye();
          }),
          (t, M) => {
            var a, D, u, c, T, f, x, C, v;
            return (
              e.openBlock(),
              e.createElementBlock(
                "div",
                {
                  class: e.normalizeClass([
                    "filter_modal",
                    {
                      full_screen:
                        ((a = t.data) == null ? void 0 : a.name) ===
                        "Create Custom Filter",
                    },
                  ]),
                  onClick: Ee,
                },
                [
                  e.createElementVNode(
                    "div",
                    {
                      class: "filter_wrapper",
                      onClick:
                        M[4] || (M[4] = e.withModifiers(() => {}, ["stop"])),
                    },
                    [
                      E.value
                        ? (e.openBlock(),
                          e.createElementBlock("div", kt, [e.createVNode(Ce)]))
                        : e.createCommentVNode("", !0),
                      e.createElementVNode("header", xt, [
                        e.createElementVNode("div", Ct, [
                          (D = t.data) != null && D.iconSrc
                            ? (e.openBlock(),
                              e.createElementBlock(
                                "img",
                                {
                                  key: 0,
                                  class: "filter_image",
                                  src: pe(t.data.iconSrc),
                                  alt: "",
                                },
                                null,
                                8,
                                pt
                              ))
                            : e.createCommentVNode("", !0),
                          e.createElementVNode(
                            "p",
                            _t,
                            e.toDisplayString(
                              L((u = t.data) == null ? void 0 : u.name)
                            ),
                            1
                          ),
                        ]),
                        e.createVNode(
                          lt,
                          { onClick: t.closeSelectModal },
                          null,
                          8,
                          ["onClick"]
                        ),
                      ]),
                      e.createElementVNode(
                        "div",
                        {
                          class: e.normalizeClass([
                            "filter_content",
                            {
                              allow_scroll:
                                ((c = t.data) == null ? void 0 : c.name) ===
                                "Create Custom Filter",
                            },
                          ]),
                        },
                        [
                          e.createElementVNode("div", Ut, [
                            ((T = t.data) == null ? void 0 : T.name) ===
                            "Create Custom Filter"
                              ? (e.openBlock(),
                                e.createElementBlock("div", ft, [
                                  ht,
                                  e.createElementVNode("div", Qt, [
                                    e.withDirectives(
                                      e.createElementVNode(
                                        "input",
                                        {
                                          class: "dropdown_body",
                                          type: "text",
                                          placeholder: he(
                                            (f = t.data) == null
                                              ? void 0
                                              : f.name
                                          ),
                                          "onUpdate:modelValue":
                                            M[0] ||
                                            (M[0] = (o) => (k.value = o)),
                                          onInput: ye,
                                        },
                                        null,
                                        40,
                                        Yt
                                      ),
                                      [[e.vModelDynamic, k.value]]
                                    ),
                                    me.value
                                      ? (e.openBlock(),
                                        e.createElementBlock(
                                          "p",
                                          Vt,
                                          e.toDisplayString(G.value),
                                          1
                                        ))
                                      : e.createCommentVNode("", !0),
                                  ]),
                                  vt,
                                ]))
                              : e.createCommentVNode("", !0),
                            (e.openBlock(!0),
                            e.createElementBlock(
                              e.Fragment,
                              null,
                              e.renderList(N.value, (o, S) => {
                                var K,
                                  X,
                                  ee,
                                  y,
                                  oe,
                                  H,
                                  O,
                                  w,
                                  q,
                                  te,
                                  De,
                                  p,
                                  Ie,
                                  Be,
                                  Pe,
                                  Ze,
                                  Re,
                                  Ge,
                                  $e,
                                  We,
                                  He,
                                  qe,
                                  Je;
                                return (
                                  e.openBlock(),
                                  e.createElementBlock(
                                    e.Fragment,
                                    { key: o.index },
                                    [
                                      S
                                        ? (e.openBlock(),
                                          e.createElementBlock("div", bt, [
                                            e.createElementVNode("div", Ft, [
                                              e.createElementVNode(
                                                "div",
                                                null,
                                                e.toDisplayString(o.condition),
                                                1
                                              ),
                                            ]),
                                          ]))
                                        : e.createCommentVNode("", !0),
                                      ((K = t.data) == null
                                        ? void 0
                                        : K.name) === "Create Custom Filter"
                                        ? (e.openBlock(),
                                          e.createElementBlock("div", Bt, [
                                            Pt,
                                            e.createElementVNode("div", Zt, [
                                              ce(
                                                (X = t.data) == null
                                                  ? void 0
                                                  : X.name
                                              )
                                                ? (e.openBlock(),
                                                  e.createElementBlock(
                                                    "div",
                                                    {
                                                      key: 0,
                                                      class: e.normalizeClass([
                                                        "arrow_button_wrapper",
                                                        {
                                                          we_have_error:
                                                            o.actionError,
                                                        },
                                                      ]),
                                                      onClick: (m) =>
                                                        je("action", o.index),
                                                    },
                                                    [
                                                      e.createVNode(
                                                        ze,
                                                        {
                                                          isDropdownOpen:
                                                            o.actionOpen,
                                                        },
                                                        null,
                                                        8,
                                                        ["isDropdownOpen"]
                                                      ),
                                                    ],
                                                    10,
                                                    Rt
                                                  ))
                                                : e.createCommentVNode("", !0),
                                              e.withDirectives(
                                                e.createElementVNode(
                                                  "input",
                                                  {
                                                    class: e.normalizeClass([
                                                      "dropdown_body",
                                                      {
                                                        has_arrow: ce(
                                                          (ee = t.data) == null
                                                            ? void 0
                                                            : ee.name
                                                        ),
                                                      },
                                                    ]),
                                                    type: "text",
                                                    placeholder: "Select",
                                                    onFocus: (m) =>
                                                      Ne("action", o.index),
                                                    onInput: (m) =>
                                                      Se("action", o.index),
                                                    "onUpdate:modelValue": (
                                                      m
                                                    ) => (o.action = m),
                                                  },
                                                  null,
                                                  42,
                                                  Gt
                                                ),
                                                [[e.vModelDynamic, o.action]]
                                              ),
                                              o.actionError
                                                ? (e.openBlock(),
                                                  e.createElementBlock(
                                                    "p",
                                                    $t,
                                                    e.toDisplayString(
                                                      o.actionErrorMsg
                                                    ),
                                                    1
                                                  ))
                                                : e.createCommentVNode("", !0),
                                              e.createVNode(
                                                e.Transition,
                                                { name: "dropdown" },
                                                {
                                                  default: e.withCtx(() => {
                                                    var m;
                                                    return [
                                                      e.withDirectives(
                                                        e.createElementVNode(
                                                          "ul",
                                                          {
                                                            id: "accordion",
                                                            class:
                                                              e.normalizeClass([
                                                                "dropdown_menu_wrapper",
                                                                {
                                                                  align_center:
                                                                    $.value,
                                                                },
                                                              ]),
                                                          },
                                                          [
                                                            (e.openBlock(!0),
                                                            e.createElementBlock(
                                                              e.Fragment,
                                                              null,
                                                              e.renderList(
                                                                ke.value,
                                                                (se, P) => (
                                                                  e.openBlock(),
                                                                  e.createElementBlock(
                                                                    "li",
                                                                    { key: P },
                                                                    [
                                                                      e.createElementVNode(
                                                                        "label",
                                                                        {
                                                                          for:
                                                                            String(
                                                                              P
                                                                            ) +
                                                                            o.index,
                                                                          class:
                                                                            e.normalizeClass(
                                                                              [
                                                                                "dropdown_menu_item action",
                                                                                {
                                                                                  activeClass:
                                                                                    P ===
                                                                                    o.action,
                                                                                },
                                                                              ]
                                                                            ),
                                                                        },
                                                                        [
                                                                          e.createElementVNode(
                                                                            "p",
                                                                            null,
                                                                            e.toDisplayString(
                                                                              P
                                                                            ),
                                                                            1
                                                                          ),
                                                                          e.createVNode(
                                                                            ze,
                                                                            {
                                                                              id: "inner_arrow",
                                                                            }
                                                                          ),
                                                                        ],
                                                                        10,
                                                                        Wt
                                                                      ),
                                                                      e.createElementVNode(
                                                                        "input",
                                                                        {
                                                                          type: "checkbox",
                                                                          name: "accordion",
                                                                          id:
                                                                            String(
                                                                              P
                                                                            ) +
                                                                            o.index,
                                                                          hidden:
                                                                            "",
                                                                        },
                                                                        null,
                                                                        8,
                                                                        Ht
                                                                      ),
                                                                      e.createElementVNode(
                                                                        "ul",
                                                                        qt,
                                                                        [
                                                                          (e.openBlock(
                                                                            !0
                                                                          ),
                                                                          e.createElementBlock(
                                                                            e.Fragment,
                                                                            null,
                                                                            e.renderList(
                                                                              se,
                                                                              (
                                                                                _
                                                                              ) => {
                                                                                var Te;
                                                                                return (
                                                                                  e.openBlock(),
                                                                                  e.createElementBlock(
                                                                                    "li",
                                                                                    {
                                                                                      key: _.name,
                                                                                      class:
                                                                                        e.normalizeClass(
                                                                                          [
                                                                                            "dropdown_menu_item inner_items",
                                                                                            {
                                                                                              activeClass:
                                                                                                _.name ===
                                                                                                ((Te =
                                                                                                  o.actionValue) ==
                                                                                                null
                                                                                                  ? void 0
                                                                                                  : Te.name),
                                                                                            },
                                                                                          ]
                                                                                        ),
                                                                                      onClick:
                                                                                        (
                                                                                          vn
                                                                                        ) =>
                                                                                          i(
                                                                                            _,
                                                                                            o.index
                                                                                          ),
                                                                                    },
                                                                                    [
                                                                                      e.createElementVNode(
                                                                                        "p",
                                                                                        null,
                                                                                        e.toDisplayString(
                                                                                          _.name
                                                                                        ),
                                                                                        1
                                                                                      ),
                                                                                      _.needsMostFrequentValues &&
                                                                                      _.acceptedValues
                                                                                        ? (e.openBlock(),
                                                                                          e.createElementBlock(
                                                                                            "div",
                                                                                            {
                                                                                              key: 0,
                                                                                              class:
                                                                                                "help_icon_inner",
                                                                                              title:
                                                                                                _.acceptedValues,
                                                                                            },
                                                                                            [
                                                                                              e.createElementVNode(
                                                                                                "img",
                                                                                                {
                                                                                                  class:
                                                                                                    "filter_image",
                                                                                                  src: pe(
                                                                                                    e.unref(
                                                                                                      rt
                                                                                                    )
                                                                                                  ),
                                                                                                  alt: "",
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                Xt
                                                                                              ),
                                                                                            ],
                                                                                            8,
                                                                                            Kt
                                                                                          ))
                                                                                        : e.createCommentVNode(
                                                                                            "",
                                                                                            !0
                                                                                          ),
                                                                                    ],
                                                                                    10,
                                                                                    Jt
                                                                                  )
                                                                                );
                                                                              }
                                                                            ),
                                                                            128
                                                                          )),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  )
                                                                )
                                                              ),
                                                              128
                                                            )),
                                                          ],
                                                          2
                                                        ),
                                                        [
                                                          [
                                                            e.vShow,
                                                            o.actionOpen &&
                                                              ce(
                                                                (m = t.data) ==
                                                                  null
                                                                  ? void 0
                                                                  : m.name
                                                              ),
                                                          ],
                                                        ]
                                                      ),
                                                    ];
                                                  }),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                          ]))
                                        : e.createCommentVNode("", !0),
                                      e.createElementVNode("div", eM, [
                                        e.createElementVNode(
                                          "p",
                                          tM,
                                          e.toDisplayString(
                                            Cn(
                                              (y = t.data) == null
                                                ? void 0
                                                : y.name
                                            )
                                          ),
                                          1
                                        ),
                                        e.createElementVNode("div", MM, [
                                          ce(
                                            (oe = t.data) == null
                                              ? void 0
                                              : oe.name
                                          )
                                            ? (e.openBlock(),
                                              e.createElementBlock(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: e.normalizeClass([
                                                    "arrow_button_wrapper",
                                                    {
                                                      we_have_error:
                                                        o.conditionError,
                                                    },
                                                  ]),
                                                  onClick: (m) =>
                                                    je("default", o.index),
                                                },
                                                [
                                                  e.createVNode(
                                                    ze,
                                                    {
                                                      isDropdownOpen:
                                                        o.defaultOpen,
                                                    },
                                                    null,
                                                    8,
                                                    ["isDropdownOpen"]
                                                  ),
                                                ],
                                                10,
                                                nM
                                              ))
                                            : e.createCommentVNode("", !0),
                                          e.withDirectives(
                                            e.createElementVNode(
                                              "input",
                                              {
                                                class: e.normalizeClass([
                                                  "dropdown_body",
                                                  {
                                                    has_arrow: ce(
                                                      (H = t.data) == null
                                                        ? void 0
                                                        : H.name
                                                    ),
                                                  },
                                                ]),
                                                type: yn(
                                                  (O = t.data) == null
                                                    ? void 0
                                                    : O.name
                                                )
                                                  ? "number"
                                                  : "text",
                                                placeholder: pn(
                                                  (w = t.data) == null
                                                    ? void 0
                                                    : w.name
                                                ),
                                                onBlur:
                                                  M[1] || (M[1] = (m) => s()),
                                                onFocus: (m) =>
                                                  Ne("default", o.index),
                                                onInput: (m) =>
                                                  Se("default", o.index),
                                                "onUpdate:modelValue": (m) =>
                                                  (o.default = m),
                                              },
                                              null,
                                              42,
                                              aM
                                            ),
                                            [[e.vModelDynamic, o.default]]
                                          ),
                                          o.conditionError
                                            ? (e.openBlock(),
                                              e.createElementBlock(
                                                "p",
                                                iM,
                                                e.toDisplayString(
                                                  o.conditionErrorMsg
                                                ),
                                                1
                                              ))
                                            : e.createCommentVNode("", !0),
                                          e.createVNode(
                                            e.Transition,
                                            { name: "dropdown" },
                                            {
                                              default: e.withCtx(() => {
                                                var m, se, P;
                                                return [
                                                  e.withDirectives(
                                                    e.createElementVNode(
                                                      "ul",
                                                      {
                                                        class: e.normalizeClass(
                                                          [
                                                            "dropdown_menu_wrapper",
                                                            {
                                                              align_center:
                                                                $.value,
                                                            },
                                                          ]
                                                        ),
                                                      },
                                                      [
                                                        (e.openBlock(!0),
                                                        e.createElementBlock(
                                                          e.Fragment,
                                                          null,
                                                          e.renderList(
                                                            ((m =
                                                              o.actionValue) ==
                                                            null
                                                              ? void 0
                                                              : m.conditions) ||
                                                              Q.value,
                                                            (_) => (
                                                              e.openBlock(),
                                                              e.createElementBlock(
                                                                "li",
                                                                {
                                                                  key: _,
                                                                  class:
                                                                    e.normalizeClass(
                                                                      [
                                                                        "dropdown_menu_item",
                                                                        {
                                                                          disabled_me:
                                                                            Ue(
                                                                              _
                                                                            ),
                                                                          activeClass:
                                                                            _ ===
                                                                            o.default,
                                                                        },
                                                                      ]
                                                                    ),
                                                                  onClick: (
                                                                    Te
                                                                  ) =>
                                                                    Ue(_)
                                                                      ? void 0
                                                                      : g(
                                                                          _,
                                                                          "default",
                                                                          o.index,
                                                                          t.data
                                                                        ),
                                                                },
                                                                e.toDisplayString(
                                                                  _
                                                                ),
                                                                11,
                                                                oM
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                      ],
                                                      2
                                                    ),
                                                    [
                                                      [
                                                        e.vShow,
                                                        o.defaultOpen &&
                                                          ce(
                                                            (se = t.data) ==
                                                              null
                                                              ? void 0
                                                              : se.name
                                                          ) &&
                                                          (
                                                            ((P =
                                                              o.actionValue) ==
                                                            null
                                                              ? void 0
                                                              : P.conditions) ||
                                                            Q.value
                                                          ).length > 0,
                                                      ],
                                                    ]
                                                  ),
                                                ];
                                              }),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                      ]),
                                      (q = t.data) != null && q.showSign
                                        ? (e.openBlock(),
                                          e.createElementBlock("div", sM, [
                                            e.createElementVNode(
                                              "p",
                                              lM,
                                              e.toDisplayString(
                                                _n(
                                                  (te = t.data) == null
                                                    ? void 0
                                                    : te.name
                                                )
                                              ),
                                              1
                                            ),
                                            e.createElementVNode("div", rM, [
                                              ((p =
                                                (De = o.actionValue) == null
                                                  ? void 0
                                                  : De.options) != null &&
                                                p.length) ||
                                              ((Ie = Y.value) != null &&
                                                Ie.length)
                                                ? (e.openBlock(),
                                                  e.createElementBlock(
                                                    "div",
                                                    {
                                                      key: 0,
                                                      class: e.normalizeClass([
                                                        "arrow_button_wrapper",
                                                        {
                                                          we_have_error:
                                                            o.valueError,
                                                        },
                                                      ]),
                                                      onClick: (m) =>
                                                        je("value", o.index),
                                                    },
                                                    [
                                                      e.createVNode(
                                                        ze,
                                                        {
                                                          isDropdownOpen:
                                                            o.valueOpen,
                                                        },
                                                        null,
                                                        8,
                                                        ["isDropdownOpen"]
                                                      ),
                                                    ],
                                                    10,
                                                    NM
                                                  ))
                                                : e.createCommentVNode("", !0),
                                              e.withDirectives(
                                                e.createElementVNode(
                                                  "input",
                                                  {
                                                    class: e.normalizeClass([
                                                      "dropdown_body",
                                                      {
                                                        second_one:
                                                          ((Be = t.data) == null
                                                            ? void 0
                                                            : Be.name) ===
                                                          "Average Order Value",
                                                        has_arrow:
                                                          ((Ze =
                                                            (Pe =
                                                              o.actionValue) ==
                                                            null
                                                              ? void 0
                                                              : Pe.options) ==
                                                          null
                                                            ? void 0
                                                            : Ze.length) ||
                                                          ((Re = Y.value) ==
                                                          null
                                                            ? void 0
                                                            : Re.length),
                                                      },
                                                    ]),
                                                    type:
                                                      ($e =
                                                        (Ge = o.actionValue) ==
                                                        null
                                                          ? void 0
                                                          : Ge.options) !=
                                                        null && $e.length
                                                        ? "text"
                                                        : ((We =
                                                            o.actionValue) ==
                                                          null
                                                            ? void 0
                                                            : We.option) ===
                                                          "number"
                                                        ? "number"
                                                        : "text",
                                                    placeholder: he(
                                                      (He = t.data) == null
                                                        ? void 0
                                                        : He.name
                                                    ),
                                                    onInput: (m) =>
                                                      Se("value", o.index),
                                                    "onUpdate:modelValue": (
                                                      m
                                                    ) => (o.value = m),
                                                    onBlur:
                                                      M[2] ||
                                                      (M[2] = (m) => s()),
                                                    onFocus: (m) =>
                                                      Ne("value", o.index),
                                                  },
                                                  null,
                                                  42,
                                                  cM
                                                ),
                                                [[e.vModelDynamic, o.value]]
                                              ),
                                              ((qe = t.data) == null
                                                ? void 0
                                                : qe.name) ===
                                              "Average Order Value"
                                                ? (e.openBlock(),
                                                  e.createElementBlock(
                                                    "div",
                                                    {
                                                      key: 1,
                                                      class: e.normalizeClass([
                                                        "absolute_placehopder",
                                                        {
                                                          align_center: $.value,
                                                        },
                                                      ]),
                                                    },
                                                    " $ ",
                                                    2
                                                  ))
                                                : e.createCommentVNode("", !0),
                                              o.valueError
                                                ? (e.openBlock(),
                                                  e.createElementBlock(
                                                    "p",
                                                    DM,
                                                    e.toDisplayString(
                                                      o.valueErrorMsg
                                                    ),
                                                    1
                                                  ))
                                                : e.createCommentVNode("", !0),
                                              e.createVNode(
                                                e.Transition,
                                                { name: "dropdown" },
                                                {
                                                  default: e.withCtx(() => {
                                                    var m, se, P;
                                                    return [
                                                      e.withDirectives(
                                                        e.createElementVNode(
                                                          "ul",
                                                          {
                                                            class:
                                                              e.normalizeClass([
                                                                "dropdown_menu_wrapper",
                                                                {
                                                                  align_center:
                                                                    $.value,
                                                                },
                                                              ]),
                                                          },
                                                          [
                                                            (e.openBlock(!0),
                                                            e.createElementBlock(
                                                              e.Fragment,
                                                              null,
                                                              e.renderList(
                                                                ((m =
                                                                  o.actionValue) ==
                                                                null
                                                                  ? void 0
                                                                  : m.options) ||
                                                                  Y.value,
                                                                (_, Te) => (
                                                                  e.openBlock(),
                                                                  e.createElementBlock(
                                                                    "li",
                                                                    {
                                                                      key:
                                                                        _ + Te,
                                                                      class:
                                                                        e.normalizeClass(
                                                                          [
                                                                            "dropdown_menu_item",
                                                                            {
                                                                              activeClass:
                                                                                String(
                                                                                  o.value
                                                                                )
                                                                                  .split(
                                                                                    ", "
                                                                                  )
                                                                                  .includes(
                                                                                    _
                                                                                  ) ||
                                                                                _ ===
                                                                                  o.value,
                                                                            },
                                                                          ]
                                                                        ),
                                                                      onClick: (
                                                                        vn
                                                                      ) =>
                                                                        g(
                                                                          _,
                                                                          "value",
                                                                          o.index,
                                                                          t.data
                                                                        ),
                                                                    },
                                                                    e.toDisplayString(
                                                                      _
                                                                    ),
                                                                    11,
                                                                    gM
                                                                  )
                                                                )
                                                              ),
                                                              128
                                                            )),
                                                          ],
                                                          2
                                                        ),
                                                        [
                                                          [
                                                            e.vShow,
                                                            o.valueOpen &&
                                                              ((P =
                                                                ((se =
                                                                  o.actionValue) ==
                                                                null
                                                                  ? void 0
                                                                  : se.options) ||
                                                                Y.value) == null
                                                                ? void 0
                                                                : P.length),
                                                          ],
                                                        ]
                                                      ),
                                                    ];
                                                  }),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                          ]))
                                        : e.createCommentVNode("", !0),
                                      ((Je = t.data) == null
                                        ? void 0
                                        : Je.name) === "Create Custom Filter" &&
                                      N.value.length > 1
                                        ? (e.openBlock(),
                                          e.createElementBlock("div", uM, [
                                            e.createElementVNode(
                                              "div",
                                              {
                                                class: "remove_custom",
                                                onClick: (m) => Ln(o.index),
                                              },
                                              jM,
                                              8,
                                              dM
                                            ),
                                          ]))
                                        : e.createCommentVNode("", !0),
                                    ],
                                    64
                                  )
                                );
                              }),
                              128
                            )),
                          ]),
                          ((x = t.data) == null ? void 0 : x.name) ===
                          "Create Custom Filter"
                            ? (e.openBlock(),
                              e.createElementBlock(
                                "div",
                                {
                                  key: 0,
                                  class: "add_custom_filter_wrapper",
                                  onClick: M[3] || (M[3] = (o) => On("and")),
                                },
                                AM
                              ))
                            : e.createCommentVNode("", !0),
                        ],
                        2
                      ),
                      e.createElementVNode("footer", IM, [
                        e.createElementVNode("div", TM, [
                          e.createElementVNode("div", zM, [
                            e.createElementVNode(
                              "div",
                              { class: "footer_button", onClick: z },
                              mM
                            ),
                            (C = n.data) != null && C.edit
                              ? (e.openBlock(),
                                e.createElementBlock(
                                  "div",
                                  {
                                    key: 0,
                                    class: "footer_button color_red_for_delete",
                                    onClick: Ae,
                                  },
                                  yM
                                ))
                              : e.createCommentVNode("", !0),
                          ]),
                          e.createElementVNode(
                            "div",
                            {
                              class: e.normalizeClass([
                                "footer_button primary_button",
                                { disabled_me: !1 },
                              ]),
                              onClick: zn,
                            },
                            [
                              e.createElementVNode(
                                "p",
                                OM,
                                e.toDisplayString(
                                  ((v = t.data) == null ? void 0 : v.name) ===
                                    "Create Custom Filter"
                                    ? "Save"
                                    : "Next"
                                ),
                                1
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ],
                2
              )
            );
          }
        );
      },
    }),
    Hn = "",
    wM = ne(LM, [["__scopeId", "data-v-7bec554d"]]),
    le = (l) => (
      e.pushScopeId("data-v-8301638f"), (l = l()), e.popScopeId(), l
    ),
    EM = { class: "heat_custom_filter_absolute" },
    SM = { class: "heat_custom_filter" },
    kM = { class: "heat_custom_filter_header" },
    xM = { class: "heat_custom_filter_header_text" },
    CM = { class: "right_button not_clickable new_color insideCompare" },
    pM = { class: "right_button_text" },
    _M = { key: 0, class: "heat_custom_filter_header_text" },
    UM = { key: 1, class: "right_button not_clickable awaiting" },
    fM = [
      le(() =>
        e.createElementVNode(
          "p",
          { class: "right_button_text" },
          "Select a filter",
          -1
        )
      ),
    ],
    hM = { class: "filter_body" },
    QM = { class: "filter_body_column" },
    YM = le(() =>
      e.createElementVNode(
        "header",
        { class: "filter_body_column_head" },
        [
          e.createElementVNode(
            "p",
            { class: "filter_body_column_head_text" },
            "Session Data"
          ),
        ],
        -1
      )
    ),
    VM = { class: "filter_body_filters" },
    vM = ["data-idsegment", "data-definition", "data-title", "onClick"],
    bM = ["src"],
    FM = { class: "filter_body_filter_text" },
    BM = { class: "filter_body_column" },
    PM = le(() =>
      e.createElementVNode(
        "header",
        { class: "filter_body_column_head" },
        [
          e.createElementVNode(
            "p",
            { class: "filter_body_column_head_text" },
            "Ecommerce Data"
          ),
        ],
        -1
      )
    ),
    ZM = { class: "filter_body_filters" },
    RM = ["data-idsegment", "data-definition", "data-title", "onClick"],
    GM = ["src"],
    $M = { class: "filter_body_filter_text" },
    WM = { class: "filter_body_column" },
    HM = le(() =>
      e.createElementVNode(
        "header",
        { class: "filter_body_column_head" },
        [
          e.createElementVNode(
            "p",
            { class: "filter_body_column_head_text" },
            "Custom Filters"
          ),
        ],
        -1
      )
    ),
    qM = { class: "filter_body_filters" },
    JM = { key: 0, class: "loader_wrapper main_page" },
    KM = ["data-idsegment", "data-definition", "data-title", "onClick"],
    XM = ["src"],
    en = { class: "filter_body_filter_text" },
    tn = ["onClick"],
    Mn = ["src"],
    nn = [
      le(() =>
        e.createElementVNode(
          "p",
          { class: "add_custom_filter_text" },
          "Add Custom",
          -1
        )
      ),
    ],
    an = { class: "heat_custom_filter_footer" },
    on = { class: "left_button" },
    sn = { class: "right_buttons" },
    ln = [
      le(() =>
        e.createElementVNode(
          "p",
          { class: "right_button_text" },
          "Compare to...",
          -1
        )
      ),
    ],
    rn = e.defineComponent({
      __name: "FilterComponent",
      props: { onToggleShowFilterMenu: { type: Function }, defaultValues: {} },
      emits: ["filter-values", "reset-all-filters"],
      setup(l, { emit: d }) {
        const A = l,
          r = d,
          I = e.ref([]),
          n = e.ref({ active: void 0, pendingList: [] }),
          B = e.ref(window.location.href),
          Z = e.ref(!1),
          L = e.ref(),
          W = e.ref(!1),
          b = e.ref(!1),
          U = e.ref(),
          h = e.ref(""),
          Q = e.ref(!1),
          ie = e.ref();
        function R(s) {
          return s;
        }
        const ge = e.computed(() => n.value.pendingList.length === 2);
        function F(s) {
          var i;
          const g = n.value.pendingList.map((z) => z.name).includes(s.name),
            j =
              (i = n.value.pendingList.find((z) => z.name === s.name)) == null
                ? void 0
                : i.isDefinitionValueSet;
          (g && j) ||
            ((U.value = []),
            s.isDefinitionValueSet
              ? ((h.value = ""),
                (n.value.active = s),
                n.value.pendingList.length === 1 && k())
              : ((Z.value = !0),
                (s != null && s.showSign) || (s.showSign = !1),
                (L.value = { ...L.value, ...s, edit: !1 })));
        }
        function Y(s) {
          var g, j, i;
          return (
            ((j = (g = U.value) == null ? void 0 : g.map((z) => z.name)) == null
              ? void 0
              : j.includes(s)) ||
            ((i = n.value.active) == null ? void 0 : i.name) === s
          );
        }
        function we() {
          (L.value = {
            name: "Create Custom Filter",
            definition: "",
            iconSrc: "",
            idsegment: 0,
            title: "",
            showSign: !0,
          }),
            (Z.value = !0);
        }
        function k(s) {
          if (n.value.active) {
            const g = s ? L.value : n.value.active;
            (n.value.pendingList = [
              ...n.value.pendingList,
              { ...g, nameForCompare: h.value },
            ]),
              (n.value.active = void 0);
          }
          L.value && (L.value = { ...L.value, nameForCompare: h.value }),
            me(n.value.pendingList);
        }
        const me = (s) => {
          const g = [...s];
          for (let j = 0; j < g.length; j++)
            for (let i = j + 1; i < g.length; i++)
              g[j].name === g[i].name &&
                ((g[j].name = g[j].nameForCompare),
                (g[i].name = g[i].nameForCompare));
          return g;
        };
        function G(s, g) {
          (n.value.pendingList = []),
            (n.value.active = void 0),
            (n.value.pendingList = []),
            (U.value = []),
            (h.value = ""),
            (L.value = void 0),
            g &&
              ((W.value = !0),
              r("filter-values", []),
              A.onToggleShowFilterMenu()),
            s && r("reset-all-filters");
        }
        function E(s) {
          var z;
          const g = n.value.pendingList.map((Ae) => Ae.name).indexOf(s),
            j =
              (z = n.value.pendingList.find((Ae) => Ae.name === s)) == null
                ? void 0
                : z.isDefinitionValueSet,
            i = n.value.pendingList.length === 2;
          return !!((g >= 0 && j) || i);
        }
        const re = e.computed(() => n.value.pendingList.length > 0);
        function $(s) {
          return n.value.pendingList.map((g) => g.name).includes(s);
        }
        function N() {
          Z.value = !1;
        }
        const ue = e.computed(() => {
          var s;
          return (
            n.value.pendingList.length > 0 ||
            !!((s = n.value.active) != null && s.name)
          );
        });
        function de(s, g) {
          if (!s.name) {
            I.value = I.value.filter((j) => j.id !== s.id);
            return;
          }
          if (g) {
            let j = !0;
            (I.value = I.value.map((i) =>
              i.id === s.id
                ? ((j = !1),
                  {
                    ...i,
                    title: s.name,
                    definition: s.definition,
                    rawValues: s.rawValues,
                  })
                : i
            )),
              j &&
                (I.value = [
                  {
                    definition: s.definition,
                    iconSrc: Le,
                    idsegment: 2,
                    name: s.name,
                    title: s.name,
                    isDefinitionValueSet: !0,
                    rawValues: s.rawValues,
                  },
                  ...I.value,
                ]);
          }
          L.value &&
            ((h.value = s.name),
            (L.value = { ...L.value, definition: `${s.definition}` }),
            s.rawValues && (L.value = { ...L.value, rawValues: s.rawValues }),
            (n.value.active = L.value),
            n.value.pendingList.length === 1 &&
              !g &&
              ((n.value.active = { ...L.value, nameForCompare: h.value }),
              k(!0)));
        }
        function je() {
          var g;
          if (!ue.value && !W.value) return;
          n.value.pendingList.length === 0 &&
            (g = n.value.active) != null &&
            g.name &&
            (n.value.pendingList = [n.value.active]);
          let s = n.value.pendingList.map((j) => ({
            definition: j.definition,
            name: j.nameForCompare || j.name,
            rest: j.rawValues,
          }));
          s.length === 1 &&
            h.value &&
            (s = s.map((j) => ({ ...j, name: h.value }))),
            r("filter-values", s),
            G(),
            A.onToggleShowFilterMenu();
        }
        const Ne = (s) => {
          (s.showSign = !0),
            (L.value = {
              ...s,
              name: "Create Custom Filter",
              edit: !0,
              iconSrc: xe,
            }),
            (Z.value = !0);
        };
        e.watch(
          () => A.defaultValues,
          (s) => {
            U.value = s;
          },
          { immediate: !0 }
        );
        const V = (s) => {
            const g = new URL(B.value),
              j = new URLSearchParams(g.search),
              i = new URLSearchParams(g.hash.slice(1));
            return j.get(s) || i.get(s) || "";
          },
          Ee = async () => {
            Q.value = !0;
            const g = {
              method: "POST",
              body: JSON.stringify({
                idSite: V("idSite"),
                deviceType: V("deviceType"),
                idSiteHsr: V("idSiteHsr"),
              }),
            };
            fetch(
              "/index.php?module=API&format=json&method=API.processCustomFilters",
              g
            )
              .then((i) => i.json())
              .then((i) => {
                if (!i) {
                  Q.value = !1;
                  return;
                }
                i.message &&
                  ((I.value = i.message.map((z) => ({
                    definition: z.definition,
                    iconSrc: Le,
                    idsegment: 2,
                    name: z.title,
                    title: z.title,
                    isDefinitionValueSet: !0,
                    rawValues: z.data,
                    ...z,
                  }))),
                  (ie.value = i.message.map((z) => z.title))),
                  (Q.value = !1);
              })
              .catch((i) => {
                console.log({ error: i }), (Q.value = !1);
              });
          };
        return (
          e.onMounted(() => {
            G(),
              Ee(),
              document.addEventListener("reset-all-filters-event", () => {
                G(!0);
              }),
              document.addEventListener("disable-comparison-event", (s) => {
                b.value = s.detail.disabled;
              });
          }),
          (s, g) => {
            var j;
            return (
              e.openBlock(),
              e.createElementBlock("div", EM, [
                e.createElementVNode("div", SM, [
                  Z.value
                    ? (e.openBlock(),
                      e.createBlock(
                        wM,
                        {
                          key: 0,
                          closeSelectModal: N,
                          data: L.value,
                          savedFilters: ie.value,
                          onItemSelected: de,
                        },
                        null,
                        8,
                        ["data", "savedFilters"]
                      ))
                    : e.createCommentVNode("", !0),
                  e.createElementVNode(
                    "div",
                    {
                      class: e.normalizeClass([
                        "heat_custom_filter_body",
                        {
                          blur_me:
                            ((j = L.value) == null ? void 0 : j.name) ===
                              "Create Custom Filter" && Z.value,
                        },
                      ]),
                    },
                    [
                      e.createElementVNode("header", kM, [
                        e.createElementVNode(
                          "p",
                          xM,
                          e.toDisplayString(
                            re.value ? "Compare" : "All Filters"
                          ),
                          1
                        ),
                        (e.openBlock(!0),
                        e.createElementBlock(
                          e.Fragment,
                          null,
                          e.renderList(
                            n.value.pendingList.slice(0, 2),
                            (i, z) => (
                              e.openBlock(),
                              e.createElementBlock(
                                e.Fragment,
                                { key: i.nameForCompare || i.name },
                                [
                                  e.createElementVNode("div", CM, [
                                    e.createElementVNode(
                                      "p",
                                      pM,
                                      e.toDisplayString(
                                        i.nameForCompare || i.name
                                      ),
                                      1
                                    ),
                                  ]),
                                  z < 1
                                    ? (e.openBlock(),
                                      e.createElementBlock("p", _M, "to"))
                                    : e.createCommentVNode("", !0),
                                  z === n.value.pendingList.length - 1 && z < 1
                                    ? (e.openBlock(),
                                      e.createElementBlock("div", UM, fM))
                                    : e.createCommentVNode("", !0),
                                ],
                                64
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      e.createElementVNode("div", hM, [
                        e.createElementVNode("div", QM, [
                          YM,
                          e.createElementVNode("ul", VM, [
                            (e.openBlock(!0),
                            e.createElementBlock(
                              e.Fragment,
                              null,
                              e.renderList(
                                e.unref(Lt),
                                (i) => (
                                  e.openBlock(),
                                  e.createElementBlock(
                                    "li",
                                    {
                                      key: i.name,
                                      "data-idsegment": i.idsegment,
                                      "data-definition": i.definition,
                                      "data-title": i.title,
                                      onClick: (z) =>
                                        E(i.name) ? void 0 : F(i),
                                      class: e.normalizeClass([
                                        "filter_body_filter",
                                        {
                                          pendingClass: $(i.name),
                                          activeClass: Y(i.name),
                                          disabled_me: E(i.name),
                                        },
                                      ]),
                                    },
                                    [
                                      e.createElementVNode(
                                        "img",
                                        {
                                          class: "filter_image",
                                          src: i.iconSrc,
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        bM
                                      ),
                                      e.createElementVNode(
                                        "p",
                                        FM,
                                        e.toDisplayString(i.name),
                                        1
                                      ),
                                    ],
                                    10,
                                    vM
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                        e.createElementVNode("div", BM, [
                          PM,
                          e.createElementVNode("ul", ZM, [
                            (e.openBlock(!0),
                            e.createElementBlock(
                              e.Fragment,
                              null,
                              e.renderList(
                                e.unref(wt),
                                (i) => (
                                  e.openBlock(),
                                  e.createElementBlock(
                                    "li",
                                    {
                                      key: i.name,
                                      "data-idsegment": i.idsegment,
                                      "data-definition": i.definition,
                                      "data-title": i.title,
                                      onClick: (z) =>
                                        E(i.name) ? void 0 : F(i),
                                      class: e.normalizeClass([
                                        "filter_body_filter",
                                        {
                                          pendingClass: $(i.name),
                                          activeClass: Y(i.name),
                                          disabled_me: E(i.name),
                                        },
                                      ]),
                                    },
                                    [
                                      e.createElementVNode(
                                        "img",
                                        {
                                          class: "filter_image",
                                          src: i.iconSrc,
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        GM
                                      ),
                                      e.createElementVNode(
                                        "p",
                                        $M,
                                        e.toDisplayString(i.name),
                                        1
                                      ),
                                    ],
                                    10,
                                    RM
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                        e.createElementVNode("div", WM, [
                          HM,
                          e.createElementVNode("ul", qM, [
                            Q.value
                              ? (e.openBlock(),
                                e.createElementBlock("div", JM, [
                                  e.createVNode(Ce),
                                ]))
                              : e.createCommentVNode("", !0),
                            !Q.value && I.value.length > 0
                              ? (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  { key: 1 },
                                  e.renderList(
                                    I.value,
                                    (i) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        "li",
                                        {
                                          key: i.name,
                                          "data-idsegment": i.idsegment,
                                          "data-definition": i.definition,
                                          "data-title": i.title,
                                          onClick: (z) =>
                                            E(i.name) ? void 0 : F(i),
                                          class: e.normalizeClass([
                                            "filter_body_filter",
                                            {
                                              pendingClass: $(i.name),
                                              activeClass: Y(i.name),
                                              disabled_me: E(i.name),
                                            },
                                          ]),
                                        },
                                        [
                                          e.createElementVNode(
                                            "img",
                                            {
                                              class: "filter_image",
                                              src: i.iconSrc,
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            XM
                                          ),
                                          e.createElementVNode(
                                            "p",
                                            en,
                                            e.toDisplayString(i.title),
                                            1
                                          ),
                                          e.createElementVNode(
                                            "div",
                                            {
                                              title: "edit",
                                              class: "edit_icon_wrapper",
                                              onClick: e.withModifiers(
                                                (z) => Ne(i),
                                                ["stop"]
                                              ),
                                            },
                                            [
                                              e.createElementVNode(
                                                "img",
                                                {
                                                  class:
                                                    "filter_image edit_icon",
                                                  src: e.unref(xe),
                                                  alt: "",
                                                },
                                                null,
                                                8,
                                                Mn
                                              ),
                                            ],
                                            8,
                                            tn
                                          ),
                                        ],
                                        10,
                                        KM
                                      )
                                    )
                                  ),
                                  128
                                ))
                              : e.createCommentVNode("", !0),
                            e.createElementVNode(
                              "div",
                              {
                                class: "add_custom_filter",
                                onClick: g[0] || (g[0] = (i) => we()),
                              },
                              nn
                            ),
                          ]),
                        ]),
                      ]),
                    ],
                    2
                  ),
                  e.createElementVNode("div", an, [
                    e.createElementVNode("div", on, [
                      e.createElementVNode(
                        "p",
                        {
                          class: "left_button_text",
                          onClick: g[1] || (g[1] = (i) => G(!1, !0)),
                        },
                        " Clear Filters "
                      ),
                    ]),
                    e.createElementVNode("div", sn, [
                      b.value
                        ? e.createCommentVNode("", !0)
                        : (e.openBlock(),
                          e.createElementBlock(
                            e.Fragment,
                            { key: 0 },
                            [
                              n.value.pendingList.length < 2
                                ? (e.openBlock(),
                                  e.createElementBlock(
                                    "div",
                                    {
                                      key: 0,
                                      class: e.normalizeClass([
                                        "right_button",
                                        { disabled_me: !n.value.active },
                                      ]),
                                      onClick:
                                        g[2] ||
                                        (g[2] = (i) =>
                                          n.value.active ? k() : void 0),
                                    },
                                    ln,
                                    2
                                  ))
                                : e.createCommentVNode("", !0),
                            ],
                            64
                          )),
                      e.createElementVNode(
                        "div",
                        {
                          class: e.normalizeClass([
                            "right_button new_color",
                            { disabled_me: !ue.value && !W.value },
                          ]),
                        },
                        [
                          e.createElementVNode(
                            "p",
                            { class: "right_button_text", onClick: je },
                            e.toDisplayString(ge.value ? "Compare" : "Apply"),
                            1
                          ),
                        ],
                        2
                      ),
                    ]),
                  ]),
                ]),
              ])
            );
          }
        );
      },
    }),
    Xn = "",
    Nn = ne(rn, [["__scopeId", "data-v-8301638f"]]),
    cn = ((l) => (
      e.pushScopeId("data-v-10918ac8"), (l = l()), e.popScopeId(), l
    ))(() =>
      e.createElementVNode(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
        },
        [
          e.createElementVNode("path", {
            d: "M6.59922 12H17.3992M4.19922 7.19995H19.7992M10.1992 16.8H13.7992",
            stroke: "#4D5861",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          }),
        ],
        -1
      )
    ),
    Dn = { key: 0, class: "main_filter_button_text" },
    gn = { key: 1, class: "selected_filters" },
    un = { key: 0, class: "selected_filter_text" },
    dn = { key: 1, class: "selected_filter_text" },
    jn = e.defineComponent({
      __name: "FilterButton",
      props: { filteredValues: {}, onShowFilterMenu: { type: Function } },
      setup(l) {
        return (d, A) => (
          e.openBlock(),
          e.createElementBlock(
            "div",
            {
              class: "main_filter_button",
              onClick: A[0] || (A[0] = (r) => d.onShowFilterMenu()),
            },
            [
              cn,
              d.filteredValues
                ? (e.openBlock(),
                  e.createElementBlock("div", gn, [
                    (e.openBlock(!0),
                    e.createElementBlock(
                      e.Fragment,
                      null,
                      e.renderList(
                        d.filteredValues,
                        (r) => (
                          e.openBlock(),
                          e.createElementBlock(
                            "div",
                            { key: r.name, class: "selected_filter" },
                            [
                              r.name
                                ? (e.openBlock(),
                                  e.createElementBlock(
                                    "p",
                                    un,
                                    e.toDisplayString(r.name),
                                    1
                                  ))
                                : (e.openBlock(),
                                  e.createElementBlock("p", dn, "Add Filter")),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : (e.openBlock(), e.createElementBlock("p", Dn, "Add Filter")),
            ]
          )
        );
      },
    }),
    ta = "",
    An = ne(jn, [["__scopeId", "data-v-10918ac8"]]),
    In = e.defineComponent({
      __name: "HeatmapFilter",
      emits: ["on-filter-values-change", "on-filter-reset"],
      setup(l, { emit: d }) {
        const A = e.ref(),
          r = e.ref(!1),
          I = d,
          n = e.ref(null);
        function B(b) {
          console.log(b),
            (A.value = b.length > 0 ? b : void 0),
            I("on-filter-values-change", b);
        }
        function Z() {
          (A.value = void 0), I("on-filter-reset");
        }
        function L() {
          r.value = !r.value;
        }
        function W(b) {
          n.value && !n.value.contains(b.target) && (r.value = !1);
        }
        return (
          e.onMounted(() => {
            document.addEventListener("click", W);
          }),
          e.onBeforeUnmount(() => {
            document.removeEventListener("click", W);
          }),
          (b, U) => (
            e.openBlock(),
            e.createElementBlock(
              "div",
              {
                class: "main_filter_wrapper",
                ref_key: "filterWrapper",
                ref: n,
              },
              [
                e.createVNode(
                  An,
                  { onShowFilterMenu: L, filteredValues: A.value },
                  null,
                  8,
                  ["filteredValues"]
                ),
                e.withDirectives(
                  e.createVNode(
                    Nn,
                    {
                      onToggleShowFilterMenu: L,
                      defaultValues: A.value,
                      onFilterValues: B,
                      onResetAllFilters: Z,
                      ref: "filterComponent",
                    },
                    null,
                    8,
                    ["defaultValues"]
                  ),
                  [[e.vShow, r.value]]
                ),
              ],
              512
            )
          )
        );
      },
    }),
    Ma = "",
    Tn = ne(In, [["__scopeId", "data-v-475cd09a"]]);
  (Me.HeatmapFilter = Tn),
    Object.defineProperty(Me, Symbol.toStringTag, { value: "Module" });
});
