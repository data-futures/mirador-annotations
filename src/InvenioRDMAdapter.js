/** */
export default class InvenioRDMAdapter {
  /** */
  constructor(canvasId) {
    this.canvasId = canvasId;
    this.readOnly = true;
  }

  /** */
  get annotationPageId() {
    // assume for now that canvas.jpg has an associated canvas.jpg.short.wadm 
    // ideally have an endpoint in /api/iiif which is more flexible

    let url = this.canvasId
      .replace("iiif/record:", "record/")
      .replace("canvas", "files");

    url = `${url}short.wadm/content`;
    return url;
  }

  /** */
  async all() {
    return (await fetch(this.annotationPageId)).json();
  }
}
