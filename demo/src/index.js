
import mirador from 'mirador/dist/es/src/index';
import annotationPlugins from '../../src';
import InvenioRDMAdapter from '../../src/InvenioRDMAdapter';

function initMirador({ id }) {
  const params = new URLSearchParams(location.search);
  var manifest = params.get('m');
  var canvas = params.get('c');

  const el = document.getElementById(id);
  let config = {}, annotations = {};

  if (el) {
    manifest = el.dataset.manifest;
    canvas = el.dataset.canvas;
    config = JSON.parse(el.dataset.config || '{}');
    annotations = JSON.parse(el.dataset.annotations || '{}');
  } else {
    console.error('Manifest and canvas not provided.');
    return;
  }

  const defaultConfig = {
    annotation: {
      adapter: (canvasId) => new InvenioRDMAdapter(canvasId),
      exportLocalStorageAnnotations: false, 
    },
    workspaceControlPanel: {
      enabled: false,
    },
    window: {
      allowClose: false,
      allowFullscreen: true,
      allowTopMenuButton: true,
      allowMaximize: false,
      allowWindowSideBar: true,
      defaultSideBarPanel: 'annotations',
      defaultSidebarPanelHeight: 201,
      defaultSidebarPanelWidth: 235,
      defaultView: 'single',
      hideWindowTitle: true,
      sideBarOpen: false,
      switchCanvasOnSearch: false,
      panels: {
        info: true,
        attribution: true,
        canvas: false,
        annotations: false,
        search: false,
        layers: false,
      },
      views: [
        { key: 'single', behaviors: ['individuals'] },
        { key: 'book', behaviors: ['paged'] },
        { key: 'scroll', behaviors: ['continuous'] },
        { key: 'gallery' },
      ],
    },
  };

  const mergedConfig = {
    id: id,
    windows: [{
      manifestId: manifest,
      canvasId: canvas,
      thumbnailNavigationPosition: "far-bottom",
    }],
    ...defaultConfig,
    ...config,
  };
  Mirador.viewer(mergedConfig, [...annotationPlugins]);
}

initMirador({
  id: 'm3-dist',
});
