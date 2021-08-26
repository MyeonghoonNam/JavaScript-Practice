const ROUTE_CHANGE_EVENT_NAME = 'route-change';

export const initRouter = () => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e) => {
    const {nextUrl} = e.detail;

    if(nextUrl){
      history.pushState(null, null, nextUrl);
      this.route();
    }
  })
}

export const push = (nextUrl) => {
  window.dispatchEvent(new CustomEvent('route-change', {
    detail: {
      nextUrl
    }
  }));
}