export default interface IWarehouseDto {
    lastChangeDate: string,
    supplierArticle: string,
    techSize: string,
    barcode: string,
    quantity: number,
    isSupply: boolean,
    isRealization: boolean,
    quantityFull: number,
    quantityNotInOrders: number,
    warehouse: number,
    warehouseName: string,
    inWayToClient: number,
    inWayFromClient: number,
    nmId: number,
    daysOnSite: number,
    brand: string,
    SCCode: string,
    Price: number,
    Discount: number
}