const mainSelector = (store: { store: any }) => store.store

export default mainSelector

export const flagSelector = (store: { store: any }) => mainSelector(store).flag
export const pageNumberSelector = (store: { store: any }) => mainSelector(store).pageNumber
export const allDataSelector = (store: { store: any }) => mainSelector(store).allData
export const totalPagesCountSelector = (store: { store: any }) => mainSelector(store).totalPageCount
export const currentPageNumberSelector = (store: { store: any }) => mainSelector(store).currentPageData
