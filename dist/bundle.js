!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("react-tooltip-advance",["React","ReactDOM"],t):"object"==typeof exports?exports["react-tooltip-advance"]=t(require("react"),require("react-dom")):e["react-tooltip-advance"]=t(e.React,e.ReactDOM)}(self,((e,t)=>(()=>{"use strict";var r={745:(e,t,r)=>{var o=r(346);t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},639:t=>{t.exports=e},346:e=>{e.exports=t}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{a.r(n);var e=a(639),t=a.n(e);const r=({displayText:r,tooltipText:o})=>{const a=(0,e.useRef)(null);let n;return r?t().createElement("div",{className:"react-tooltip-container"},t().createElement("p",{className:"text-container",ref:e=>{n=e},onMouseOver:e=>{let t=e.clientX,r=e.clientY;a.current.style.top=r+10+"px",a.current.style.left=t+10+"px",a.current.style.opacity=1}},r),t().createElement("span",{className:"tooltip-container",ref:a},o)):t().createElement(t().Fragment,null)};a(745).createRoot(document.getElementById("root")).render(t().createElement(t().StrictMode,null,t().createElement(r,{displayText:"Hello text",tooltipText:"hello tooltip"})))})(),n})()));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUMxQixpQkFBWkMsU0FBMEMsaUJBQVhDLE9BQ3hDQSxPQUFPRCxRQUFVRCxFQUFRRyxRQUFRLFNBQVVBLFFBQVEsY0FDMUIsbUJBQVhDLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyx3QkFBeUIsQ0FBQyxRQUFTLFlBQWFKLEdBQzdCLGlCQUFaQyxRQUNkQSxRQUFRLHlCQUEyQkQsRUFBUUcsUUFBUSxTQUFVQSxRQUFRLGNBRXJFSixFQUFLLHlCQUEyQkMsRUFBUUQsRUFBWSxNQUFHQSxFQUFlLFNBQ3ZFLENBVEQsQ0FTR08sTUFBTSxDQUFDQyxFQUFrQ0MsSSx3Q0NQNUMsSUFBSUMsRUFBSSxFQUFRLEtBRWRSLEVBQVFTLFdBQWFELEVBQUVDLFdBQ3ZCVCxFQUFRVSxZQUFjRixFQUFFRSxXLFVDTDFCVCxFQUFPRCxRQUFVTSxDLFVDQWpCTCxFQUFPRCxRQUFVTyxDLEdDQ2JJLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYWQsUUFHckIsSUFBSUMsRUFBU1UsRUFBeUJFLEdBQVksQ0FHakRiLFFBQVMsQ0FBQyxHQU9YLE9BSEFnQixFQUFvQkgsR0FBVVosRUFBUUEsRUFBT0QsUUFBU1ksR0FHL0NYLEVBQU9ELE9BQ2YsQ0NyQkFZLEVBQW9CSyxFQUFLaEIsSUFDeEIsSUFBSWlCLEVBQVNqQixHQUFVQSxFQUFPa0IsV0FDN0IsSUFBT2xCLEVBQWlCLFFBQ3hCLElBQU0sRUFFUCxPQURBVyxFQUFvQlEsRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsQ0FBTSxFQ0xkTixFQUFvQlEsRUFBSSxDQUFDcEIsRUFBU3NCLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWFYsRUFBb0JZLEVBQUVGLEVBQVlDLEtBQVNYLEVBQW9CWSxFQUFFeEIsRUFBU3VCLElBQzVFRSxPQUFPQyxlQUFlMUIsRUFBU3VCLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxJQUUxRSxFQ05EWCxFQUFvQlksRUFBSSxDQUFDSyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0NsRmxCLEVBQW9Cc0IsRUFBS2xDLElBQ0gsb0JBQVhtQyxRQUEwQkEsT0FBT0MsYUFDMUNYLE9BQU9DLGVBQWUxQixFQUFTbUMsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEWixPQUFPQyxlQUFlMUIsRUFBUyxhQUFjLENBQUVxQyxPQUFPLEdBQU8sRSxrRENGOUQsTUErQkEsRUEvQnFCLEVBQUdDLGNBQWFDLGtCQUNuQyxNQUFNQyxHQUFhQyxFQUFBQSxFQUFBQSxRQUFPLE1BQzFCLElBQUlDLEVBZUosT0FBS0osRUFHSCx5QkFBS0ssVUFBVSwyQkFDYix1QkFBR0EsVUFBVSxpQkFBaUJDLElBakJqQkMsSUFDZkgsRUFBbUJHLENBQUUsRUFnQnlCQyxZQWJ2QkMsSUFDdkIsSUFBSUMsRUFBSUQsRUFBTUUsUUFDWkMsRUFBSUgsRUFBTUksUUFFWlgsRUFBV1ksUUFBUUMsTUFBTUMsSUFBTUosRUFBSSxHQUFLLEtBQ3hDVixFQUFXWSxRQUFRQyxNQUFNRSxLQUFPUCxFQUFJLEdBQUssS0FDekNSLEVBQVdZLFFBQVFDLE1BQU1HLFFBQVUsQ0FBQyxHQVEvQmxCLEdBRUgsMEJBQU1LLFVBQVUsb0JBQW9CQyxJQUFLSixHQUN0Q0QsSUFSa0Isb0NBVWpCLEUsT0N6QkdrQixXQUFvQkMsU0FBU0MsZUFBZSxTQUVwREMsT0FDSCxrQkFBQyxlQUFnQixLQUNmLGtCQUFDLEVBQVksQ0FBQ3RCLFlBQVksYUFBYUMsWUFBWSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRvb2x0aXAtYWR2YW5jZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcmVhY3QtdG9vbHRpcC1hZHZhbmNlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtdG9vbHRpcC1hZHZhbmNlL2V4dGVybmFsIHVtZCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwiUmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9Iiwid2VicGFjazovL3JlYWN0LXRvb2x0aXAtYWR2YW5jZS9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwiUmVhY3RET01cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9Iiwid2VicGFjazovL3JlYWN0LXRvb2x0aXAtYWR2YW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC10b29sdGlwLWFkdmFuY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVhY3QtdG9vbHRpcC1hZHZhbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC10b29sdGlwLWFkdmFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC10b29sdGlwLWFkdmFuY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC10b29sdGlwLWFkdmFuY2UvLi9zcmMvUmVhY3RUb29sdGlwLmpzIiwid2VicGFjazovL3JlYWN0LXRvb2x0aXAtYWR2YW5jZS8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicmVhY3QtdG9vbHRpcC1hZHZhbmNlXCIsIFtcIlJlYWN0XCIsIFwiUmVhY3RET01cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3QtdG9vbHRpcC1hZHZhbmNlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWN0LXRvb2x0aXAtYWR2YW5jZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzYzOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zNDZfXykgPT4ge1xucmV0dXJuICIsIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gZnVuY3Rpb24oYywgaCwgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uaHlkcmF0ZVJvb3QoYywgaCwgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182MzlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM0Nl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcmVhY3QtdG9vbHRpcC5zY3NzXCI7XHJcblxyXG5jb25zdCBSZWFjdFRvb2x0aXAgPSAoeyBkaXNwbGF5VGV4dCwgdG9vbHRpcFRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHRvb2x0aXBSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IHRvb2x0aXBDb250YWluZXI7XHJcblxyXG4gIGNvbnN0IHBhcmFSZWYgPSAoZWwpID0+IHtcclxuICAgIHRvb2x0aXBDb250YWluZXIgPSBlbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgICAgeSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgdG9vbHRpcFJlZi5jdXJyZW50LnN0eWxlLnRvcCA9IHkgKyAxMCArIFwicHhcIjtcclxuICAgIHRvb2x0aXBSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0geCArIDEwICsgXCJweFwiO1xyXG4gICAgdG9vbHRpcFJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gIH07XHJcblxyXG4gIGlmICghZGlzcGxheVRleHQpIHJldHVybiA8PjwvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtdG9vbHRpcC1jb250YWluZXJcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIiByZWY9e3BhcmFSZWZ9IG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9PlxyXG4gICAgICAgIHtkaXNwbGF5VGV4dH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRhaW5lclwiIHJlZj17dG9vbHRpcFJlZn0+XHJcbiAgICAgICAge3Rvb2x0aXBUZXh0fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RUb29sdGlwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwiLi9zcmMvUmVhY3RUb29sdGlwLmpzXCI7XHJcblxyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG5cclxucm9vdC5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8UmVhY3RUb29sdGlwIGRpc3BsYXlUZXh0PVwiSGVsbG8gdGV4dFwiIHRvb2x0aXBUZXh0PVwiaGVsbG8gdG9vbHRpcFwiIC8+XHJcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxyXG4pO1xyXG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182MzlfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM0Nl9fIiwibSIsImNyZWF0ZVJvb3QiLCJoeWRyYXRlUm9vdCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJkaXNwbGF5VGV4dCIsInRvb2x0aXBUZXh0IiwidG9vbHRpcFJlZiIsInVzZVJlZiIsInRvb2x0aXBDb250YWluZXIiLCJjbGFzc05hbWUiLCJyZWYiLCJlbCIsIm9uTW91c2VPdmVyIiwiZXZlbnQiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiY3VycmVudCIsInN0eWxlIiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9