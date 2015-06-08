angular.module('ngGrid').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('aggregateTemplate.html',
    "<div ng-click=\"row.toggleExpand()\" ng-style=\"rowStyle(row)\" class=\"ngAggregate\">\r" +
    "\n" +
    "    <span class=\"ngAggregateText\">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}}{{AggItemsLabel}})</span>\r" +
    "\n" +
    "    <div class=\"{{row.aggClass()}}\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('cellEditTemplate.html',
    "<div ng-cell-has-focus ng-dblclick=\"CELL_EDITABLE_CONDITION && editCell()\">\r" +
    "\n" +
    "\t<div ng-edit-cell-if=\"!(isFocused && CELL_EDITABLE_CONDITION)\">\t\r" +
    "\n" +
    "\t\tDISPLAY_CELL_TEMPLATE\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ng-edit-cell-if=\"isFocused && CELL_EDITABLE_CONDITION\">\r" +
    "\n" +
    "\t\tEDITABLE_CELL_TEMPLATE\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('cellTemplate.html',
    "<div class=\"ngCellText\" ng-class=\"col.colIndex()\"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>"
  );


  $templateCache.put('checkboxCellTemplate.html',
    "<div class=\"ngSelectionCell\"><input tabindex=\"-1\" class=\"ngSelectionCheckbox\" type=\"checkbox\" ng-checked=\"row.selected\" /></div>"
  );


  $templateCache.put('checkboxHeaderTemplate.html',
    "<input class=\"ngSelectionHeader\" type=\"checkbox\" ng-show=\"multiSelect\" ng-model=\"allSelected\" ng-change=\"toggleSelectAll(allSelected, true)\"/>"
  );


  $templateCache.put('editableCellTemplate.html',
    "<input ng-class=\"'colt' + col.index\" ng-input=\"COL_FIELD\" ng-model=\"COL_FIELD\" />"
  );


  $templateCache.put('footerTemplate.html',
    "<div ng-show=\"showFooter\" class=\"ngFooterPanel\" ng-class=\"{'ui-widget-content': jqueryUITheme, 'ui-corner-bottom': jqueryUITheme}\" ng-style=\"footerStyle()\">\r" +
    "\n" +
    "    <div class=\"ngTotalSelectContainer\" >\r" +
    "\n" +
    "        <div class=\"ngFooterTotalItems\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\" >\r" +
    "\n" +
    "            <span class=\"ngLabel\">{{i18n.ngTotalItemsLabel}} {{maxRows()}}</span><span ng-show=\"filterText.length > 0\" class=\"ngLabel\">({{i18n.ngShowingItemsLabel}} {{totalFilteredItemsLength()}})</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"ngFooterSelectedItems\" ng-show=\"multiSelect\">\r" +
    "\n" +
    "            <span class=\"ngLabel\">{{i18n.ngSelectedItemsLabel}} {{selectedItems.length}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ngPagerContainer\" style=\"float: right; margin-top: 10px;\" ng-show=\"enablePaging\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\">\r" +
    "\n" +
    "        <div style=\"float:left; margin-right: 10px;\" class=\"ngRowCountPicker\">\r" +
    "\n" +
    "            <span style=\"float: left; margin-top: 3px;\" class=\"ngLabel\">{{i18n.ngPageSizeLabel}}</span>\r" +
    "\n" +
    "            <select style=\"float: left;height: 27px; width: 100px\" ng-model=\"pagingOptions.pageSize\" >\r" +
    "\n" +
    "                <option ng-repeat=\"size in pagingOptions.pageSizes\">{{size}}</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div style=\"float:left; margin-right: 10px; line-height:25px;\" class=\"ngPagerControl\" style=\"float: left; min-width: 135px;\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageToFirst()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerFirstTitle}}\"><div class=\"ngPagerFirstTriangle\"><div class=\"ngPagerFirstBar\"></div></div></button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageBackward()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerPrevTitle}}\"><div class=\"ngPagerFirstTriangle ngPagerPrevTriangle\"></div></button>\r" +
    "\n" +
    "            <input class=\"ngPagerCurrent\" min=\"1\" max=\"{{currentMaxPages}}\" type=\"number\" style=\"width:50px; height: 24px; margin-top: 1px; padding: 0 4px;\" ng-model=\"pagingOptions.currentPage\"/>\r" +
    "\n" +
    "            <span class=\"ngGridMaxPagesNumber\" ng-show=\"maxPages() > 0\">/ {{maxPages()}}</span>\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageForward()\" ng-disabled=\"cantPageForward()\" title=\"{{i18n.ngPagerNextTitle}}\"><div class=\"ngPagerLastTriangle ngPagerNextTriangle\"></div></button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageToLast()\" ng-disabled=\"cantPageToLast()\" title=\"{{i18n.ngPagerLastTitle}}\"><div class=\"ngPagerLastTriangle\"><div class=\"ngPagerLastBar\"></div></div></button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('gridTemplate.html',
    "<div class=\"ngTopPanel\" ng-class=\"{'ui-widget-header':jqueryUITheme, 'ui-corner-top': jqueryUITheme}\" ng-style=\"topPanelStyle()\">\r" +
    "\n" +
    "    <div class=\"ngGroupPanel\" ng-show=\"showGroupPanel()\" ng-style=\"groupPanelStyle()\">\r" +
    "\n" +
    "        <div class=\"ngGroupPanelDescription\" ng-show=\"configGroups.length == 0\">{{i18n.ngGroupPanelDescription}}</div>\r" +
    "\n" +
    "        <ul ng-show=\"configGroups.length > 0\" class=\"ngGroupList\">\r" +
    "\n" +
    "            <li class=\"ngGroupItem\" ng-repeat=\"group in configGroups\">\r" +
    "\n" +
    "                <span class=\"ngGroupElement\">\r" +
    "\n" +
    "                    <span class=\"ngGroupName\">{{group.displayName}}\r" +
    "\n" +
    "                        <span ng-click=\"removeGroup($index)\" class=\"ngRemoveGroup\">x</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                    <span ng-hide=\"$last\" class=\"ngGroupArrow\"></span>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ngHeaderContainer\" ng-style=\"headerStyle()\">\r" +
    "\n" +
    "        <div ng-header-row class=\"ngHeaderScroller\" ng-style=\"headerScrollerStyle()\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-grid-menu></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"ngViewport\" unselectable=\"on\" ng-viewport ng-class=\"{'ui-widget-content': jqueryUITheme}\" ng-style=\"viewportStyle()\">\r" +
    "\n" +
    "    <div class=\"ngCanvas\" ng-style=\"canvasStyle()\">\r" +
    "\n" +
    "        <div ng-style=\"rowStyle(row)\" ng-repeat=\"row in renderedRows\" ng-click=\"row.toggleSelected($event)\" ng-class=\"row.alternatingRowClass()\" ng-row></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-grid-footer></div>\r" +
    "\n"
  );


  $templateCache.put('headerCellTemplate.html',
    "<div class=\"ngHeaderSortColumn {{col.headerClass}}\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !col.noSortVisible() }\">\r" +
    "\n" +
    "    <div ng-click=\"col.sort($event)\" ng-class=\"'colt' + col.index\" class=\"ngHeaderText\">{{col.displayName}}</div>\r" +
    "\n" +
    "    <div class=\"ngSortButtonDown\" ng-click=\"col.sort($event)\" ng-show=\"col.showSortButtonDown()\"></div>\r" +
    "\n" +
    "    <div class=\"ngSortButtonUp\" ng-click=\"col.sort($event)\" ng-show=\"col.showSortButtonUp()\"></div>\r" +
    "\n" +
    "    <div class=\"ngSortPriority\">{{col.sortPriority}}</div>\r" +
    "\n" +
    "    <div ng-class=\"{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }\" ng-click=\"togglePin(col)\" ng-show=\"col.pinnable\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"col.resizable\" class=\"ngHeaderGrip\" ng-click=\"col.gripClick($event)\" ng-mousedown=\"col.gripOnMouseDown($event)\"></div>\r" +
    "\n"
  );


  $templateCache.put('headerRowTemplate.html',
    "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell\">\r" +
    "\n" +
    "\t<div class=\"ngVerticalBar\" ng-style=\"{height: col.headerRowHeight}\" ng-class=\"{ ngVerticalBarVisible: !$last }\">&nbsp;</div>\r" +
    "\n" +
    "\t<div ng-header-cell></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('menuTemplate.html',
    "<div ng-show=\"showColumnMenu || showFilter\"  class=\"ngHeaderButton\" ng-click=\"toggleShowMenu()\">\r" +
    "\n" +
    "    <div class=\"ngHeaderButtonArrow\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"showMenu\" class=\"ngColMenu\">\r" +
    "\n" +
    "    <div ng-show=\"showFilter\">\r" +
    "\n" +
    "        <input placeholder=\"{{i18n.ngSearchPlaceHolder}}\" type=\"text\" ng-model=\"filterText\"/>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-show=\"showColumnMenu\">\r" +
    "\n" +
    "        <span class=\"ngMenuText\">{{i18n.ngMenuText}}</span>\r" +
    "\n" +
    "        <ul class=\"ngColList\">\r" +
    "\n" +
    "            <li class=\"ngColListItem\" ng-repeat=\"col in columns | ngColumns\">\r" +
    "\n" +
    "                <label><input ng-disabled=\"col.pinned\" type=\"checkbox\" class=\"ngColListCheckbox\" ng-model=\"col.visible\"/>{{col.displayName}}</label>\r" +
    "\n" +
    "\t\t\t\t<a title=\"Group By\" ng-class=\"col.groupedByClass()\" ng-show=\"col.groupable && col.visible\" ng-click=\"groupBy(col)\"></a>\r" +
    "\n" +
    "\t\t\t\t<span class=\"ngGroupingNumber\" ng-show=\"col.groupIndex > 0\">{{col.groupIndex}}</span>          \r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('rowTemplate.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\">\r" +
    "\n" +
    "\t<div class=\"ngVerticalBar\" ng-style=\"{height: rowHeight}\" ng-class=\"{ ngVerticalBarVisible: !$last }\">&nbsp;</div>\r" +
    "\n" +
    "\t<div ng-cell></div>\r" +
    "\n" +
    "</div>"
  );

}]);
