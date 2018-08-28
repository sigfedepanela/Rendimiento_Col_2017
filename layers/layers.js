var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_DepartamentosProductoresdeCaaPanelera_1 = new ol.format.GeoJSON();
var features_DepartamentosProductoresdeCaaPanelera_1 = format_DepartamentosProductoresdeCaaPanelera_1.readFeatures(json_DepartamentosProductoresdeCaaPanelera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosProductoresdeCaaPanelera_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosProductoresdeCaaPanelera_1.addFeatures(features_DepartamentosProductoresdeCaaPanelera_1);var lyr_DepartamentosProductoresdeCaaPanelera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosProductoresdeCaaPanelera_1, 
                style: style_DepartamentosProductoresdeCaaPanelera_1,
    title: 'Departamentos Productores de Caña Panelera<br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_0.png" />  1.0 - 3.6 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_1.png" />  3.6 - 5.3 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_2.png" />  5.3 - 7.1 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_3.png" />  7.1 - 8.8 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_4.png" />  8.8 - 12.0 <br />'
        });var format_RendimientodeCaaPaneleraToneladasHa2017_2 = new ol.format.GeoJSON();
var features_RendimientodeCaaPaneleraToneladasHa2017_2 = format_RendimientodeCaaPaneleraToneladasHa2017_2.readFeatures(json_RendimientodeCaaPaneleraToneladasHa2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodeCaaPaneleraToneladasHa2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RendimientodeCaaPaneleraToneladasHa2017_2.addFeatures(features_RendimientodeCaaPaneleraToneladasHa2017_2);var lyr_RendimientodeCaaPaneleraToneladasHa2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodeCaaPaneleraToneladasHa2017_2, 
                style: style_RendimientodeCaaPaneleraToneladasHa2017_2,
                title: '<img src="styles/legend/RendimientodeCaaPaneleraToneladasHa2017_2.png" /> Rendimiento de Caña Panelera (Toneladas/Ha)-2017'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_DepartamentosProductoresdeCaaPanelera_1.setVisible(true);lyr_RendimientodeCaaPaneleraToneladasHa2017_2.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_DepartamentosProductoresdeCaaPanelera_1,lyr_RendimientodeCaaPaneleraToneladasHa2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.set('fieldAliases', {});
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.set('fieldImages', {});
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.set('fieldLabels', {});
lyr_RendimientodeCaaPaneleraToneladasHa2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});